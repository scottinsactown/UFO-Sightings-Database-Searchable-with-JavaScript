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


