// Using Promises and Async/Await:

const fs = require('fs').promises;

// Function to read a file asynchronously using promises
async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}

// Function to aggregate data from multiple files asynchronously using async/await
async function aggregateDataAsync(filePaths) {
    let aggregatedData = [];

    for (const filePath of filePaths) {
        try {
            const data = await readFileAsync(filePath);
            aggregatedData.push(data);
        } catch (err) {
            throw err;
        }
    }

    return aggregatedData;
}

// Example usage
const filePaths = ['file1.txt', 'file2.txt', 'file3.txt'];
aggregateDataAsync(filePaths)
    .then(aggregatedData => {
        console.log('Aggregated Data:', aggregatedData);
    })
    .catch(err => {
        console.error('Error:', err);
    });
