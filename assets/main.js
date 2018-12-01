// main javascript file

$(function () {

    // navbar changes
    $(document).scroll(function () {
        // margin top of page container + height of header
        var $nav = $(".sticky-top");
        var $logo = $(".navbar-brand img");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if ($nav.hasClass('scrolled')) {
            $logo.attr('src', '/images/text-logo.png');
        } else {
            $logo.attr('src', '/images/logo-white.png');
        }
        
    });

});

$(document).ready(function(){

    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
             window.location.hash = hash;
        });
      }
    });
});

// portfolio gallery
$(function(){
$('#portfolio-gallery').masonry({
    // options
    itemSelector : '.portfolio-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});
});


