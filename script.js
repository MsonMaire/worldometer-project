document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.example.com/data')  // Replace with actual API
        .then(response => response.json())
        .then(data => {
            const dataDiv = document.getElementById('data');
            dataDiv.innerHTML = `
                <h2>Worldometer Data</h2>
                <p><strong>Data:</strong> ${data}</p>
                <p><strong>More Info:</strong> Detailed information goes here.</p>
            `;
        })
        .catch(error => console.error('Error fetching data:', error));
});

