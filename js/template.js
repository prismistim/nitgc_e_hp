$(function() {
  $('#header').load('./template/header.html', function(){
    $.getScript('./js/toggle.js');
  });

  $('#header_').load('../template/header_.html', function(){
    $.getScript('../js/toggle.js');
  });

  $('#header__').load('../../template/header__.html', function(){
    $.getScript('../../js/toggle.js');
  });
});