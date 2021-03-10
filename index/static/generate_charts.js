var rbaPosAvg = 0;
var rbaNegAvg = 0;
var rbaNeuAvg = 0;
var textBlobPolarity = 0;
var textBlobSubjectivity = 0;
var vaderPosAvg = 0;
var vaderNegAvg = 0;
var vaderNeuAvg = 0;
var vaderCompAvg = 0;
var totalCount = 0;
var analysisType;
var flagForRBA = false;
var flagForBlob = false;
var flagForVader = false;

// function fetchData(fileLocation, analysisType) {
function fetchData(fileArr) {
  fileArr.forEach(function(fileLocation) {
    d3.csv(fileLocation).then(function(data) {
      if (fileLocation.includes('rba')) {
        console.log('hit 1');
        analysisType = 'rba';
      } else if (fileLocation.includes('Blob')) {
        console.log('hit 2');
        analysisType = 'textBlob';
      } else if (fileLocation.includes('vader')) {
        console.log('hit 3');
        analysisType = 'vader';
      }
      data.filter(function(d, i) {
          // posVal = posVal.toFixed(2);
          if (analysisType == 'rba') {
            rbaPosAvg = rbaPosAvg + parseFloat(d.pos);
            rbaNegAvg = rbaNegAvg + parseFloat(d.neg);
            rbaNeuAvg = rbaNeuAvg + parseFloat(d.neu);
          } else if (analysisType == 'textBlob') {
            textBlobPolarity = textBlobPolarity + parseFloat(d.polarity);
            textBlobSubjectivity = textBlobSubjectivity + parseFloat(d.subjectivity);
          } else if (analysisType == 'vader') {
            vaderPosAvg = vaderPosAvg + parseFloat(d.pos);
            vaderNegAvg = vaderPosAvg + parseFloat(d.neg);
            vaderNeuAvg = vaderNeuAvg + parseFloat(d.neu);
            vaderCompAvg = vaderCompAvg + parseFloat(d.compound);
          } else {
            // do nothing
          }
        totalCount = totalCount+1;
      });
    }).then(function(data) {
      // console.log('totalCount is: '+totalCount);
      // console.log('PosAvg is: '+rbaPosAvg/totalCount);
      // console.log('negAvg is: '+rbaNegAvg/totalCount);
      // console.log('neuAvg is: '+rbaNeuAvg/totalCount);
      // Get the averages
      if (analysisType == 'rba') {
        console.log('hit rba');
        rbaPosAvg = rbaPosAvg/totalCount;
        rbaNegAvg = rbaNegAvg/totalCount;
        rbaNeuAvg = rbaNeuAvg/totalCount;
        totalCount = 0;
        flagForRBA = true;
        console.log('rbaPosAvg: '+rbaPosAvg+' rbaNegAvg: '+rbaNegAvg+' rbaNeuAvg: '+rbaNeuAvg);
      } else if (analysisType == 'textBlob') {
        console.log('hit textBlob');
        textBlobPolarity = textBlobPolarity/totalCount;
        textBlobSubjectivity = textBlobSubjectivity/totalCount;
        totalCount = 0;
        flagForBlob = true;
        console.log('textBlobPolarity: '+textBlobPolarity+' textBlobSubjectivity: '+textBlobSubjectivity);
      } else if (analysisType == 'vader') {
        console.log('hit vader');
        //Last analysis, so we have all the info so generateBarChart
        vaderPosAvg = vaderPosAvg/totalCount;
        vaderNegAvg = vaderNegAvg/totalCount;
        vaderNeuAvg = vaderNeuAvg/totalCount;
        vaderCompAvg = vaderCompAvg/totalCount;
        console.log('vaderPosAvg: '+vaderPosAvg+' vaderNegAvg: '+vaderNegAvg+' vaderNeuAvg: '+vaderNeuAvg+' vaderCompAvg: '+vaderCompAvg);
        flagForVader = true;

      } else {
        // do nothing
      }
      if(flagForRBA == true && flagForBlob == true && flagForVader == true) {
        generateBarChart(rbaPosAvg, rbaNegAvg, rbaNeuAvg, textBlobPolarity, textBlobSubjectivity, vaderPosAvg, vaderNegAvg, vaderNeuAvg);
        generatePieChart(rbaPosAvg, rbaNegAvg, rbaNeuAvg, 'RBA pos', 'RBA neg', 'RBA neu', 'pie_chart_1');
        generatePieChart(textBlobPolarity, vaderCompAvg, 0, 'TextBlog polarity', 'Vader Compound', 'neu', 'pie_chart_2');
        generatePieChart(vaderPosAvg, vaderNegAvg, vaderNeuAvg, 'Vader pos', 'Vader neg', 'Vader neu', 'pie_chart_3');
        // set values back to 0
        rbaPosAvg = 0;
        rbaNegAvg = 0;
        rbaNeuAvg = 0;
        textBlobPolarity = 0;
        textBlobSubjectivity = 0;
        vaderPosAvg = 0;
        vaderNegAvg = 0;
        vaderNeuAvg = 0;
        vaderCompAvg = 0;
        totalCount = 0;
      }
      // generateBarChart(rbaPosAvg, rbaNegAvg, rbaNeuAvg);

    });
  })

}

