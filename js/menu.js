


// var filter1 = document.getElementsByClassName("filter");
// var menuButtonClass = document.getElementsByClassName("menu-bar");
// var filter = filter1[0];
// var menuButton = menuButtonClass[0];

// var menuButtonClick = function() {
//     filter.style.backgroundColor = "white";
// };

// menuButton.addEventListener("click", menuButtonClick);


///////////jQueryを使う
$(function(){
    $('.menu-bar').click(function() {
        if($('.filter').hasClass("white")) {
            $('.filter').removeClass("white");
            $('.header-title-wrap').css("display", "block");
            $('.eyecatch ul').remove();

        }
        else {
            $('.filter').addClass("white");
            $('.header-title-wrap').css("display", "none");
            $('.eyecatch').prepend('<ul><li><a href="">TOP</a></li><li><a href="">VISION</a></li><li><a href="">MERIT</a></li><li><a href="">SERVICE</a></li><li><a href="">COMPANY</a></li><li><a href="">CONTACT</a></li></ul>');

        }
    
    });
});




