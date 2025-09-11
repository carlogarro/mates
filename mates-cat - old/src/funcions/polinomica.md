# Funció polinòmica

Una funció polinòmica és una funció de la forma:

\\[
f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0
\\]

on \\(a_0, a_1, \dots, a_n\\) són coeficients reals i \\(n\\) un enter no negatiu que indica el grau del polinomi.

## Tipus de polinomis

- **Polinomi de grau 2 (quadràtic):**

\\[
f(x) = a x^2 + b x + c
\\]

<div id="jxgbox2" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
  window.addEventListener("DOMContentLoaded", function () {
    const board = JXG.JSXGraph.initBoard('jxgbox2', {
      boundingbox: [-5, 10, 5, -10],
      axis: true,
      showNavigation: true,
      showCopyright: false
    });
    board.create('functiongraph', [
      function(x) {
        return x*x - 2*x - 3;
      },
      -5, 5
    ], {
      strokeColor: 'blue',
      strokeWidth: 2
    });
    const root1 = board.create('point', [-1, 0], { name: 'x₁ = -1', fixed: true, color: 'red' });
    const root2 = board.create('point', [3, 0], { name: 'x₂ = 3', fixed: true, color: 'red' });
    const vertex = board.create('point', [1, -4], { name: 'V(1, -4)', fixed: true, color: 'green' });
    board.create('text', [-4, -6, 'Funció polinòmica de segon grau:\n f(x) = x^2 - 2x - 3'], {fontSize: 14, anchorX: 'left'});
  });
</script>

- **Polinomi de grau 3 (cúbic):**

\\[
f(x) = a x^3 + b x^2 + c x + d
\\]

<div id="jxgbox_cubic" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
  window.addEventListener("DOMContentLoaded", function () {
    const board = JXG.JSXGraph.initBoard('jxgbox_cubic', {
      boundingbox: [-3, 10, 5, -10],
      axis: true,
      showNavigation: true,
      showCopyright: false
    });
    // Gràfica de la funció cúbica
    board.create('functiongraph', [
      function(x) {
        return x*x*x - 3*x*x + 2;
      },
      -3, 5
    ], {
      strokeColor: 'blue',
      strokeWidth: 2
    });
  });
</script>

## Domini

El domini d’una funció polinòmica és tot \\( \mathbb{R} \\), ja que està definida per a tots els valors reals.

<div id="jxgbox" class="jxgbox" style="width:600px; height:300px;"></div>

<script>
var board = JXG.JSXGraph.initBoard('jxgbox', {
  boundingbox: [-2, 10, 4, -10],
  axis: true,
  pan: { enabled: true, needTwoFingers: false, needShift: false },
  zoom: { enabled: true, factorX: 1.25, factorY: 1.25, wheel: true, needShift: false },
  showCopyright: false
});
var f = board.create('functiongraph', function(x) {
  return x*x*x - 3*x*x + 2;
}, {strokeColor: '#0077CC', strokeWidth: 2});
</script>
