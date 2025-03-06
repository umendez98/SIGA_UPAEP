document.addEventListener("DOMContentLoaded", function () {
    const btnCupos = document.getElementById("btnCupos");
    const btnEstadisticas = document.getElementById("btnEstadisticas");
    const contenedorCupos = document.getElementById("contenedorCupos");
    const contenedorEstadisticas = document.getElementById("contenedorEstadisticas");

    // Muestra los cupos y oculta estadísticas
    btnCupos.addEventListener("click", function () {
        contenedorCupos.classList.remove("hidden");
        contenedorEstadisticas.classList.add("hidden");
    });

    // Muestra las estadísticas y oculta cupos
    btnEstadisticas.addEventListener("click", function () {
        contenedorEstadisticas.classList.remove("hidden");
        contenedorCupos.classList.add("hidden");
        cargarGraficos();
    });

    function cargarGraficos() {
        // Datos de ejemplo para las gráficas
        const dataCupos = {
            labels: ["MAT111", "ING115", "TCD101", "SW002", "MAT205"],
            datasets: [{
                label: "Cupos - Inscritos",
                data: [40, 32, 28, 45, 37],
                backgroundColor: "rgba(225, 0, 35, 0.3)",
                borderColor: "#E10023",
                borderWidth: 2
            }]
        };

        const dataReprobados = {
            labels: ["TCD004", "MAT110", "ING115", "TCD101", "SW002"],
            datasets: [{
                label: "No aprobados",
                data: [3, 2, 4, 1, 3],
                backgroundColor: "rgba(225, 0, 35, 0.3)",
                borderColor: "#E10023",
                borderWidth: 2
            }]
        };

        // Renderizar Gráficos
        const ctxCupos = document.getElementById("chartCupos").getContext("2d");
        new Chart(ctxCupos, {
            type: "bar",
            data: dataCupos,
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });

        const ctxReprobados = document.getElementById("chartReprobados").getContext("2d");
        new Chart(ctxReprobados, {
            type: "line",
            data: dataReprobados,
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });
    }
});