function fetchTop5(fileLocation) {
  var tweets = [];
  var tweetspos = [];
  var tweetsneg = [];
  var tweetsneu = [];
  d3.csv(fileLocation).then(function(data) {
    data.filter(function(d, i) {
      tweets.push(d.cleaned_tweets);
      tweetspos.push(d.pos);
      tweetsneg.push(d.neg);
      tweetsneu.push(d.neu);
    });
  }).then(function(data) {
    generateTop5Chart(tweets, tweetspos, tweetsneg, tweetsneu);
  });
}

function fetchAll(fileArray) {
  var varchieData = [];
  var varchiePos = 0;
  var varchieNeg = 0;
  var varchieNeu = 0;
  var bugheadData = [];
  var bugheadPos = 0;
  var bugheadNeg = 0;
  var bugheadNeu = 0;
  var barchieData = [];
  var barchiePos = 0;
  var barchieNeg = 0;
  var barchieNeu = 0;
  var choniData = [];
  var choniPos = 0;
  var choniNeg = 0;
  var choniNeu = 0;
  var shipType;
  fileArr.forEach(function(fileLocation) {
    // if (fileLocation.includes('varchie')) {
    //   console.log('hit 1');
    //   shipType = 'varchie';
    // } else if (fileLocation.includes('bughead')) {
    //   console.log('hit 2');
    //   shipType = 'textBlob';
    // } else if (fileLocation.includes('barchie')) {
    //   console.log('hit 3');
    //   analysisType = 'textBlob';
    // } else if (fileLocation.includes('choni')) {
    //   console.log('hit 3');
    //   shipType = 'textBlob';
    // }
    d3.csv(fileLocation).then(function(data) {
      data.filter(function(d, i) {
        if (fileLocation.includes('varchie')) {
          console.log('hit 1');
          vaderPosAvg = vaderPosAvg + parseFloat(d.pos);
          vaderNegAvg = vaderPosAvg + parseFloat(d.neg);
          vaderNeuAvg = vaderNeuAvg + parseFloat(d.neu);
        } else if (fileLocation.includes('bughead')) {
          console.log('hit 2');
          shipType = 'textBlob';
        } else if (fileLocation.includes('barchie')) {
          console.log('hit 3');
          analysisType = 'textBlob';
        } else if (fileLocation.includes('choni')) {
          console.log('hit 3');
          shipType = 'textBlob';
        }

        totalCount = totalCount+1;
      });
    }).then(function(data) {
      if (analysisType == 'rba') {
        console.log('hit rba');
        rbaPosAvg = rbaPosAvg/totalCount;
        rbaNegAvg = rbaNegAvg/totalCount;
        rbaNeuAvg = rbaNeuAvg/totalCount;
        totalCount = 0;
        flagForRBA = true;
        console.log('rbaPosAvg: '+rbaPosAvg+' rbaNegAvg: '+rbaNegAvg+' rbaNeuAvg: '+rbaNeuAvg);
      } else if (analysisType == 'textBlob') {
        console.log('hit textBlob');
        textBlobPolarity = textBlobPolarity/totalCount;
        textBlobSubjectivity = textBlobSubjectivity/totalCount;
        totalCount = 0;
        flagForBlob = true;
        console.log('textBlobPolarity: '+textBlobPolarity+' textBlobSubjectivity: '+textBlobSubjectivity);
      } else if (analysisType == 'vader') {
        console.log('hit vader');
        //Last analysis, so we have all the info so generateBarChart
        vaderPosAvg = vaderPosAvg/totalCount;
        vaderNegAvg = vaderNegAvg/totalCount;
        vaderNeuAvg = vaderNeuAvg/totalCount;
        console.log('vaderPosAvg: '+vaderPosAvg+' vaderNegAvg: '+vaderNegAvg+' vaderNeuAvg: '+vaderNeuAvg);
        flagForVader = true;

      } else {
        // do nothing
      }
      if(flagForRBA == true && flagForBlob == true && flagForVader == true) {
        generateBarChart(rbaPosAvg, rbaNegAvg, rbaNeuAvg, textBlobPolarity, textBlobSubjectivity, vaderPosAvg, vaderNegAvg, vaderNeuAvg);
        generatePieChart(rbaPosAvg, rbaNegAvg, 'RBA pos', 'RBA neg', 'pie_chart_1');
        generatePieChart(textBlobPolarity, textBlobSubjectivity, 'TextBlog polarity', 'TextBlog subjectivity', 'pie_chart_2');
        generatePieChart(vaderPosAvg, vaderNegAvg, 'Vader pos', 'Vader neg', 'pie_chart_3');
        // set values back to 0
        rbaPosAvg = 0;
        rbaNegAvg = 0;
        rbaNeuAvg = 0;
        textBlobPolarity = 0;
        textBlobSubjectivity = 0;
        vaderPosAvg = 0;
        vaderNegAvg = 0;
        vaderNeuAvg = 0;
        totalCount = 0;
      }
      // generateBarChart(rbaPosAvg, rbaNegAvg, rbaNeuAvg);

    });
  });
}

function init(ship) {
  rbaFile = "../rba files/"+ship+"_rba.csv";
  textBlobFile = "../textblob files/"+ship+"Blob.csv";
  vaderFile = "../vader files/"+ship+"_vader.csv";
  var fileArr = [rbaFile, textBlobFile, vaderFile];
  fetchData(fileArr);
  top5Loc = "../vader files/"+ship+"Top5.csv";
  fetchTop5(top5Loc);
  // fetchData(rbaFile, "rba");
  // textBlobFile = "../"+ship+"Blob.csv";
  //fetchData(textBlobFile, "textBlob");
  // vaderFile = "";
  //fetchData(vaderFile, "vader");
}
