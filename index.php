<html>
<head>
  <script src="./js/clase_punto.js"></script>
  <script src="./js/clase_segmento.js"></script>
   <script src="./js/funciones.js"></script>
  <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
  <center>
<h1 id="titulo"> ECUACIÓN DE LA RECTA. </h1>
</center>

<div id="caja_con_puntos">
<label> Punto 1: </label>
<input id="punto_1_x_input" type="number" placeholder="X">  </input>
<input id="punto_1_y_input" type="number" placeholder="Y">  </input>
<br>
<label> Punto 2: </label>
<input id="punto_2_x_input" type="number" placeholder="X">  </input>
<input id="punto_2_y_input" type="number" placeholder="Y">  </input>
<br>
<br>
<button id="registrar_puntos" onclick="generarPuntos()"> Registrar puntos </button>
<button id="generarseg" onclick="generarSegmento()"> Generar segmento </button>
<button id="ecuacionderecta" onclick="hacerEcuacion()"> Generar ecuación de la recta </button>
<br>
<br>
<label> Ecuacion de la recta: </label>
<input id="ecuacion" type="text" readonly>  </input>
<br>
<br>
<center>
<h1 id="titulo"> SABER SI UN PUNTO PERTENECE A UNA RECTA. </h1>
</center>
<label> Punto 3: </label>
<input id="punto_3_x_input" type="number" placeholder="X">  </input>
<input id="punto_3_y_input" type="number" placeholder="Y">  </input>
<br>
<br>
<button id="registrar_puntos" onclick="generarPuntoPertenece()"> Registrar punto </button>
<button id="registrar_puntos" onclick="puntoEnLaRecta()"> ¿Éste punto está en la recta? </button>
<input id="resultado_estar" type="text" readonly>  </input>
</div>

</body>
</html>
