//fastestLapSpeed
function displayGauge(driver1_name, driver2_name, driver1_topSpeed, driver2_topSpeed, circuitTopSpeed) {
  console.log('hit gauge');
  console.log(driver1_name);
  console.log(driver2_name);
  console.log(driver1_topSpeed);
  console.log(driver2_topSpeed);
  console.log(circuitTopSpeed);
  // var chart = c3.generate({
  //     bindto: '#chart',
  //     data: {
  //         columns: [
  //             [driver1_name, driver1_topSpeed] //so i'm going to add the data here from the sql data.
  //         ],
  //         type: 'gauge',
  //         onclick: function (d, i) {  },
  //         onmouseover: function (d, i) {  },
  //         onmouseout: function (d, i) {  }
  //     },
  //     gauge: {
  //        labels: {                    //could be labels. the docs conflct
  //             format: function(value, ratio) {
  //                 return value;
  //             },
  //             show: false // to turn off the min/max labels.
  //         },
  //     min: 200, //I'M GOING TO CHANGE THIS SO THAT THE MIN WILL BE THE SLOWEST FAST LAP
  //     max: 231.5, //I'M GOING TO CHANGE THIS SO THAT THIS IS THE FASTEST FAST LAP
  //     units: ' %',
  //     width: 39 // for adjusting arc thickness
  //     },
  //     color: {
  //         pattern: ['#F0F5D5', '#F55916', '#F76628', '#F20525', '#F20525', '#F20525'],
  //         threshold: {
  //             unit: 'value', // percentage is default
  //             max: 231.5,
  //             values: [210, 215, 220, 225, 230, 231.5]
  //         }
  //     },
  //     size: {
  //         height: 180
  //     },
  // });
  // var ticksValues = [200, 205, 210, 215, 217, 219, 221, 223];
  // var test = true;
  //
  // setInterval(function(){
  //   var ticks = d3.select('.c3-chart-arcs')
  //           .append('g')
  //         .selectAll("line")
  //           .data(ticksValues).enter()
  //         .append("line")
  //           .attr("x1", 0)
  //           .attr("x2", 0)
  //           .attr("y1", -chart.internal.radius+8)
  //           .attr("y2", -chart.internal.radius)
  //           .attr("transform", function (d) {
  //               var min = chart.internal.config.gauge_min,
  //                   max = chart.internal.config.gauge_max,
  //                   ratio = d / (max - min),
  //                   rotate = (d - 2) * 45;
  //               return "rotate(" + rotate + ")";
  //           });
  //   setTimeout(function () {
  //       chart.load({
  //           columns: [['data', 210]]
  //       });
  //   }, 1000);
  //   setTimeout(function () {
  //       chart.load({
  //           columns: [['data', 215]]
  //       });
  //   }, 2000);
  //   setTimeout(function () {
  //       chart.load({
  //           columns: [['data', 220]]
  //       });
  //   }, 3000);
  //   setTimeout(function () {
  //       chart.load({
  //           columns: [['data', 220]]
  //       });
  //   }, 4000);
  //   setTimeout(function () {
  //       chart.load({
  //           columns: [['data', 230]]
  //       });
  //   }, 5000);
  //   setTimeout(function () {
  //       chart.load({
  //           columns: [['data', 231.5]]
  //       });
  //   }, 6000);
  // }, 21000);



  var chart = c3.generate({
      bindto: '#chart',
      data: {
          columns: [
              [driver1_name, driver1_topSpeed] //so i'm going to add the data here from the sql data.
          ],
          type: 'gauge',
          onclick: function (d, i) {  },
          onmouseover: function (d, i) {  },
          onmouseout: function (d, i) {  }
      },
      gauge: {
         labels: {                    //could be labels. the docs conflct
              format: function(value, ratio) {
                  return (value + ' mph');
              },
              show: false // to turn off the min/max labels.
          },
      min: 200, //I'M GOING TO CHANGE THIS SO THAT THE MIN WILL BE THE SLOWEST FAST LAP
      max: circuitTopSpeed, //I'M GOING TO CHANGE THIS SO THAT THIS IS THE FASTEST FAST LAP
      units: ' %',
      width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: ['#F0F5D5', '#F55916', '#F76628', '#F20525', '#F20525'],
          threshold: {
              unit: 'value', // percentage is default
              max: 231.5,
              values: [210, 215, 220, 225, 230, 231.5]
          }
      },
      size: {
          height: 180
      },
  });
  var ticksValues = [200, 205, 210, 215, 217, 219, 221, 223];
  var test = true;

  setInterval(function(){
    var ticks = d3.select('.c3-chart-arcs')
            .append('g')
          .selectAll("line")
            .data(ticksValues).enter()
          .append("line")
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", -chart.internal.radius+8)
            .attr("y2", -chart.internal.radius)
            .attr("transform", function (d) {
                var min = chart.internal.config.gauge_min,
                    max = chart.internal.config.gauge_max,
                    ratio = d / (max - min),
                    rotate = (d - 2) * 45;
                return "rotate(" + rotate + ")";
            });
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 201]]
        });
    }, 100);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 205]]
        });
    }, 300);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 210]]
        });
    }, 500);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 215]]
        });
    }, 700);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 220]]
        });
    }, 900);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 225]]
        });
    }, 1100);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 231.5]]
        });
    }, 1300);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 225]]
        });
    }, 1600);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 220]]
        });
    }, 1800);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 215]]
        });
    }, 2000);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 210]]
        });
    }, 2200);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 205]]
        });
    }, 2400);
    setTimeout(function () {
        chart.load({
            columns: [['Fastest Lap', 200]]
        });
    }, 2400);
  }, 2400);
