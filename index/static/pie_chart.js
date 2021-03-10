function generatePieChart(positiveValue, negativeValue, neutralValue, field1, field2, field3, pieChartName, titleName) {
  var pie_chart = c3.generate({
      bindto: '#'+pieChartName,
      data: {
          // iris data from R
          columns: [
              [field1, positiveValue],
              [field2, negativeValue],
              [field3, neutralValue]
          ],
          type : 'pie',
          //onclick: function (d, i) { console.log("onclick", d, i); },
          //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      pie: {
        label: {
            format: function (value, ratio, id) {

              // ratio = d3.format(",.2f")(ratio);
              // ratio = d3.format('%')(ratio);
              value = d3.format(",.3f")(value);
              ratio = d3.format('%')(ratio);
              // ratio = d3.format('%')(ratio);
              return [value, ratio];
            }
        }
      }
  });
}
