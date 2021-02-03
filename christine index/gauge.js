//fastestLapSpeed
var chart = c3.generate({
    data: {
        columns: [
            ['Driver Name', 201] //so i'm going to add the data here from the sql data.
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
       labels: {                    //could be labels. the docs conflct
            format: function(value, ratio) {
                return (value + ' mph');
            },
            show: false // to turn off the min/max labels.
        },
    min: 200, //I'M GOING TO CHANGE THIS SO THAT THE MIN WILL BE THE SLOWEST FAST LAP
    max: 231.5, //I'M GOING TO CHANGE THIS SO THAT THIS IS THE FASTEST FAST LAP
    units: ' %',
    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#F0F5D5', '#F55916', '#F76628', '#F20525'],
        threshold: {
            unit: 'value', // percentage is default
            max: 225,
            values: [210, 215, 220, 225]
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
                columns: [['data', 201]]
            });
        }, 100);
        setTimeout(function () {
            chart.load({
                columns: [['data', 205]]
            });
        }, 1000);
        setTimeout(function () {
            chart.load({
                columns: [['data', 210]]
            });
        }, 1500);
        setTimeout(function () {
            chart.load({
                columns: [['data', 215]]
            });
        }, 2000);
        setTimeout(function () {
            chart.load({
                columns: [['data', 220]]
            });
        }, 2500);
        setTimeout(function () {
            chart.load({
                columns: [['data', 225]]
            });
        }, 3000);
        setTimeout(function () {
            chart.load({
                columns: [['data', 231]]
            });
        }, 4000);
      }, 5000);
      //https://c3js.org/samples/chart_gauge.html
