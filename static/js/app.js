// Name: Shanil Lobanwala
// Date: Jan 15, 2020
// Project Name: Plot.ly Homework - Belly Button Biodiversity
// File: Main logic/app.js

// function to grab demographics Info
function buildDemoInfo(bbId) {
  // use d3 to read through samples and grab the relevant info for demographic data
  d3.json("samples.json").then((bbSamples) => {
    // grab metadata instead of samples
    var bbMetadata = bbSamples.metadata;
    // filter by bbID
    bbMetadata = bbMetadata.filter(bbMeta => bbMeta.id == bbId);

    // store that object to grab its data
    var bbMetadataFiltered = bbMetadata[0];
    // console.log(bbSampleFiltered);
    // grab the html element we're going to store all the data in
    var demoTable = d3.select("#sample-metadata");
    // Populate the table and fix the html
    demoTable.html("");
    Object.entries(bbMetadataFiltered).forEach(([x, y]) => {
      demoTable.append("h6").style("font-weight", 700).text(`${x}: ${y}`);
    })

    // ***Advanced function call ***
    // wash frequency comes from metadata so call the Advanced Challenge function here
    // console.log(bbMetadataFiltered.wfreq);
    buildGauge(bbMetadataFiltered.wfreq);
  });



}

// function to generate the bubble graph
function buildBubbleGraph(bbId) {
  // use d3 to read through samples and grab the relevant info for bubble graph
  d3.json("samples.json").then((bbSamples) => {
    // 3 parameters needed for bubble graph
    var bbSampleSearch = bbSamples.samples;
    // filter by bbID
    bbSampleSearch = bbSampleSearch.filter(bbSamp => bbSamp.id == bbId);

    // store that object to grab its data
    var bbSampleFiltered = bbSampleSearch[0];

    // grab the info for bubble graph now
    var bbSampleVals = bbSampleFiltered.sample_values;
    var bbOTUIds = bbSampleFiltered.otu_ids;
    var bbOTULabels = bbSampleFiltered.otu_labels;

    // Console log gives all the bubble graph data in an order
    //console.log(bbSampleVals + ' ' + bbOTUIds + ' ' + bbOTULabels);

    // We can grab all the data for the bubbles not the first 10. Tried to make
    // it look as close to the template in the instructions as possible
    var bubbleGraph = [{
      x: bbOTUIds,
      y: bbSampleVals,
      text: bbOTULabels,
      mode: "markers",
      marker: {
        color: bbOTUIds,
        size: bbSampleVals
      },
      type: "bubble"
    }];

    var layout = {
      margin: {
        t: 0,
      },
      xaxis: {
        title: "OTU ids"
      },
      hovermode: "closest"
    }

    Plotly.newPlot("bubble", bubbleGraph, layout);
  });
}

// function to generate the bar graph
function buildBarGraph(bbId) {
  // console.log('new bbId: '+bbId);
  // use d3 to read through samples and grab the relevant info for bar graph
  d3.json("samples.json").then((bbSamples) => {
    // 3 parameters needed for bar graph
    var bbSampleSearch = bbSamples.samples;
    // filter by bbID
    bbSampleSearch = bbSampleSearch.filter(bbSamp => bbSamp.id == bbId);

    // store that object to grab its data
    var bbSampleFiltered = bbSampleSearch[0];

    // grab the info for bar graph now
    var bbSampleVals = bbSampleFiltered.sample_values;
    var bbOTUIds = bbSampleFiltered.otu_ids;
    var bbOTULabels = bbSampleFiltered.otu_labels;

    // Console log gives all the bar graph data in an order
    //console.log(bbSampleVals + ' ' + bbOTUIds + ' ' + bbOTULabels);

    // Grab the first 10 values as they've been ordered and reverse them because they've been ordered desc
    var barGraph = [{
      x: bbSampleVals.slice(0, 10).reverse(),
      y: bbOTUIds.slice(0, 10).map(id => `OTU ${id}`).reverse(),
      text: bbOTULabels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];

    var layout = {
      title: "Top 10 OTUs found in Specific individual",
      margin: { t: 30, l: 150 }
    }

    Plotly.newPlot("bar", barGraph, layout);
  });
}

// Create an initalize function
function init() {

  // Initial position of dropdown(first element)
  var dropDown = d3.select("#selDataset");
  d3.json("samples.json").then((bbSamples) => {
    var bbId = bbSamples.names;
    bbId.forEach((id) => {
      // console.log(name);
      // populate dropdown with all the ids
      dropDown.append("option").text(id).property("value", id);
    })

    // Populate the bar chart with the first name/number as the starting point on load.
    var firstId = bbId[0];
    // console.log(firstId);
    buildDemoInfo(firstId);
    buildBarGraph(firstId);
    buildBubbleGraph(firstId);
  });
}

// Function that index.html element selDataset references
function optionChanged(bbId) {
  // console.log(bbId);

  // build demographics table, then graphs
  buildDemoInfo(bbId);
  buildBarGraph(bbId);
  buildBubbleGraph(bbId);
}

// Call said initialize function
init();
