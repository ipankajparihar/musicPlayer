var queue = $('.dropbtn');
var tag = false;
var tag1 = false;
var heart = $(".fa-heart");
var dropContent = $('.dropdown-content');
var song1 = $('.song1');
var pause = $('.fa-play');
var tag2 = false;
var plus = $('.fa-plus');
var forward = $('.fa-forward');
var backward = $('.fa-backward');
var img = $('#bottomBarImg');
var txt = $(".bottomBarTxt");
var txt1 = $(".bottomBarTxt1");





//queue clicked

queue.click(function() {
    if (!tag) {
        dropContent.css({
            "display": "block",

        });
        tag = true;
    } else {
        dropContent.css({
            "display": "none",
        })
        tag = false;


    }

})


//change heart color on click

heart.click(function() {
    if (!tag1) {
        $(this).css({
            "color": "red",

        });
        tag1 = true;
    } else {
        $(this).css({
            "color": "grey",
        })
        tag1 = false;


    }

})

//plus sign
plus.click(function() {
    if (!tag1) {
        $(this).css({
            "color": "white",

        });
        tag1 = true;
    } else {
        $(this).css({
            "color": "grey",
        })
        tag1 = false;


    }

})





//artist image clicked
$('.artistImage').click(function() {
    var url = "singlePlayer.html";
    $(location).attr('href', url);
})




//music player


$(document).ready(function() {

    var audioElement = document.createElement('audio');
    var audioElement1 = document.createElement('audio');
    var audioElement2 = document.createElement('audio');



    audioElement.setAttribute('src', 'song/camila.mp3');
    audioElement1.setAttribute('src', 'song/bebeRexha.mp3');
    audioElement2.setAttribute('src', 'song/Roar.mp3');

    var music = [audioElement, audioElement1, audioElement2];
    var n = 0;
    // audioElement.addEventListener('ended', function() {
    //     this.play();
    // }, false);

    // audioElement.addEventListener("canplay", function() {
    //     $("#length").text("Duration:" + audioElement.duration + " seconds");
    //     $("#source").text("Source:" + audioElement.src);
    //     $("#status").text("Status: Ready to play").css("color", "green");
    // });

    // audioElement.addEventListener("timeupdate", function() {
    //     $("#currentTime").text("Current second:" + audioElement.currentTime);
    // });



    audioElement.addEventListener("canplay", function() {
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color", "green");
    });

    audioElement.addEventListener("timeupdate", function() {
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });

    //music links
    var imgSrc = "/photos/camila.jpg";
    var imgSrc1 = "/photos/bebe.jpg";
    var imgSrc2 = "/photos/katty.jpg"
    var image = [imgSrc, imgSrc1, imgSrc2];


    //name links

    var name1 = "Havana";
    var name2 = "Meant to";
    var name3 = "Roar";

    var singerName1 = "Camila";
    var singerName2 = "Bebe Rexha";
    var singerName3 = "Katy Perry";

    var name = [name1, name2, name3];
    var singerName = [singerName1, singerName2, singerName3];




    //play-pause button

    pause.click(function() {
        $('.bottomBar').css({
            "display": "flex",
        })
        img.attr('src', image[0]);
        txt.text(name[0]);
        txt1.text(singerName[0]);
        if (!tag2) {
            $(this).toggleClass('fa-play fa-pause')
            music[n].play()
            $('.bottomBar .fa-play').toggleClass('fa-pause fa-play')
            tag2 = true;
        } else if (tag2) {
            $(this).toggleClass('fa-pause fa-play')
            music[n].pause()
            $('.bottomBar .fa-pause').toggleClass('fa-play fa-pause')
            tag2 = false;


        }

    })


    //forward
    forward.click(function() {

        if (n > -1 && n < 2) {
            music[n].pause();
            n = n + 1;
            img.attr('src', image[n]);
            txt.text(name[n]);
            txt1.text(singerName[n]);
            music[n].play();
        } else {
            music[n].pause();
            n = 0;
            img.attr('src', image[n]);
            txt.text(name[n]);
            txt1.text(singerName[n]);
            music[n].play();



        }


    })

    //backward
    backward.click(function() {
        if (n > 0 && n < 3) {
            music[n].pause();
            n = n - 1;
            img.attr('src', image[n]);
            txt.text(name[n]);
            txt1.text(singerName[n]);
            music[n].play();
        } else {
            music[n].pause();
            n = 2;
            img.attr('src', image[n]);
            txt.text(name[n]);
            txt1.text(singerName[n]);
            music[n].play();



        }

    })





    //progress bar
    function move() {
        var elem = document.getElementById("widthbar");
        var width = 0;
        var id = setInterval(frame, 0.5);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else if (music[n].play()) {
                clearInterval(id);
            } else {
                width++;
                $(this).css({
                    "background-color": "red"
                })
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';

            }
        }
    }



    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});