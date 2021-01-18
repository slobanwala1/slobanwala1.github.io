// Name: Shanil Lobanwala
// Date: Jan 15, 2020
// Project Name: Plot.ly Homework - Belly Button Biodiversity
// File: Advanced Challenge Assignment/aca.js

// Function to set up gauge with data, called from app.js
function buildGauge(bbWfreq) {
  console.log(bbWfreq);
  // build gauge, to avoid null values
  if(bbWfreq == null) { bbWfreq = 0; }

  // convert string to a float if needed, since we don't know if it has decimals or not
  // since its 0 - 9, we can see its a half circle = 180 deg, so we use that as the standard
  // Basically 180 / 20 or 20 x bbWfreq so thats in 180 deg
  var bbWfreqLevel = parseFloat(bbWfreq) * 20;

  var degrees = 180 - bbWfreqLevel;

  var radius = 0.5;

  var radians = (degrees * Math.PI) / 180;

  var x = radius * Math.cos(radians);

  var y = radius * Math.sin(radians);

  // Angle of the tick
  var mainPath = "M -.03 -0.03 L .03 0.03 L ";

  var xPath = String(x);

  var space = " ";

  var yPath = String(y);

  var pathEnd = " Z";

  var finalPath = mainPath.concat(xPath, space, yPath, pathEnd);

  var data = [{
    type: "scatter",
    // Grid coordinate should be 0, 0
    x: [0],
    y: [0],
    // Make it look like template
    marker: { size: 11, color: "850000" },
    showlegend: true,
    name: "Avg wFreq",
    text: bbWfreq,
    // Display the wFreq and name
    hoverinfo: "name+text"
  },
  {
    values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        // The intervals/pieces of the pie
        text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        textinfo: "text",
        textposition: "inside",
        // get the right rgb values
        marker: {
          colors: [
            "rgba(0, 105, 11, .6)",

            "rgba(11, 120, 22, .6)",

            "rgba(15, 127, 0, .6)",

            "rgba(109, 154, 22, .6)",

            "rgba(167, 202, 42, .6)",

            "rgba(200, 209, 95, .6)",

            "rgba(211, 206, 145, .6)",

            "rgba(235, 226, 202, .6)",

            "rgba(242, 230, 215, .6)",

            "rgba(255, 255, 255, 0)"
          ]
        },
        // Get the right labels, like we talked about before half circle 180/20
        labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        hoverinfo: "label",
        // Distance from ticket, 0 puts it inside pie and higher value makes further distance,
        // so keep at 0.5 so its directly touching
        hole: 0.5,
        // To look like the half circle must be a pie
        type: "pie",
        // Legend just cause it looks nice, and easier to see
        showlegend: true
  }];

  var layout = {
    shapes: [
    {
      type: "path",
      path: finalPath,
      fillcolor: "800000",
      line: {
        color: "800000"
      }
    }],
    title: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
    height: 550,
    width: 550,
    // Don't show any of the grid, it shows the lines of the pie being created
    // Make range of tick -1, 1 so it touches the range, rather than having space between the
    // tick and pie also its as accurate as possible as 0, 0 goes over the threshold as it rounds up
    xaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
    },
    yaxis: {
      zeroline: false,
      showticklabels: false,
      showgrid: false,
      range: [-1, 1]
    }
  };

// Store into html object and plot
var updatedGauge = document.getElementById("gauge");

Plotly.newPlot(updatedGauge, data, layout);
}
