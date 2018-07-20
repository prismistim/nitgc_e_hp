$(function() {
  $('#header').load('../template/header.html', function(){
    $.getScript('./toggle.js');
  });

  $('#header_').load('../template/header_.html', function(){
    $.getScript('./toggle.js');
  });
});