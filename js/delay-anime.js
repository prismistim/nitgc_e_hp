function animate($ani, $valPos) {
  
  if ($ani === 'fadeIn') {
    $(".ani-" + $ani).css("opacity", "0");
  }
 
  $(".ani-" + $ani).each(function() {
 
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
 
    if (scroll > imgPos - windowHeight + windowHeight / $valPos) {
      $(this).addClass("animated " + $ani);
    }
   //  else {
   //  $(this).removeClass("animated " + $ani);
   //  }
 
  });
 
}
 
jQuery(window).on('touchstart scroll', function(){
 
  //timerID;
  var timer = false;
 
  if (timer !== false) {
    clearTimeout(timer);
  }
 
  timer = setTimeout(function() {
 
    animate('fadeIn','7');
 
  }, 100);
 });