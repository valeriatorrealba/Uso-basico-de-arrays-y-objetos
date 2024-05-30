//Titulos y tablas del Html
var titulo = "<h1>Estadisticas centro médico ñuñoa</h1>"
document.getElementById("titulo").innerHTML = titulo;
var atencionRadiologia = "<h2>Radiologia</h2>"
document.getElementById("atencionRadiologia").innerHTML = atencionRadiologia;
var atencionTraumatologia = "<h2>Traumatologia</h2>"
document.getElementById("atencionTraumatologia").innerHTML = atencionTraumatologia;
var atencionDental = "<h2>Dental</h2>"
document.getElementById("atencionDental").innerHTML = atencionDental;

//Array con objetos
let radiologia =    [{HORA: "11:00",
                    ESPECIALISTA: "IGNACIO SCHULZ",
                    PACIENTE: "FRANCISCA ROJAS",
                    RUT: "9878782-1",
                    PREVISION: "FONASA"},
                    {HORA: "11:30",
                    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
                    PACIENTE: "PAMELA ESTRADA",
                    RUT: "15345241-3",
                    PREVISION: "ISAPRE"
                    },
                    {HORA: "15:00",
                    ESPECIALISTA: "FERNANDO WURTHZ",
                    PACIENTE: "ARMANDO LUNA",
                    RUT: "16445345-9",
                    PREVISION: "ISAPRE"
                    },
                    {HORA: "15:30",
                    ESPECIALISTA: "ANA MARIA GODOY",
                    PACIENTE: "MANUEL GODOY",
                    RUT: "17666419-0",
                    PREVISION: "FONASA"
                    },
                    {HORA: "16:00",
                    ESPECIALISTA: "PATRICIA SUAZO",
                    PACIENTE: "RAMON ULLOA",
                    RUT: "14989389-K",
                    PREVISION: "FONASA"
                    }
                    ]
document.write(`<p>Primera atención: ${radiologia[0].PACIENTE} - ${radiologia[0].PREVISION} | Última atención: ${radiologia[radiologia.length-1].PACIENTE} - ${radiologia[radiologia.length-1].PREVISION} </p>`);

let traumatologia = [   {HORA: "8:00",
                        ESPECIALISTA: "MARIA PAZ ALTUZARRA",
                        PACIENTE: "PAULA SANCHEZ",
                        RUT: "15554774-5",
                        PREVISION: "FONASA"
                        },
                        {HORA: "10:00",
                        ESPECIALISTA: "RAUL ARAYA",
                        PACIENTE: "ANGÉLICA NAVAS",
                        RUT: "15444147-9",
                        PREVISION: "ISAPRE"
                        },
                        {HORA: "20:30",
                        ESPECIALISTA: "MARIA ARRIAGADA",
                        PACIENTE: "ANA KLAPP",
                        RUT: "17879423-9",
                        PREVISION: "ISAPRE"
                        },
                        {HORA: "11:00",
                        ESPECIALISTA: "ALEJANDRO BADILLA",
                        PACIENTE: "FELIPE MARDONES",
                        RUT: "1547423-6",
                        PREVISION: "ISAPRE"
                        },
                        {HORA: "11:30",
                        ESPECIALISTA: "CECILIA BUDNIK",
                        PACIENTE: "DIEGO MARRE",
                        RUT: "16554741-K",
                        PREVISION: "FONASA"
                        },
                        {HORA: "12:00",
                        ESPECIALISTA: "ARTURO CAVAGNARO",
                        PACIENTE: "CECILIA MENDEZ",
                        RUT: "9747535-8",
                        PREVISION: "ISAPRE"
                        },
                        {HORA: "12:30",
                        ESPECIALISTA: "ANDRES KANACRI",
                        PACIENTE: "MARCIAL SUAZO",
                        RUT: "11254785-5",
                        PREVISION: "ISAPRE"
                        },
]
document.write(`<p>Primera atención: ${traumatologia[0].PACIENTE} - ${traumatologia[0].PREVISION} | Última atención: ${traumatologia[traumatologia.length-1].PACIENTE} - ${traumatologia[traumatologia.length-1].PREVISION} </p>`);

let dental = [  {HORA: "8:30",
                ESPECIALISTA: "ANDREA ZUÑIGA",
                PACIENTE: "MARCELA RETAMAL",
                RUT: "11123425-6",
                PREVISION: "ISAPRE"
                },
                {HORA: "11:00",
                ESPECIALISTA: "MARIA PIA ZAÑARTU",
                PACIENTE: "ANGEL MUÑOZ",
                RUT: "9878789-2",
                PREVISION: "ISAPRE"
                },
                {HORA: "11:30",
                ESPECIALISTA: "SCARLETT WITTING",
                PACIENTE: "MARIO KAST",
                RUT: "7998789-5",
                PREVISION: "FONASA"
                },
                {HORA: "13:00",
                ESPECIALISTA: "FRANCISCO VON TEUBER",
                PACIENTE: "KARIN FERNANDEZ",
                RUT: "18887662-K",
                PREVISION: "FONASA"
                },
                {HORA: "13:30",
                ESPECIALISTA: "EDUARDO VIÑUELA",
                PACIENTE: "HUGO SANCHEZ",
                RUT: "17665461-4",
                PREVISION: "FONASA"
                },
                {HORA: "14:00",
                ESPECIALISTA: "RAQUEL VILLASECA",
                PACIENTE: "ANA SEPULVEDA",
                RUT: "14441281-0",
                PREVISION: "ISAPRE"
                },]
document.write(`<p>Primera atención: ${dental[0].PACIENTE} - ${dental[0].PREVISION} | Última atención: ${dental[dental.length-1].PACIENTE} - ${dental[dental.length-1].PREVISION} </p>`);

//Primera Tabla
var textoFila = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i= 0; i < radiologia.length; i++){
    textoFila+= `<tr">
                <td >${radiologia[i].HORA}</td>
                <td>${radiologia[i].ESPECIALISTA}</td>
                <td>${radiologia[i].PACIENTE}</td>
                <td>${radiologia[i].RUT}</td>
                <td>${radiologia[i].PREVISION}</td>
            </tr>`;
}
document.getElementById("tabla").innerHTML = textoFila;

//Segunda Tabla
var textoFila2 = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
for (var i= 0; i < traumatologia.length; i++){
    textoFila2+= `<tr>
                <td >${traumatologia[i].HORA}</td>
                <td>${traumatologia[i].ESPECIALISTA}</td>
                <td>${traumatologia[i].PACIENTE}</td>
                <td>${traumatologia[i].RUT}</td>
                <td>${traumatologia[i].PREVISION}</td>
            </tr>`;
}
document.getElementById("tabla2").innerHTML = textoFila2;

//Tercera Tabla
var textoFila3 = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";

for (var i= 0; i < dental.length; i++){
    textoFila3+= `<tr>
                <td>${dental[i].HORA}</td>
                <td>${dental[i].ESPECIALISTA}</td>
                <td>${dental[i].PACIENTE}</td>
                <td>${dental[i].RUT}</td>
                <td>${dental[i].PREVISION}</td>
            </tr>`;
}
document.getElementById("tabla3").innerHTML = textoFila3;