$(document).ready(function() {
$('.fancybox').fancybox();
new WOW().init();

$( ".menu a" ).click(function() {
  var target = $(this).attr('hedef');
  $('.main-page').removeClass('main-page-open');
  $('.menu a').removeClass('active');

  $(target).addClass('main-page-open');
  var target = $(this).attr('hedef');
  $('.main-page-open .crmImg').each(function(index, element) {
    var image =  $(this).attr('crm-src');
    $(this).removeAttr('crm-src');
    $(this).attr('src',image);
  });

  $(this).addClass('active');
  $( ".close-btn" ).click(function() {
    $(target).removeClass('main-page-open');
    $('.menu a').removeClass('active');
  });
});
// Scroll to Active Mvenu
$(document).on("scroll", onScroll); 
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.menu a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.menu a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}	
 // click goto
$(".up").click(function() {
 $('html, body').animate({
  scrollTop: $(".wrapper").offset().top
 }, 1500);
});

   /* Every time the window is scrolled ... */
  $(window).scroll( function(){

    /* Check the location of each desired element */
	if($('.main-page')[0]){

    var bottom_of_object = $('.main-page').offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object ){
      $('.main-page').first().addClass('main-page-open');
      $('.main-page').first().removeClass('main-page');
      $('.main-page-open .crmImg').each(function(index, element) {
        var image =  $(this).attr('crm-src');
        $(this).removeAttr('crm-src');
        $(this).attr('src',image);
      });
    }
	
  }
	
  });
	


	
	
	$(function() {
	
	//Scrollify
	$.scrollify({
		section : "section",
		after: function(obj) {
                var sectionID = $.scrollify.current()[0].id;
                $('a.goto').each(function(index, obj) {
                    var id = $('[data-url=' + sectionID + ']');
                });
            }
	});
	
	// Smooth Scroll
	var $root = $('html, body');
    $('a.goto').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 1000);
        return false;
    });
	/*if($(window).width() <= 768) {
		$.scrollify.destroy();
	}*/
	});
	
	
});