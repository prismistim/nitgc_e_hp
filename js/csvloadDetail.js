// index.html
$(window).on('load', function () {
  $.get('../csv/news.csv', function(data){
    var csv1 = $.csv()(data);
    var newslist = '';
    var newsDetail = '';
    var cutFigure = 100;
    var afterText = '...';

    $(csv1).each(function(index) {
      newsDetail += '<a href="' + this[0] + '">';
      newsDetail += '<div class="newsList">';
      newsDetail += '<div class="newsDate">' + this[1] + '</div>';
      newsDetail += '<div class="newsTitle">' + this[2] + '</div>';
      if(this[3] != undefined ){
        newsDetail += '<div class="newsLinkDetail"><i class="fa fa-angle-double-right">&nbsp;' + this[3] + '（クリックすると移動します）</i></div>';
      }
      newsDetail += '</div></a>';
    })
    $("#newsDetail").append(newsDetail);
  });

  $.get('../csv/event.csv', function(data){
    var csv2 = $.csv()(data);
    var eventlist = '';
    var eventDetail = '';

    $(csv2).each(function(index) {
      eventDetail += '<a href="' + this[0] + '">';
      eventDetail += '<div class="eventList">';
      eventDetail += '<div class="eventDate">' + this[1] + '</div>';
      eventDetail += '<div class="eventTitle">' + this[2] + '</div>';
      eventDetail += '</div></a>';
    })
    $("#eventlist").append(eventlist);
    $("#eventDetail").append(eventDetail);
  });
});



