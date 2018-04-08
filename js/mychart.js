// function csv2Array(str) {
//   var csvData = [];
//   var lines = str.split("\n");
//   for (var i = 0; i < lines.length; i++) {
//     var cells = lines[i].split("\t");
//     csvData.push(cells);
//   }
//   return csvData;
// }

// function drawChart() {
//   var classNo_ = [], gender_ = [], os_ = [], license_ = [], interest_ = [];
//   for (var row in data) {
//     classNo_.push(data[row][1])
//     if (data[row][2] == "男")
//       gender_.push(1)
//     else
//       gender_.push(2)
//     os_.push(data[row][6])
//     license_.push(data[row][7])
//     interest_.push(data[row][8])
//   };
  
//   // TODO: 後で消す
//   console.log(gender_);
// var ctx = $('#Class').get('2d');
// var gender = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ["1年", "2年", "3年", "4年", "5年"],
//     dataset: [{
//       data: [45, 21, 28, 21, 5],
//       backgroundColor: ["blue"]
//     }]
//   }
// });

// var ctx = $('#Gender').get('2d');
//   var gender = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       labels: ["男", "女"],
//       dataset: [{
//         data: [101, 19],
//         backgroundColor: ["blue", "red"]
//       }]
//     }
//   });
// }

// function main() {
//   var req = new XMLHttpRequest();
//   var filePath = '../data/data.csv';
//   req.open("GET", filePath, true);
//   req.onload = function() {
//     data = csv2Array(req.responseText);
//     drawChart(data);
//   }
//   req.send(null);
// }

// main();
var ctx = $('#Class').get(0).getContext('2d');
var Class = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["1年", "2年", "3年", "4年", "5年"],
    datasets: [{
      backgroundColor: ["#7EFFD6", "#7AE86A", "#FFF93A", "#E8B542", "#FF8C53"],
      data: [45, 21, 28, 21, 5]
    }]
  },
  options: {
    maintainAspectRatio: false,
  }
});

var ctx1 = $('#Gender').get(0).getContext('2d');
var Class = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ["男子", "女子"],
    datasets: [{
      backgroundColor: ["#6666F3", "#F36666"],
      data: [101, 19]
    }]
  },
  options: {
    maintainAspectRatio: false,
  }
});

var ctx2 = $('#Course').get(0).getContext('2d');
var Class = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ["電気電子工学コース", "情報工学コース", "迷っている"],
    datasets: [{
      backgroundColor: ["#A3A322", "#4ac9f2", "#555555"],
      data: [37, 58, 25]
    }]
  },
  options: {
    maintainAspectRatio: false,
  }
});

var ctx3 = $('#License').get(0).getContext('2d');
var Class = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ["英検", "数検", "漢検", "TOEIC(500点以上)", "アマチュア無線", "基本情報技術者(FE)", "危険物取扱者(乙4等)"],
    datasets: [{
      label: "取得人数",
      backgroundColor: "#A3A322",
      data: [59, 43, 40, 17, 22, 18, 15]
    }]
  },
  options: {
    maintainAspectRatio: false,
    scales: {                          //軸設定
      yAxes: [{                      //y軸設定
          ticks: {                      //最大値最小値設定
              min: 0,                   //最小値
              max: 60,                  //最大値
              stepSize: 10               //軸間隔
          },
      }],
    }
  }
});


// var ctx1 = document.getElementById("Gender").getContext('2d');
// var Gender = new Chart(ctx1, {
//   type: 'pie',
//   data: {
//     labels: ["M", "T", "W", "T", "F", "S", "S"],
//     datasets: [{
//       backgroundColor: [
//         "#2ecc71",
//         "#3498db",
//         "#95a5a6",
//         "#9b59b6",
//         "#f1c40f",
//         "#e74c3c",
//         "#34495e"
//       ],
//       data: [12, 19, 3, 17, 28, 24, 7]
//     }]
//   }
// });

// var ctx2 = $("#Gender").getContext('2d');
//   var gender = new Chart(ctx2, {
//     type: 'doughnut',
//     data: {
//       labels: ["男", "女"],
//       datasets: [{
//         data: [101, 19],
//         backgroundColor: ["blue", "red"]
//       }]
//     }
//   });