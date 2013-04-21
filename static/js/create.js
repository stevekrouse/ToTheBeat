$(document).keypress(function(event) {
    if (window.start_time != null) {
    if ( event.which == 32){
        slide(window.num);
        window.num++;
        $('#number').text(window.images.length - window.num);
        console.log(event.timeStamp - window.start_time);
        window.intervals.push(event.timeStamp - window.start_time);
        if (window.num >= window.images.length){
            done();
        }
    }
}});


function done(){
    console.log(window.intervals)
    $.post('/create',
           {'images': window.images, 'song': window.song, 'intervals': window.intervals},
           function(url) {
               window.location.href = url;
           });
}
// Create an <audio> element dynamically.
var audio = new Audio();



$(document).ready(function(){
    window.intervals= new Array();
    window.onload = function() {
        $('#slide').attr('src',window.images[0])
        $('#number').text(images.length - 1)};
    window.num = 1;
    audio.src = window.song;
    audio.controls = false;
    audio.autoplay = false;
    window.context = new webkitAudioContext();
    var source = context.createMediaElementSource(audio);
    document.body.appendChild(audio);
    ready_vid();
});

function start() {
    audio.play()
    window.start_time = new Date().getTime();
    $('#start').css('display', 'none');
    $('#retry').css('display', 'inline-block');
}

function ready_vid(){
    /*
      parts = window.location.pathname.split('/')
      if (parts[parts.length -1] == '')
      _id = parts[parts.length - 2]
      else _id = parts[parts.length - 1]

      //pulls the json data about a particular video
      if (_id != '' && _id != null){
      $.getJSON('/get_data/' + _id, function(data, video){
      window.images = (data['images']);
      window.song = data['song'];
      window.intervals = data['intervals'];
    */
    //makes image Objects out of images
    window.imagesObjects = new Array();
    for (i = 0; i < window.images.length; i++) {
        image=new Image()
        image.src= images[i]
        window.imagesObjects[i] = image
    }

    //sets the video display to the first photo
    $("#slide").attr("src",window.images[0]);
    $('#container').click(slide(0));
    window.times = new Array();

}

function slide(num){
    if (num < window.imagesObjects.length){
        document.images.slide.src=window.imagesObjects[num].src;
    }
}
