setInterval(() => {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}, 1000);

const ctx = document.getElementById('sensorChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['13:32', '13:33', '13:34', '13:35'],
        datasets: [
            {
                label: 'Suhu (°C)',
                data: [25, 26, 27, 27.6],
                borderColor: 'yellow',
                fill: false,
                tension: 0.3
            },
            {
                label: 'Kelembapan (%)',
                data: [65, 66, 67, 68],
                borderColor: 'skyblue',
                fill: false,
                tension: 0.3
            },
            {
                label: 'Tekanan (hPa)',
                data: [1011, 1012, 1012, 1013],
                borderColor: 'violet',
                fill: false,
                tension: 0.3
            }
        ]
    },
    options: {
        plugins: {
            legend: { labels: { color: "white" } }
        },
        scales: {
            x: { ticks: { color: "white" } },
            y: { ticks: { color: "white" } }
        }
    }
});