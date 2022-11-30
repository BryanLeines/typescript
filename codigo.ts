var lsitadoPaises: string[] = ['España',
    'Inglaterra',
    'Suiza',
    'Suecia',
    'Brazil'
];

//Programacion funcional
lsitadoPaises.forEach(lsitadoPaises => {
    console.log("Los paises son " + lsitadoPaises);
    document.write("<p>Estos son los paises " + lsitadoPaises + "</p>");
});

var fecha: Date = new Date();
document.write("<p<>Esta es la fecha " + fecha.toUTCString() + "</p>");


enum calificaciones {
    'suspenso',
    'aprobado',
    'notable',
    'sobresaliente'
};
var caliJuan = calificaciones.notable;

console.log(`La nota de Juan es ${calificaciones[caliJuan]}`);

$("#enviar").click(function() {
    var letras:any = $("#nombre").val();
    console.log(`Las letras tienen ${letras.length} caracteres`)
    $("#mensaje").append(letras.toString());
});