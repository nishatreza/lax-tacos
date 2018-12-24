
$(document).ready(function () {
$(window).scroll(function(){
    if($('.navbar').offset().top > 50){
        $('.nav-link').addClass('top-nav-collapse');
        
    } else{
         $('.nav-link').removeClass('top-nav-collapse');
    }
});

});



$(function () {
    $('.page-scroll a').bind('click',function () {
        var $anchor = $(this);
        $('html,body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        },1000);
        event.preventDefault();
        
        
    });
    
});



//carousel
//
//
//$('.owl-carousel').owlCarousel({
//                stagePadding: 50,
//                loop: true,
//                margin: 10,
//                nav: true,
//                responsive: {
//                    0: {
//                        items: 1
//                    },
//                    600: {
//                        items: 3
//                    },
//                    1000: {
//                        items: 5
//                    }
//                }
//            });
//
//
//
//






//$(document).ready(function() {
//  $('#media').carousel({
//    pause: true,
//    interval: 40000
//  });
//});


//copy js filter->

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

});


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
