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

button.on("click", function() {
  // Reset table on webpage
  let list = d3.select("tbody");
  list.html("");
  // Reset table to filter
  let filteredData = tableData;
  
  // Remove all filterArray elements if not using
  // let filterArray = []
  
  let filterDate = dateData.property("value");
  console.log(filterDate);
//   filterArray.push({
//     key:   "datetime",
//     value: filterDate
// });
 
  let filterCity = cityData.property("value").trim().toLowerCase();
  console.log(filterCity);
//   filterArray.push({
//     key:   "city",
//     value: filterCity
// });

  let filterState = stateData.property("value").trim().toLowerCase();
  console.log(filterState);
//   filterArray.push({
//     key:   "state",
//     value: filterState
// });
  // console.log(filterArray);

  let filterCountry = countryData.property("value").trim().toLowerCase();
  console.log(filterCountry);

  let filterShape = shapeData.property("value").trim().toLowerCase();
  console.log(filterShape);

  if (filterDate !== "") {
    filteredData = filteredData.filter(data => data.datetime === filterDate);
  }
  else {filteredData};

  if (filterCity !== "") {
    filteredData = filteredData.filter( data => data.city === filterCity);
  }
  else {filteredData};

  if (filterState !== "") {
    filteredData = filteredData.filter( data => data.state === filterState);
  }
  else {filteredData};

  if (filterCountry !== "") {
    filteredData = filteredData.filter( data => data.country === filterCountry);
  }
  else {filteredData};

  if (filterShape !== "") {
    filteredData = filteredData.filter( data => data.shape === filterShape);
  }
  else {filteredData};

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