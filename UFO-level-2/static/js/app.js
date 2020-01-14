console.log('enhancements made: take different date formats, ignore uppercase for other fields'
)

// from data.js
let tableData = data;
let tableHTML = d3.select("tbody");

// Set user input variables
let dateData = d3.select("#datetime");
let cityData = d3.select("#city");
let stateData = d3.select("#state");
let countryData = d3.select("#country");
let shapeData = d3.select("#shape");
// console.log(tableHTML);

// window.onload = function(){
//   const distinctShapes = [...new Set(data.map(x => x.shape))];
//   document.getElementById('demo').innerHTML = distinctShapes;
// }

// let text = "<ul>";
// distinctShapes.forEach(myFunction);
// text += "</ul>";
// document.getElementById("demo").innerHTML = text;

// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// } 


tableData.forEach(function(ufoReport) {
    // console.log(ufoReport);
    let row = tableHTML.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    //   console.log(key, value);
      let cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
let button = d3.select("#filter-btn");

// // // Get the input field or if multiple fields, get the ul id
let input = document.getElementById("filters")
// // Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the filter button element with a click
    document.getElementById("filter-btn").click();
  }
});

button.on("click", function submitFilter() {
  // Reset table on webpage
  let list = d3.select("tbody");
  list.html("");

  // Reset table to be filtered
  let filteredData = tableData;
    
  // \b represents the border between a word character and a non-word character. 
  // \b0 will match a leading zero, g is global
  // which is removed so search works with all date formats entered
  let filterDate = dateData.property("value").replace(/\b0/g, '');
  console.log(filterDate);
 
  let filterCity = cityData.property("value").trim().toLowerCase();
  console.log(filterCity);

  let filterState = stateData.property("value").trim().toLowerCase();
  console.log(filterState);

  let filterCountry = countryData.property("value").trim().toLowerCase();
  console.log(filterCountry);

  let filterShape = shapeData.property("value").trim().toLowerCase();
  console.log(filterShape);

  if (filterDate !== "") {
    filteredData = filteredData.filter(data => data.datetime === filterDate);
  }
  else {filteredData};

  if (filterCity !== "") {
    filteredData = filteredData.filter(data => data.city === filterCity);
  }
  else {filteredData};

  if (filterState !== "") {
    filteredData = filteredData.filter(data => data.state === filterState);
  }
  else {filteredData};

  if (filterCountry !== "") {
    filteredData = filteredData.filter(data => data.country === filterCountry);
  }
  else {filteredData};

  if (filterShape !== "") {
    filteredData = filteredData.filter(data => data.shape === filterShape);
  }
  else {filteredData};

  // if (filteredData !== []) {
  // console.log(distinctShapes);
  // };

// need to assign to key/value pattern
// filterArray.forEach(function(userInput) {
//   if (userInput !== "") {
//     filteredData = filteredData.filter( data => data.state === filterState);
//   }
//   else {filteredData};

//   let inputElements = d3.select(userInput);
//   console.log(inputElements);
//   let inputValues = inputElements.property("value");
//   console.log(inputValues);

//   // if inputValues !== null;
//   filteredData = tableData.filter(item => item.***userInput*** === inputValues);
//   console.log(filteredData);
// });


//   filterArray.push({
//     key:   "state",
//     value: filterState
// });
  // console.log(filterArray);


  filteredData.forEach(function(ufoReport) {
    // console.log(ufoReport);
    let row = tableHTML.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    //   console.log(key, value);
      let cell = row.append("td");
      cell.text(value);
    });
  });

// })
});