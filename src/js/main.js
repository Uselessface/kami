
$(document).ready(function () {
    let menuBtn = document.querySelector('.burger_btn');
    let menu = document.querySelector('.burger_menu');

    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('active_burger');
        menu.classList.toggle('active_burger_menu');
    })



    $('.slider_container').slick({
        arrows: true,
        draggable: true,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [

            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    autoplay:true,
                }
            }
        ]
    });

    $(".tabs_selectors .tab").click(function() {
        $(".wrapper .tab").removeClass("active_tab").eq($(this).index()).addClass("active_tab");
        $(".tab_content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active_content");

    $(".question_group").click(function() {
        $(".question_group").removeClass("active_group").eq($(this).index()).addClass("active_group");
        $(".question_tabs .question_tab").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active_question_tab");


    $('li.question').click( function(){
        let header = $(this).find('.q').text();
        $('.popup_name').text(header);
        let answer = $(this).find('.answer').text();
        $('.popup_answer').text(answer);
        $('.popup').fadeIn();
        return false;
    });
    $('.close_popup').click(function() {
        $(this).parents('.popup').fadeOut();
        return false;
    });

});

