// Implement a simple API call to a public API (e.g., JSONPlaceholder) using async/await and display the results.  doo these codes

// install axios;
import axios from"axios";

async function fetchDataAsync(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Example API call to JSONPlaceholder
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetchDataAsync(apiUrl)
    .then(data => {
        console.log('API Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
