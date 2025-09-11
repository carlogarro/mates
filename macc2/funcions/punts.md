---
marp: true
theme: gaia
_class: lead
paginate: true
title: Funció exponencial
author: Carlos García Rodríguez
date: 2025-08-25
lang: ca
---

<!-- Incluimos JSXGraph -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraph.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraphcore.js"></script>

# Punts d’una funció

Una funció relaciona cada valor d’entrada $x$ amb un valor de sortida $f(x)$. Aquestes parelles s’anomenen **punts de la funció**, i es poden representar com $(x, f(x))$.

---

## Imatge

La **imatge** d’un valor $x$ és el resultat de la funció:

$$
f(x) = 2x + 1 \quad \Rightarrow \quad f(3) = 7
$$

La imatge de 3 és 7.

---

## Antiimatge

L’**antiimatge** d’un valor $y$ és el conjunt de $x $ tals que $f(x) = y $.

Exemple: $f(x) = x^2 $, quina és l’antiimatge de 9?

$$
x^2 = 9 \Rightarrow x = \pm 3
$$

L’antiimatge de 9 són 3 i -3.

---

<div id="jxgimatge" class="jxgbox" style="width:400px; height:300px;"></div>
<script>
  var board1 = JXG.JSXGraph.initBoard('jxgimatge', {
    boundingbox: [-5, 5, 5, -2],
    axis: true,
    showNavigation: true,
    showCopyright: false
  });
var slider = board1.create('slider', [[-5,0], [5,0], [-5, 0, 5]], {name:'x', snapWidth: 0.1});
var graphPoint = board1.create('point', [
  function() { return slider.Value(); },
  function() { return Math.pow(slider.Value(), 2); }
], {name: function () {
        const yVal = Math.pow(slider.Value(), 2);
        return yVal.toFixed(2); // mostra només 2 decimals
      }, color: 'blue'});
board1.create('functiongraph', [
  function(x){ return x*x; },
  -5, 5
]);
var line = board1.create('segment', [
    [function() { return slider.Value(); }, 0], // Punt a l'eix X
    graphPoint
  ], {
    strokeColor: 'red',
    dash: 2,  // Línia discontinua
    name: 'linea'
  });
</script>

---

## Punt de tall amb els eixos

- Eix Y: $f(0)$
- Eix X: resolem $f(x) = 0$

---

## Taula de valors

| x   | f(x) |
| --- | ---- |
| -2  | -3   |
| -1  | -1   |
| 0   | 1    |
| 1   | 3    |
| 2   | 5    |

Gràficament, aquests són punts $(x, f(x))$ al pla.

---

## Representació gràfica

La gràfica d’una funció és la representació visual del conjunt de parelles (x, f(x)). Ens permet entendre d’un cop d’ull com es comporta la funció.

Per exemple, la gràfica de $f(x) = 2x + 3$ és una recta amb pendent 2 i ordenada a l’origen 3.

A sota pots veure la gràfica de $f(x) = x^2$. Pots moure el punt per veure la seva imatge.

---

<div id="punts" class="jxgbox" style="width:500px; height:200px;"></div>
<script>
  var board = JXG.JSXGraph.initBoard('punts', { boundingbox: [-5,2,5,-2], showCopyright: false});
  board.create('point', [-2,1]);
  var q = board.create('point', [3,0]);
</script>
