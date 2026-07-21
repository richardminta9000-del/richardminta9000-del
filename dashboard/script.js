/*==================================================
    DASHBOARD POLÍTICA PÚBLICA
    Provincia de Cotopaxi
    ENEMDU Personas 2025
==================================================*/

let datosDashboard = null;

/*=========================================
CARGAR JSON
=========================================*/

async function cargarDatos(){

    try{

        const respuesta = await fetch("indicadores.json");

        datosDashboard = await respuesta.json();

        cargarKPIs();

        llenarTabla();

        crearGraficos();

        generarConclusiones();

    }

    catch(error){

        console.error(error);

        alert("No fue posible cargar indicadores.json");

    }

}

/*=========================================
CARGAR TARJETAS
=========================================*/

function cargarKPIs(){

    const d = datosDashboard.indicadores;

    document.getElementById("poblacion").innerHTML =
        Number(d.poblacion).toLocaleString("es-EC");

    document.getElementById("empleo").innerHTML =
        d.empleoAdecuado.toFixed(2) + "%";

    document.getElementById("subempleo").innerHTML =
        (d.subempleoTiempo + d.subempleoIngresos).toFixed(2) + "%";

    document.getElementById("desempleo").innerHTML =
        (d.desempleoAbierto + d.desempleoOculto).toFixed(2) + "%";

}

/*=========================================
TABLA DE INDICADORES
=========================================*/

function llenarTabla(){

    const d = datosDashboard.indicadores;

    const tabla = document.getElementById("tablaIndicadores");

    tabla.innerHTML="";

    const indicadores=[

        ["Población Expandida",Number(d.poblacion).toLocaleString("es-EC")],

        ["Empleo Adecuado",d.empleoAdecuado+" %"],

        ["Subempleo por Tiempo",d.subempleoTiempo+" %"],

        ["Subempleo por Ingresos",d.subempleoIngresos+" %"],

        ["Otro Empleo No Pleno",d.otroEmpleo+" %"],

        ["No Remunerado",d.noRemunerado+" %"],

        ["No Clasificado",d.noClasificado+" %"],

        ["Desempleo Abierto",d.desempleoAbierto+" %"],

        ["Desempleo Oculto",d.desempleoOculto+" %"],

        ["PEI",d.pei+" %"]

    ];

    indicadores.forEach(fila=>{

        tabla.innerHTML+=`

        <tr>

            <td>${fila[0]}</td>

            <td><strong>${fila[1]}</strong></td>

        </tr>

        `;

    });

}

/*=========================================
DATOS PARA LOS GRÁFICOS
=========================================*/

function obtenerDatosGraficos(){

    const d = datosDashboard.indicadores;

    return{

        etiquetas:[

            "Empleo",

            "Subemp. Tiempo",

            "Subemp. Ingresos",

            "Otro",

            "No Rem.",

            "No Clas.",

            "Desemp.",

            "PEI"

        ],

        valores:[

            d.empleoAdecuado,

            d.subempleoTiempo,

            d.subempleoIngresos,

            d.otroEmpleo,

            d.noRemunerado,

            d.noClasificado,

            d.desempleoAbierto+d.desempleoOculto,

            d.pei

        ]

    };

}
/*=========================================
CREAR GRÁFICOS
=========================================*/

function crearGraficos(){

    const datos = obtenerDatosGraficos();

    /*-------------------------------
        GRÁFICO DE BARRAS
    -------------------------------*/

    new Chart(document.getElementById("graficoBarras"),{

        type:"bar",

        data:{

            labels:datos.etiquetas,

            datasets:[{

                label:"Porcentaje",

                data:datos.valores,

                backgroundColor:[

                    "#2563EB",

                    "#10B981",

                    "#F59E0B",

                    "#EF4444",

                    "#8B5CF6",

                    "#EC4899",

                    "#DC2626",

                    "#64748B"

                ],

                borderRadius:10

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{

                    display:false

                }

            },

            scales:{

                y:{

                    beginAtZero:true

                }

            }

        }

    });

    /*-------------------------------
        GRÁFICO DONA
    -------------------------------*/

    new Chart(document.getElementById("graficoCircular"),{

        type:"doughnut",

        data:{

            labels:datos.etiquetas,

            datasets:[{

                data:datos.valores,

                backgroundColor:[

                    "#2563EB",

                    "#10B981",

                    "#F59E0B",

                    "#EF4444",

                    "#8B5CF6",

                    "#EC4899",

                    "#DC2626",

                    "#64748B"

                ]

            }]

        },

        options:{

            responsive:true,

            plugins:{

                legend:{

                    position:"bottom"

                }

            }

        }

    });

    /*-------------------------------
        GRÁFICO RADAR
    -------------------------------*/

    new Chart(document.getElementById("graficoRadar"),{

        type:"radar",

        data:{

            labels:datos.etiquetas,

            datasets:[{

                label:"Indicadores",

                data:datos.valores,

                fill:true,

                backgroundColor:"rgba(37,99,235,.20)",

                borderColor:"#2563EB",

                pointBackgroundColor:"#2563EB"

            }]

        },

        options:{

            responsive:true,

            scales:{

                r:{

                    beginAtZero:true

                }

            }

        }

    });

}

/*=========================================
CONCLUSIONES AUTOMÁTICAS
=========================================*/

function generarConclusiones(){

    const d = datosDashboard.indicadores;

    const empleo = d.empleoAdecuado;

    const subempleo = d.subempleoTiempo + d.subempleoIngresos;

    const desempleo = d.desempleoAbierto + d.desempleoOculto;

    let texto1 =
    `La población expandida analizada alcanza aproximadamente ${Number(d.poblacion).toLocaleString("es-EC")} personas. Los indicadores evidencian que el mercado laboral de Cotopaxi presenta una importante presencia de empleo vulnerable, justificando la necesidad de fortalecer las políticas públicas de empleo.`;

    let texto2 =
    `El empleo adecuado representa el ${empleo.toFixed(2)}% de la población ocupada. Este porcentaje demuestra que todavía existe una capacidad limitada para generar empleo formal y estable, siendo prioritario fortalecer las actividades productivas y la capacitación técnica.`;

    let texto3 =
    `El subempleo alcanza el ${subempleo.toFixed(2)}%, resultado de la suma del subempleo por tiempo y por ingresos. Esta situación evidencia problemas estructurales relacionados con productividad, ingresos laborales y acceso a oportunidades económicas.`;

    let texto4 =
    `Se recomienda implementar una política pública coordinada entre la Prefectura de Cotopaxi, el Ministerio de Producción (MIPRO) y los Gobiernos Autónomos Descentralizados (GAD), orientada al fortalecimiento productivo, capacitación laboral, emprendimiento y comercialización, con el objetivo de incrementar el empleo adecuado y reducir progresivamente el subempleo y el desempleo (${desempleo.toFixed(2)}%).`;

    document.getElementById("conclusion1").innerHTML = texto1;

    document.getElementById("conclusion2").innerHTML = texto2;

    document.getElementById("conclusion3").innerHTML = texto3;

    document.getElementById("conclusion4").innerHTML = texto4;

}

/*=========================================
INICIAR DASHBOARD
=========================================*/

window.onload = function(){

    cargarDatos();

};