// chart 2 start


  var chart2 = c3.generate({
      bindto: '#chart2',
      data: {
          columns: [
              [driver2_name, driver2_topSpeed] //so i'm going to add the data here from the sql data.
          ],
          type: 'gauge',
          onclick: function (d, i) {  },
          onmouseover: function (d, i) {  },
          onmouseout: function (d, i) {  }
      },
      gauge: {
         labels: {                    //could be labels. the docs conflct
              format: function(value, ratio) {
                  return (value + ' mph');
              },
              show: false // to turn off the min/max labels.
          },
      min: 200, //I'M GOING TO CHANGE THIS SO THAT THE MIN WILL BE THE SLOWEST FAST LAP
      max: circuitTopSpeed, //I'M GOING TO CHANGE THIS SO THAT THIS IS THE FASTEST FAST LAP
      units: '%',
      width: 39 // for adjusting arc thickness
      },
      color: {
          pattern: ['#F0F5D5', '#F55916', '#F76628', '#F20525', '#F20525'],
          threshold: {
              unit: 'value', // percentage is default
              max: 231.5,
              values: [210, 215, 220, 225, 230, 231.5]
          }
      },
      size: {
          height: 180
      },
  });
  var ticksValues = [200, 205, 210, 215, 217, 219, 221, 223];
  var test = true;

  setInterval(function(){
    var ticks = d3.select('.c3-chart-arcs')
            .append('g')
          .selectAll("line")
            .data(ticksValues).enter()
          .append("line")
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", -chart2.internal.radius+8)
            .attr("y2", -chart2.internal.radius)
            .attr("transform", function (d) {
                var min = chart2.internal.config.gauge_min,
                    max = chart2.internal.config.gauge_max,
                    ratio = d / (max - min),
                    rotate = (d - 2) * 45;
                return "rotate(" + rotate + ")";
            });
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 201]]
                });
            }, 100);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 205]]
                });
            }, 300);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 210]]
                });
            }, 500);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 215]]
                });
            }, 700);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 220]]
                });
            }, 900);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 225]]
                });
            }, 1100);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 231.5]]
                });
            }, 1300);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 225]]
                });
            }, 1600);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 220]]
                });
            }, 1800);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 215]]
                });
            }, 2000);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 210]]
                });
            }, 2200);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 205]]
                });
            }, 2400);
            setTimeout(function () {
                chart2.load({
                    columns: [['Fastest Lap', 200]]
                });
            }, 2400);
          }, 2400);
}

// var chart = c3.generate({
//     data: {
//         columns: [
//             ['Driver Name', 201] //so i'm going to add the data here from the sql data.
//         ],
//         type: 'gauge',
//         onclick: function (d, i) { console.log("onclick", d, i); },
//         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
//         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
//     },
//     gauge: {
//        labels: {                    //could be labels. the docs conflct
//             format: function(value, ratio) {
//                 return value;
//             },
//             show: false // to turn off the min/max labels.
//         },
//     min: 200, //I'M GOING TO CHANGE THIS SO THAT THE MIN WILL BE THE SLOWEST FAST LAP
//     max: 231.5, //I'M GOING TO CHANGE THIS SO THAT THIS IS THE FASTEST FAST LAP
//     units: ' %',
//     width: 39 // for adjusting arc thickness
//     },
//     color: {
//         pattern: ['#F0F5D5', '#F55916', '#F76628', '#F20525'],
//         threshold: {
//             unit: 'value', // percentage is default
//             max: 225,
//             values: [210, 215, 220, 225]
//         }
//     },
//     size: {
//         height: 180
//     },
// });
// var ticksValues = [200, 205, 210, 215, 217, 219, 221, 223];
// var test = true;



// setInterval(function(){
//   var ticks = d3.select('.c3-chart-arcs')
//           .append('g')
//         .selectAll("line")
//           .data(ticksValues).enter()
//         .append("line")
//           .attr("x1", 0)
//           .attr("x2", 0)
//           .attr("y1", -chart.internal.radius+8)
//           .attr("y2", -chart.internal.radius)
//           .attr("transform", function (d) {
//               var min = chart.internal.config.gauge_min,
//                   max = chart.internal.config.gauge_max,
//                   ratio = d / (max - min),
//                   rotate = (d - 2) * 45;
//               return "rotate(" + rotate + ")";
//           });
//   setTimeout(function () {
//       chart.load({
//           columns: [['data', 201]]
//       });
//   }, 100);
//   setTimeout(function () {
//       chart.load({
//           columns: [['data', 205]]
//       });
//   }, 1000);
//   setTimeout(function () {
//       chart.load({
//           columns: [['data', 210]]
//       });
//   }, 1500);
//   setTimeout(function () {
//       chart.load({
//           columns: [['data', 215]]
//       });
//   }, 2000);
//   setTimeout(function () {
//       chart.load({
//           columns: [['data', 220]]
//       });
//   }, 2500);
//   setTimeout(function () {
//       chart.load({
//           columns: [['data', 225]]
//       });
//   }, 3000);
//   setTimeout(function () {
//       chart.load({
//           columns: [['data', 231]]
//       });
//   }, 4000);
// }, 4000);

//https://c3js.org/samples/chart_gauge.html
