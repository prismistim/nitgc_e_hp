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
function drawChart() {  
  var ctx = document.getElementById('Gender').getContext('2d');
  var Class = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["1年", "2年", "3年", "4年", "5年"],
      datasets: [{
        data: [45, 21, 28, 21, 5],
        backgroundColor: ["#7EFFD6", "7AE86A", "FFF93A", "E8B542", "FF8C53"]
      }]
    }
  });
}

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