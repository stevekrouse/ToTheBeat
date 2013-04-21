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
        setTimeout(function(){slide(num+1);}, window.intervals[num]);
    }
}


//main code
$(document).ready(ready_vid());
