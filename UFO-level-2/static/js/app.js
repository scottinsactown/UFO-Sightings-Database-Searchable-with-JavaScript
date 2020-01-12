// from data.js
let tableData = data;
let tableHTML = d3.select("tbody");
console.log(tableHTML)

tableData.forEach(function(ufoReport) {
    // console.log(ufoReport);
    let row = tableHTML.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      let cell = row.append("td");
      cell.text(value);
    });
  });

//   * Use a date form in your HTML document and write JavaScript code
//    that will listen for events and search through the `date/time` column
//    to find rows that match user input.

// Select the button
let button = d3.select("#filter-btn");

button.on("click", function() {
  // Reset table
  let list = d3.select("tbody");
  list.html("");

  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
  let inputElementCity = d3.select("#city");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  let inputValueCity = inputElementCity.property("value");

//   console.log(inputValue);

  let filteredData = tableData.filter(date => date.datetime === inputValue);
  let filteredData2 = filteredData.filter(city =>city.city === inputValueCity);

//   console.log(filteredData);

  filteredData2.forEach(function(ufoReport) {
    // console.log(ufoReport);
    let row = tableHTML.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      let cell = row.append("td");
      cell.text(value);
    });
  });

});