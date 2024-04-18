// Create a Node.js script that reads and aggregates data from multiple files asynchronously
//  using callbacks, then refactor using promises and async/await.

const fs = require("fs");

// Function to read a file asynchronously
function readFileAsync(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
}

// Function to aggregate data from multiple files asynchronously using callbacks
function aggregateDataCallback(filePaths, callback) {
  let aggregatedData = [];

  let filesProcessed = 0;
  filePaths.forEach(filePath => {
    readFileAsync(filePath, (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
      aggregatedData.push(data);
      filesProcessed++;
      if (filesProcessed === filePaths.length) {
        callback(null, aggregatedData);
      }
    });
  });
}

const filePaths = ["file1.txt", "file2.txt", "file3.txt"];
aggregateDataCallback(filePaths, (err, aggregatedData) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Aggregated Data:", aggregatedData);
});
