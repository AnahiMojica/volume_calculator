
function rectangular() {
    var largo = parseFloat(document.getElementById("txtLargo1").value);
    var ancho = parseFloat(document.getElementById("txtAncho1").value);
    var alto = parseFloat(document.getElementById("txtAlto1").value);

    var volumenCm = largo * ancho * alto;

    var volumenLitros = volumenCm / 1000;

    alert("El acuario rectangular necesita: " + volumenLitros + " litros");
}

function cuadrado() {
    var lado = parseFloat(document.getElementById("txtLado").value);

    var volumenCm = Math.pow(lado, 3);

    var volumenLitros = volumenCm / 1000;

    alert("El acuario cuadrado necesita: " + volumenLitros + " litros");
}

function cilindrico() {
    var altura = parseFloat(document.getElementById("txtAltura").value);
    var radio = parseFloat(document.getElementById("txtRadio1").value);
    var pi = 3.1415;
    var volumen = altura * pi * (radio * radio);
    var litrosTeoricos = volumen * 0.001; // Litros teóricos
    alert("El acuario cilíndrico necesita: " + litrosTeoricos.toFixed(2) + " litros");
}


function esferico() {
    var radio = parseFloat(document.getElementById("txtRadio2").value);

    var volumenCm = (4 / 3) * Math.PI * Math.pow(radio, 3);

    var volumenLitros = volumenCm / 1000;

    alert("El acuario esférico necesita: " + volumenLitros.toFixed(2) + " litros");
}

function panTri() {
    var altura = parseFloat(document.getElementById("txtAltura3").value);
    var radio = parseFloat(document.getElementById("txtRadio3").value);
    var pi = 3.1415;
    var volumen = altura * pi * (radio * radio) / 4;
    var litrosTeoricos = volumen * 0.001; // Litros teóricos
    var litrosReales = litrosTeoricos * 0.75; // Litros reales (teóricos - 25%)
    alert("El volumen teórico del acuario es de " + litrosTeoricos.toFixed(2) + " litros");
}

function panRec() {
    var altura = parseFloat(document.getElementById("txtAltura4").value);
    var anchura = parseFloat(document.getElementById("txtAnchura4").value);
    var largo = parseFloat(document.getElementById("txtLargo4").value);

    var volumenRectangulo = altura * anchura * largo;
    var pi = 3.1415;
    var lar = largo / 2;
    var volumenSemicirculo = altura * pi * (lar * lar) / 2;

    var volumenTotal = volumenRectangulo + volumenSemicirculo;
    var total = volumenTotal * 0.001;

    alert("El volumen del acuario panorámico rectangular es: " + total.toFixed(2) + " litros");
}

function semiCir() {
    var altura = parseFloat(document.getElementById("txtAltura5").value);
    var radio = parseFloat(document.getElementById("txtRadio5").value);
    var pi = 3.1415;
    var volumen = altura * pi * (radio * radio) / 2;
    var litrosTeoricos = volumen * 0.001; // Litros teóricos
    alert("El acuario semi-circular necesita: " + litrosTeoricos.toFixed(2) + " litros");
}


function triangular() {
    var largo = parseFloat(document.getElementById("txtNum1").value);
    var ancho = parseFloat(document.getElementById("txtNum2").value);
    var alto = parseFloat(document.getElementById("txtNum3").value);
    var volumen = (largo * ancho * alto) / 2; // Volumen en cm³
    var litrosTeoricos = volumen * 0.001; // Litros teóricos
    var litrosReales = litrosTeoricos * 0.75; // Litros reales (teóricos - 25%)
    alert("El volumen teórico del acuario es de " + litrosTeoricos.toFixed(2) + " litros");
}