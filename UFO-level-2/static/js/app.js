console.log('enhancements made: accepts various date formats,\
 accepts uppercase text, "enter" button triggers filter button, filters clear after submission'
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

// *** Enter key triggers button ***
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
    // if wanted to match partial strings could use:
      // filteredData = filteredData.filter(data => data.city.startsWith(filterCity));
      // filteredData = filteredData.filter(data => data.city.includes(filterCity));
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

  filteredData.forEach(function(ufoReport) {
    // console.log(ufoReport);
    let row = tableHTML.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    //   console.log(key, value);
      let cell = row.append("td");
      cell.text(value);
    });
  });

  // Reset form fields
  document.getElementById("filter-form").reset();
});


