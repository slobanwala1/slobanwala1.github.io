function generateBarChart(rbaPosAvg, rbaNegAvg, rbaNeuAvg, textBlobPolarity, textBlobSubjectivity, vaderPosAvg, vaderNegAvg, vaderNeuAvg) {
  var bar_chart = c3.generate({
      bindto: '#bar_chart',
      data: {
          columns: [
              ['RBA(Rule Based Approach)', rbaPosAvg, rbaNegAvg, rbaNeuAvg],
              ['TextBlob NLTK', textBlobPolarity, textBlobSubjectivity, 0],
              ['Vader NLTK', vaderPosAvg, vaderNegAvg, vaderNeuAvg]
          ],
          type: 'bar'
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
      },
      axis: {
        x: {
          type: 'category',
          categories: ['Pos/Polarity', 'Neg/Subjectivity', 'Neu']
        },
        y: {
          label: 'value from 0.0 to 1.0'
        }
      }
  });
}


// setTimeout(function () {
//     bar_chart.load({
//         columns: [
//             ['data3', 130, -150, 200, 300, -200, 100]
//         ]
//     });
// }, 1000);
