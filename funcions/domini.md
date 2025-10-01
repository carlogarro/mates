# Domini d’una funció

El domini d’una funció és el conjunt de valors d’entrada (normalment valors de x) pels quals la funció està definida. És a dir, són els valors per als quals podem calcular el valor de la funció sense que aparegui cap problema (com una divisió per zero o una arrel quadrada de nombre negatiu, depenent del tipus de funció).

Al següent exemple veiem que la funció està definida per tots els nombres reals excepte en l'interval entre dos i sis.

<div id="funcio-regio" class="jxgbox" style="width:600px; height:300px;"></div>

<script>
var board = JXG.JSXGraph.initBoard('funcio-regio', {
  boundingbox: [-1, 8, 10, -5],
  axis: true,
  pan: { enabled: true, needTwoFingers: false, needShift: false },
  zoom: { enabled: true, factorX: 1.25, factorY: 1.25, wheel: true, needShift: false },
  showCopyright: false
});

// Funció definida per x < 2
var f1 = board.create('functiongraph', function(x) {
  if (x < 2) return x;
  else return NaN;
}, {strokeColor: '#0077CC', strokeWidth: 2});

// Funció definida per x > 6
var f2 = board.create('functiongraph', function(x) {
  if (x > 6) return x;
  else return NaN;
}, {strokeColor: '#0077CC', strokeWidth: 2});

// Línies verticals a 2 i 6 per marcar la regió buida
board.create('line', [[2, -5], [2, 8]], {strokeColor:'#CC0000', strokeWidth:2, dash:2});
board.create('line', [[6, -5], [6, 8]], {strokeColor:'#CC0000', strokeWidth:2, dash:2});
</script>