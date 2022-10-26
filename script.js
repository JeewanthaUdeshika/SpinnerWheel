/**
 * Spin Wheel for give pre defined groups when user enters the E number
 * 
 * Author: JeewanthaUdeshika
 * Last Modified: 15-10-2022
 */

// Getting Data from html
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("subspin");
const finalValue = document.getElementById("final-value");
const getText = document.getElementById("enumber");
const submiter = document.getElementById("subspin");

let randomDegree;

//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 18, value: 3 },
  { minDegree: 19, maxDegree: 54, value: 2 },
  { minDegree: 55, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 126, value: 10 },
  { minDegree: 127, maxDegree: 162, value: 9 },
  { minDegree: 163, maxDegree: 198, value: 8 },
  { minDegree: 199, maxDegree: 234, value: 7 },
  { minDegree: 235, maxDegree: 270, value: 6 },
  { minDegree: 271, maxDegree: 306, value: 5 },
  { minDegree: 307, maxDegree: 342, value: 4 },
  { minDegree: 343, maxDegree: 360, value: 3 }
];
//Size of each piece
const data = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
//background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da"

];

//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});


//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>You are in Group ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;

//Start spinning
submiter.addEventListener("click", () => {

  // Get error message if text box is empty
  if (getText.value === '' || getText.value === ' '){
    alert("Input your E number");
    return;
  }
  else{
    const batch = 19;
    const Number = parseInt(getText.value);
    // console.log(batch);
    // console.log(Number);

    spinBtn.disabled = true;
    //Empty final value
    finalValue.innerHTML = `<p>Have Fun with your group</p>`;

    if(batch == 18){
      switch(Number){
        case 17: case 59: case 13: case 22: case 379:
          randomDegree = 70;  // Group 1
          break;
        
          case 30: case 28: case 36: case 68: case 397:
          randomDegree = 30;  // Group 2
          break;

          case 58: case 77: case 98: case 115: case 402:
          randomDegree = 10;  // Group 3
          break;

          case 154: case 128: case 150: case 168:
          randomDegree = 320; // Group 4
          break;

          case 242: case 173: case 177: case 180:
          randomDegree = 280; // Group 5
          break;

          case 245: case 181: case 203: case 224:
          randomDegree = 250; // Group 6
          break;

          case 282: case 227: case 264: case 266:
          randomDegree = 220; // Group 7
          break;

          case 283: case 285: case 297: case 304:
          randomDegree = 175; // Group 8
          break;

          case 318: case 327: case 349: case 354:
          randomDegree = 150; // Group 9
          break;

          case 329: case 340: case 366: case 368: case 373:
          randomDegree = 100; // Group 10
          break;
      }
    }
    
    else if(batch == 19){
      switch(Number){
          case 9: case 166: case 266: case 300: case 264: case 6: case 87: case 170:
          randomDegree = 70;  // Group 1
          break;
        
          case 131: case 3: case 94: case 133: case 240: case 409: case 324: case 57: case 96:
          randomDegree = 30;  // Group 2
          break;

          case 249: case 74: case 226: case 306: case 375: case 455: case 69: case 63: case 155:
          randomDegree = 10;  // Group 3
          break;

          case 278: case 106: case 205: case 329: case 443: case 167: case 210: case 134: case 227:
          randomDegree = 320; // Group 4
          break;

          case 408: case 4: case 193: case 310: case 436: case 492: case 224: case 34: case 91:
          randomDegree = 280; // Group 5
          break;

          case 17: case 8: case 129: case 137: case 304: case 432: case 90: case 465: case 174:
          randomDegree = 250; // Group 6
          break;

          case 28: case 405: case 95: case 275: case 413: case 453: case 142: case 349: case 253:
          randomDegree = 220; // Group 7
          break;

          case 260: case 29: case 163: case 366: case 452: case 495: case 505: case 494: case 372:
          randomDegree = 175; // Group 8
          break;

          case 124: case 363: case 100: case 247: case 371: case 424: case 236: case 431: case 309:
          randomDegree = 150; // Group 9
          break;

          case 244: case 7: case 60: case 105: case 295: case 426: case 446: case 423: case 111:
          randomDegree = 100; // Group 10
          break;
      }
    }
  }


/* //Start spinning
spinBtn.addEventListener("click", () => {

  // Get error message if text box is empty
  if (getText.value === '' || getText.value === ' '){
    alert("Input your E number");
    return;
  }
  else{
    const batch = 19;
    const Number = parseInt(getText.value);
    // console.log(batch);
    // console.log(Number);

    spinBtn.disabled = true;
    //Empty final value
    finalValue.innerHTML = `<p>Have Fun with your group</p>`;

    if(batch == 18){
      switch(Number){
        case 17: case 59: case 13: case 22: case 379:
          randomDegree = 70;  // Group 1
          break;
        
          case 30: case 28: case 36: case 68: case 397:
          randomDegree = 30;  // Group 2
          break;

          case 58: case 77: case 98: case 115: case 402:
          randomDegree = 10;  // Group 3
          break;

          case 154: case 128: case 150: case 168:
          randomDegree = 320; // Group 4
          break;

          case 242: case 173: case 177: case 180:
          randomDegree = 280; // Group 5
          break;

          case 245: case 181: case 203: case 224:
          randomDegree = 250; // Group 6
          break;

          case 282: case 227: case 264: case 266:
          randomDegree = 220; // Group 7
          break;

          case 283: case 285: case 297: case 304:
          randomDegree = 175; // Group 8
          break;

          case 318: case 327: case 349: case 354:
          randomDegree = 150; // Group 9
          break;

          case 329: case 340: case 366: case 368: case 373:
          randomDegree = 100; // Group 10
          break;
      }
    }
    
    else if(batch == 19){
      switch(Number){
          case 9: case 166: case 266: case 300: case 264: case 6: case 87: case 170:
          randomDegree = 70;  // Group 1
          break;
        
          case 131: case 3: case 94: case 133: case 240: case 409: case 324: case 57: case 96:
          randomDegree = 30;  // Group 2
          break;

          case 249: case 74: case 226: case 306: case 375: case 455: case 69: case 63: case 155:
          randomDegree = 10;  // Group 3
          break;

          case 278: case 106: case 205: case 329: case 443: case 167: case 210: case 134: case 227:
          randomDegree = 320; // Group 4
          break;

          case 408: case 4: case 193: case 310: case 436: case 492: case 224: case 34: case 91:
          randomDegree = 280; // Group 5
          break;

          case 17: case 8: case 129: case 137: case 304: case 432: case 90: case 465: case 174:
          randomDegree = 250; // Group 6
          break;

          case 28: case 405: case 95: case 275: case 413: case 453: case 142: case 349: case 253:
          randomDegree = 220; // Group 7
          break;

          case 260: case 29: case 163: case 366: case 452: case 495: case 505: case 494: case 372:
          randomDegree = 175; // Group 8
          break;

          case 124: case 363: case 100: case 247: case 371: case 424: case 236: case 431: case 309:
          randomDegree = 150; // Group 9
          break;

          case 244: case 7: case 60: case 105: case 295: case 426: case 446: case 423: case 111:
          randomDegree = 100; // Group 10
          break;
      }
    }
  } */

  

  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
      // console.log(randomDegree);
  
    } else if (count > 10 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});