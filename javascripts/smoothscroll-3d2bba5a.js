$(document).ready(function(){$('a[href^="#"]').on("click",function(e){var t=$(this.getAttribute("href"));t.length&&"#carousel-example-generic"!==t.selector&&(e.preventDefault(),$("html, body").stop().animate({scrollTop:t.offset().top},800))})});