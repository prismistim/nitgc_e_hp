// index.html
$(window).on('load', function () {
  $.get('/csv/news.csv', function(data){
    var csv1 = $.csv()(data);
    var newslist = '';
    var newsDetail = '';

    $(csv1).each(function(index) {
      newslist += '<li>';
      newslist += '<time data-time="' + this[1] + '">' + this[1] + '</time>';
      newslist += '<a href="/contents/news/' + this[0] + '.html">' + this[2] + '</a>'
      newslist += '</li>';
      if(index == 4){
        return false;
      }
    })
    $("#newslist").append(newslist);

    $(csv1).each(function(index) {
      newsDetail += '<a href="/contents/news/' + this[0] + '.html">';
      newsDetail += '<div class="newsList">';
      newsDetail += '<div class="newsDate">' + this[1] + '</div>';
      newsDetail += '<div class="newsTitle">' + this[2] + '</div>';
      newsDetail += '</div></a>';
    })
    $("#newsDetail").append(newsDetail);
  });

  $.get('/csv/event.csv', function(data){
    var csv2 = $.csv()(data);
    var eventlist = '';
    var eventDetail = '';

    $(csv2).each(function(index) {
      eventlist += '<li>';
      eventlist += '<time>' + this[1] + '</time>';
      eventlist += '<a href="/contents/event/' + this[0] + '.html">' + this[2] + '</a>';
      eventlist += '</li>';
      eventDetail += '<a href="/contents/event/' + this[0] + '.html">';
      eventDetail += '<div class="eventList">';
      eventDetail += '<div class="eventDate">' + this[1] + '</div>';
      eventDetail += '<div class="eventTitle">' + this[2] + '</div>';
      eventDetail += '</div></a>';
    })
    $("#eventlist").append(eventlist);
    $("#eventDetail").append(eventDetail);
  });
});

// 教員紹介
$(window).on('load', function () {
  $.get('/csv/researcher_e.csv', function(data){
    var csv3 = $.csv()(data);
    var researcher_eList = '';

    $(csv3).each(function(index) {
      researcher_eList += '<a href="http://www.gifu-nct.ac.jp/elec/' + this[1] + '" target="blank" style="color:#000000;"><div class="researcher_e">';
      researcher_eList += '<div class="reseacherName"><small>' + this[0] + '</small>' + '&nbsp;' + this[2] + '</div>';
      researcher_eList += '<div class="jobTitle">' + this[4] + '<small class="engName">' + this[3] + '</small></div>';
      researcher_eList += '<div class="field"><span class="badge badge-warning">' + this[5] +'</span>' + '<span class="badge badge-warning">' + this[6] + '</span>' + '<span class="badge badge-warning">' + this[7] +'</span>' + '<span class="badge badge-warning">' + this[8] +'</span>' + '<span class="badge badge-warning">' + this[9] +'</span></div>';
      researcher_eList += '</div></a>';
    })
    $("#researcher_eList").append(researcher_eList);
  });

  $.get('/csv/researcher_j.csv', function(data){
    var csv4 = $.csv()(data);
    var researcher_jList = '';

    $(csv4).each(function(index) {
      researcher_jList += '<a href="http://www.gifu-nct.ac.jp/elec/' + this[1] + '" target="blank" style="color:#000000;"><div class="researcher_j">';
      researcher_jList += '<div class="reseacherName"><small>' + this[0] + '</small>' + '&nbsp;' + this[2] + '</div>';
      researcher_jList += '<div class="jobTitle">' + this[4] + '<small class="engName">' + this[3] + '</small></div>';
      researcher_jList += '<div class="field"><span class="badge badge-info">' + this[5] +'</span>' + '<span class="badge badge-info">' + this[6] + '</span>' + '<span class="badge badge-info">' + this[7] +'</span>' + '<span class="badge badge-info">' + this[8] +'</span>' + '<span class="badge badge-info">' + this[9] +'</span></div>';
      researcher_jList += '</div></a>';
    })
    $("#researcher_jList").append(researcher_jList);
  });
});