var lsitadoPaises = ['España',
    'Inglaterra',
    'Suiza',
    'Suecia',
    'Brazil'
];
//Programacion funcional
lsitadoPaises.forEach(function (lsitadoPaises) {
    console.log("Los paises son " + lsitadoPaises);
    document.write("<p>Estos son los paises " + lsitadoPaises + "</p>");
});
var fecha = new Date();
document.write("<p<>Esta es la fecha " + fecha.toUTCString() + "</p>");
var calificaciones;
(function (calificaciones) {
    calificaciones[calificaciones["suspenso"] = 0] = "suspenso";
    calificaciones[calificaciones["aprobado"] = 1] = "aprobado";
    calificaciones[calificaciones["notable"] = 2] = "notable";
    calificaciones[calificaciones["sobresaliente"] = 3] = "sobresaliente";
})(calificaciones || (calificaciones = {}));
;
var caliJuan = calificaciones.notable;
console.log("La nota de Juan es ".concat(calificaciones[caliJuan]));
$("#enviar").click(function () {
    var letras = $("#nombre").val();
    console.log("Las letras tienen ".concat(letras.length, " caracteres"));
    $("#mensaje").append(letras.toString());
});
