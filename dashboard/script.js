// ======================================
// Dashboard ENEMDU 2025 - Cotopaxi
// ======================================

const rutaJSON = "../data/indicadores.json";

async function cargarIndicadores() {

    try {

        const respuesta = await fetch(rutaJSON);

        if (!respuesta.ok) {
            throw new Error("No se pudo leer indicadores.json");
        }

        const datos = await respuesta.json();

        // -----------------------
        // Tarjetas
        // -----------------------

        document.getElementById("poblacion").textContent =
            Number(datos["Poblacion Expandida"]).toLocaleString("es-EC");

        document.getElementById("empleo").textContent =
            datos["Empleo Adecuado"] + "%";

        const subempleo =
            datos["Subempleo Tiempo"] +
            datos["Subempleo Ingresos"];

        document.getElementById("subempleo").textContent =
            subempleo.toFixed(2) + "%";

        const desempleo =
            datos["Desempleo Abierto"] +
            datos["Desempleo Oculto"];

        document.getElementById("desempleo").textContent =
            desempleo.toFixed(2) + "%";

        // -----------------------
        // Tabla
        // -----------------------

        const tabla = document.getElementById("tablaIndicadores");

        tabla.innerHTML = "";

        Object.entries(datos).forEach(([nombre, valor]) => {

            const fila = document.createElement("tr");

            const td1 = document.createElement("td");
            td1.textContent = nombre;

            const td2 = document.createElement("td");

            if (nombre === "Poblacion Expandida") {

                td2.textContent =
                    Number(valor).toLocaleString("es-EC");

            } else {

                td2.textContent = valor + " %";

            }

            fila.appendChild(td1);
            fila.appendChild(td2);

            tabla.appendChild(fila);

        });

        // -----------------------
        // Gráfico
        // -----------------------

        crearGrafico(datos);

    }

    catch (error) {

        console.error(error);

        alert("No fue posible cargar indicadores.json");

    }

}

// ======================================
// Chart.js
// ======================================

function crearGrafico(datos) {

    const ctx =
        document.getElementById("grafico");

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [

                "Empleo",

                "Subemp. Tiempo",

                "Subemp. Ingresos",

                "Otro No Pleno",

                "No Remunerado",

                "No Clasificado",

                "Desemp. Abierto",

                "Desemp. Oculto",

                "PEI"

            ],

            datasets: [

                {

                    label: "Porcentaje",

                    data: [

                        datos["Empleo Adecuado"],

                        datos["Subempleo Tiempo"],

                        datos["Subempleo Ingresos"],

                        datos["Otro Empleo No Pleno"],

                        datos["No Remunerado"],

                        datos["No Clasificado"],

                        datos["Desempleo Abierto"],

                        datos["Desempleo Oculto"],

                        datos["PEI"]

                    ],

                    backgroundColor: [

                        "#2E8B57",

                        "#F4A261",

                        "#E9C46A",

                        "#457B9D",

                        "#6A994E",

                        "#9E9E9E",

                        "#D62828",

                        "#8D0801",

                        "#5C677D"

                    ]

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    max: 30

                }

            }

        }

    });

}

cargarIndicadores();