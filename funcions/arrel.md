# Funció amb arrels (funció radical)

Una **funció radical** és una funció que inclou l'arrel n-èsima d'una variable, per exemple:

\\[
f(x) = \sqrt{x} \quad \text{o} \quad f(x) = \sqrt[n]{x}
\\]

El cas més comú és l'arrel quadrada, \\(\sqrt{x}\\).

---

## Domini

Perquè la funció estigui definida en els nombres reals, el radicand (el que està dins l'arrel) ha de ser major o igual que zero, si el grau de l'arrel és parell:

\\[
\mathrm{Dom}(f) = \{ x \in \mathbb{R} \mid x \geq 0 \}
\\]

Per arrels d'ordre imparell (ex. \\(\sqrt[3]{x}\\)), el domini és tot \\(\mathbb{R}\\).

---

## Equivalència amb potències

L’arrel n-èsima d’un nombre es pot expressar com una potència amb exponent fraccionari:

\\[
\sqrt[n]{x} = x^{\frac{1}{n}}
\\]

Per exemple:

\\[
\sqrt{x} = x^{\frac{1}{2}}
\\]

Aquesta forma és molt útil per aplicar propietats de potències i per fer càlcul diferencial i integral.

---

## Exemple: arrel quadrada

Considerem la funció

\\[
f(x) = \sqrt{x}
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
    if (x < 0) return NaN; // fora del domini
    return Math.sqrt(x);
  };
  board.create('functiongraph', f, {strokeColor:'#b1580f', strokeWidth:2});
  board.create('point', [0, 0], {name: 'O', size: 3, fixed: true});
</script>
