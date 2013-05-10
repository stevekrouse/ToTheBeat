window.images = new Array();

function uploadPics() {
    filepicker.setKey('ATNg7z7BsQQQf4gWMHHnQz');
    filepicker.pickMultiple({
        mimetypes: ['image/*']
    },
                            function(fpfiles){
                                $(fpfiles).each(function() {
                                    window.images.push(this.url);});
                                $('#pics').replaceWith($('<img>',{src: "http://www.iconsdb.com/icons/download/green/check-mark-3-64.png"}));
                                $('#jam').css('visibility', 'visible');
                            },
                            function(FPError){
                                console.log(FPError.toString());
                            }
                           );
};

function uploadSong() {
    filepicker.setKey('ATNg7z7BsQQQf4gWMHHnQz');
    filepicker.pick({
        mimetypes: ['audio/*']
    },
                    function(FPFile){
                        window.song = FPFile.url;
                        $('#jam').replaceWith($('<img>',{src: "http://www.iconsdb.com/icons/download/green/check-mark-3-64.png"}));
                        $('#dance').css('visibility', 'visible');
                    },
                    function(FPError){
                        console.log(FPError.toString());
                    }
                   );
}

function createVideo() {
    url = "/create?images=" + encode(window.images) + "&song=" + encode(song);
    window.location.href = url;
}

function encode(value){
    //stolen from stack overflow...
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
}
