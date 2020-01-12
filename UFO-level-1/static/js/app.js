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

  // Get the value property of the input element
  let inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(people);

  let filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach(function(ufoReport) {
    // console.log(ufoReport);
    let row = tableHTML.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    //   console.log(key, value);
      // Append a cell to the row for each value
      let cell = row.append("td");
      cell.text(value);
    });
  });





  
  // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);
});