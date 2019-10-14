var p1 = new Punto(1,1);
var p2 = new Punto(1,1);
var p3 = new Punto(1,1);

var segmento = new Segmento(p1,p2);

function generarPuntos() {
  var x1 = document.getElementById('punto_1_x_input').value;
  var y1 = document.getElementById('punto_1_y_input').value;

  var x2 = document.getElementById('punto_2_x_input').value;
  var y2 = document.getElementById('punto_2_y_input').value;

  p1.setX(x1);
  p1.setY(y1);

  p2.setX(x2);
  p2.setY(y2);

  console.log(p1);
  console.log(p2);
}

function generarPuntoPertenece() {
  var x3 = document.getElementById('punto_3_x_input').value;
  var y3 = document.getElementById('punto_3_y_input').value;

  p3.setX(x3);
  p3.setY(y3);

  console.log(p3);

}

function generarSegmento() {
  segmento.setP1(p1);
  segmento.setP2(p2);

  console.log(segmento);
}

function hacerEcuacion() {
  segmento.ecuacionDeLaRecta();

  console.log(segmento.getM);
  console.log(segmento.getN);

  document.getElementById('ecuacion').value = segmento.showEcuacion();

}

function puntoEnLaRecta() {
  var contenido = segmento.contenidoEnLaRecta(p3);

  console.log(contenido);

  if (contenido == true) {
    document.getElementById('resultado_estar').value = "Sí";
  } else {
  document.getElementById('resultado_estar').value = "No";
  }
}
