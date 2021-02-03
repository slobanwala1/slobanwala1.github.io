var gauge = new JustGage({
  id: "gauge", // the id of the html element
  value: 99,
  min: 0,
  max: 100,
  decimals: 2,
  gaugeWidthScale: 0.6,
  pointer: true,
  label: 'kph',
  counter: true,
  startAnimationTime: 500,
});

// update the value randomly
//setInterval(() => {
//gauge.refresh(Math.random() * 100);
//}, 5000)

//repurposed from: https://www.npmjs.com/package/justgage#options