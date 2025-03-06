document.addEventListener("DOMContentLoaded", function () {
    function renderChart(chartId, value) {
        new Chart(document.getElementById(chartId), {
            type: 'line',
            data: {
                labels: ["Enero", "Feb", "Mar", "Abr", "May"],
                datasets: [{
                    label: "Tendencia",
                    data: [2, 5, 3, 6, value],
                    borderColor: "#E10023",
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                legend: { display: false }
            }
        });
    }

    renderChart("chart1", 3);
    renderChart("chart2", 11);
    renderChart("chart3", 86);
});
