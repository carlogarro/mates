# Funció logarítmica

La **funció logarítmica** és la funció inversa de la funció exponencial. Té la forma:

\\[
f(x) = \log_a(x)
\\]

on \\(a > 0\\) i \\(a \neq 1\\) és la base del logaritme.

---

## Domini

El domini de la funció logarítmica és l’ensemble dels nombres reals positius:

\\[
\mathrm{Dom}(f) = (0, +\infty)
\\]

Això vol dir que només està definida per a \(x > 0\).

---

## Exemple amb gràfic

Considerem la funció logarítmica en base 2:

\\[
f(x) = \log_2(x)
\\]

<div id="jxgbox" class="jxgbox" style="width:500px; height:300px;"></div>
<script>
  var board = JXG.JSXGraph.initBoard('jxgbox', {
  boundingbox: [-2, 10, 4, -10],
  axis: true,
  pan: { enabled: true, needTwoFingers: false, needShift: false },
  zoom: { enabled: true, factorX: 1.25, factorY: 1.25, wheel: true, needShift: false },
  showCopyright: false
});
  const f = function(x) {
    return Math.log(x) / Math.log(2);  // canvi base natural a base 2
  };
  board.create('functiongraph', f, {strokeColor:'#2a2', strokeWidth:2});
  board.create('line', [[0, -5], [0, 5]], {
    strokeColor: 'red', dash: 2, strokeWidth: 1, fixed: true
  });
</script>
