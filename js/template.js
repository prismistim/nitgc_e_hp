$(function() {
  $('#header').load('/elec/template/header.html', function(){
    $.getScript('/elec/js/toggle.js');
  });
})