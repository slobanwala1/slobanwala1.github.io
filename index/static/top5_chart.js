function generateTop5Chart(tweets, tweetspos, tweetsneg, tweetsneu) {
  var top5_chart = c3.generate({
      bindto: '#top5_chart',
      data: {
          columns: [
              [tweets[0], tweetspos[0], tweetsneg[0], tweetsneu[0]],
              [tweets[1], tweetspos[1], tweetsneg[1], tweetsneu[1]],
              [tweets[2], tweetspos[2], tweetsneg[2], tweetsneu[2]],
              [tweets[3], tweetspos[3], tweetsneg[3], tweetsneu[3]],
              [tweets[4], tweetspos[4], tweetsneg[4], tweetsneu[4]]
          ]
      }
  });
}


// setTimeout(function () {
//     chart.load({
//         columns: [
//             ['data1', 230, 190, 300, 500, 300, 400]
//         ]
//     });
// }, 1000);
//
// setTimeout(function () {
//     chart.load({
//         columns: [
//             ['data3', 130, 150, 200, 300, 200, 100]
//         ]
//     });
// }, 1500);
//
// setTimeout(function () {
//     chart.unload({
//         ids: 'data1'
//     });
// }, 2000);
