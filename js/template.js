$(function() {
  $('#header').load('/template/header.html', function(){
    $.getScript('/js/toggle.js');
  });
})