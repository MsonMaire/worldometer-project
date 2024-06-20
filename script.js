document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.placeholder.com/data')  // Replace with actual API
        .then(response => response.json())
        .then(data => {
            const dataDiv = document.getElementById('data');
            dataDiv.innerHTML = `<p>Data: ${data}</p>`;
        })
        .catch(error => console.error('Error fetching data:', error));
});
