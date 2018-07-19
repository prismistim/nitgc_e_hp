// index.html
$(window).on('load', function () {
  $.get('/elec/csv/news.csv', function(data){
    var csv1 = $.csv()(data);
    var newslist = '';
    var newsDetail = '';
    var cutFigure = 100;
    var afterText = '...';

    $(csv1).each(function(index) {
      newsDetail += '<a href="/elec/' + this[0] + '">';
      newsDetail += '<div class="newsList">';
      newsDetail += '<div class="newsDate">' + this[1] + '</div>';
      newsDetail += '<div class="newsTitle">' + this[2] + '</div>';
      if(this[3] != undefined ){
        newsDetail += '<div class="newsLinkDetail"><i class="fa fa-angle-double-right">&nbsp;' + this[3] + '（クリックすると移動します）</i></div>';
      }
      newsDetail += '</div></a>';
    })
    $("#newsDetail").append(newsDetail);

    $(csv1).each(function(index) {
      var textLength = this[2].length;
      var textTrim = this[2].substr(0,(cutFigure));

      console.log(this[2]);

      if(textLength > cutFigure){
        this[2] = textTrim + afterText;
      }

      newslist += '<a href="' + this[0] + '">';
      newslist += '<div class="newsList">';
      newslist += '<div class="newsDate">' + this[1] + '</div>';
      newslist += '<div class="newsTitle">' + this[2] + '</div>';
      if(this[3] != undefined ){
        newslist += '<div class="newsLinkDetail"><i class="fa fa-angle-double-right">&nbsp;' + this[3] + '（クリックすると移動します）</i></div>';
      }
        newslist += '</div></a>';
      if(index == 2){
        return false;
      }
    })
    $("#newslist").append(newslist);
  });

  $.get('/elec/csv/event.csv', function(data){
    var csv2 = $.csv()(data);
    var eventlist = '';
    var eventDetail = '';

    $(csv2).each(function(index) {
      eventlist += '<a href="' + this[0] + '">';
      eventlist += '<div class="eventList">';
      eventlist += '<div class="eventDate">' + this[1] + '</div>';
      eventlist += '<div class="eventTitle">' + this[2] + '</div>';
      eventlist += '</div></a>';
      if(index == 4){
        return false;
      }
    })

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

// 教員紹介
$(window).on('load', function () {
  $.get('/elec/csv/researcher_e.csv', function(data){
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

  $.get('/elec/csv/researcher_j.csv', function(data){
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

// 沿革
$(window).on('load', function() {
  $.get('/elec/csv/enkaku.csv', function(data){
    var csv5 = $.csv()(data);
    var enkakulist = '';

    $(csv5).each(function(index) {
      if(index == 0){
        enkakulist += '<thead><tr>';
        enkakulist += '<th scope="col">' + this[0] + '</th>';
        enkakulist += '<th scope="col">' + this[1] + '</th>';
        enkakulist += '<th scope="col">' + this[2] + '</th>';
        enkakulist += '</tr></thead><tbody>';
      }else if(index > 0){
        enkakulist += '<tr>';
        enkakulist += '<th scope="row">' + this[0] + '</th>';
        enkakulist += '<td>' + this[1] + '</td>';
        enkakulist += '<td>' + this[2] + '</td>';
        enkakulist += '</tr>';
      }

      if(index == csv5.length - 1){
        enkakulist += '</tbody>';
        return false;
      }
    })
    $("#enkaku").append(enkakulist);
  });
});