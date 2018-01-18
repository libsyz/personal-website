
$( document ).ready(function() {
  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        console.log(target)
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 800);
    }

});
});

