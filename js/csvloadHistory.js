// 沿革
$(window).on('load', function() {
  $.get('../../csv/enkaku.csv', function(data){
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