# Funció exponencial

Una **funció exponencial** és de la forma:

\\[
f(x) = b^x
\\]

on la base \\(b\\) és un nombre real positiu diferent de \\(1\\) (\\(b > 0, a \neq 1\\)).

| Tipus                                        | Valor de \\( b \\)      | Comportament        |
|----------------------|------------------------|----------------------|
| Creixement exponencial | \\( b > 1 \\)            | Creix amb el temps   |
| Decadència exponencial | \\( 0 < b < 1 \\)        | Disminueix amb el temps |


---

## Domini

El domini de la funció exponencial és tot \\(\mathbb{R}\\):

\\[
\mathrm{Dom}(f) = \mathbb{R}
\\]

La funció està definida per a qualsevol nombre real \\(x\\).


## Exemples

### Creixement d'una població que es duplica
**Context:** Una població de bacteris es duplica cada hora.

**Fórmula:**  
\\( P(t) = 100 \cdot 2^t \\)

**Explicació:**  
Comença amb 100 bacteris. Cada hora, es multipliquen per 2.  
- Després de 1 hora: \\( 100 \cdot 2^1 = 200 \\)
- Després de 2 hores: \\( 100 \cdot 2^2 = 400 \\)  
- Després de 3 hores: \\( 100 \cdot 2^3 = 800 \\)

<div id="exponencialBacteris" class="jxgbox" style="width:500px; height:300px;"></div>
<script>
  var board = JXG.JSXGraph.initBoard('exponencialBacteris', {
  boundingbox: [-2, 1000, 4, -10],
  axis: true,
  pan: { enabled: true, needTwoFingers: false, needShift: false },
  zoom: { enabled: true, factorX: 1.25, factorY: 1.25, wheel: true, needShift: false },
  showCopyright: false
});
  const eB = function(x) {
    return 100*Math.pow(2, x);
  };
  board.create('functiongraph', eB);
  board.create('point', [0,100], {fixed: true});
  board.create('point', [1,200], {fixed: true});
  board.create('point', [2,400], {fixed: true});
  board.create('point', [3,800], {fixed: true});
</script>

---

### Consum d’una droga al cos
**Context:** El cos elimina un 30% de la dosi cada hora.

**Fórmula:**  
\\( C(t) = 500 \cdot (0.7)^t \\)

**Explicació:**  
Dosi inicial: 500 mg. Es manté el 70% cada hora.  
- Després de 1 hora: \\( 500 \cdot 0.7 = 350 \\)  
- Després de 2 hores: \\( 500 \cdot (0.7)^2 = 245 \\)
- Després de 3 hores: \\( 500 \cdot (0.7)^3 = 171.5 \\)

<div id="exponencialDroga" class="jxgbox" style="width:500px; height:300px;"></div>
<script>
  var board = JXG.JSXGraph.initBoard('exponencialDroga', {
  boundingbox: [-2, 600, 20, -10],
  axis: true,
  pan: { enabled: true, needTwoFingers: false, needShift: false },
  zoom: { enabled: true, factorX: 1.25, factorY: 1.25, wheel: true, needShift: false },
  showCopyright: false
  });
  const eD = function(x) {
    return 500*Math.pow(0.7, x);
  };
  board.create('functiongraph', eD);
  board.create('point', [0,500], {fixed: true});
  board.create('point', [1,350], {fixed: true});
  board.create('point', [2,245], {fixed: true});
  board.create('point', [3,171.5], {fixed: true});
</script>

Molts cops ens trobarem amb una funció exponencial que té com a base el nombre \\(e\\)[^note].
[^note]: El nombre e és un nombre irracional i trascendent aproximadament igual a 2,71828..., i és una de les constants matemàtiques més importants, com π. El nombre \\(e\\) s'anomena a vegades constant d'Euler, en honor del matemàtic suís Leonhard Euler i també constant de Napier, en honor del matemàtic escocès John Napier que va introduir els logaritmes.


\\[
f(x) = e^x
\\]

<div id="exponencialE" class="jxgbox" style="width:500px; height:300px;"></div>
<script>
  var board = JXG.JSXGraph.initBoard('exponencialE', {
  boundingbox: [-2, 10, 4, -10],
  axis: true,
  pan: { enabled: true, needTwoFingers: false, needShift: false },
  zoom: { enabled: true, factorX: 1.25, factorY: 1.25, wheel: true, needShift: false },
  showCopyright: false
});
  const g = function(x) {
    return Math.pow(Math.E, x);
  };
  board.create('functiongraph', g, {strokeColor:'#d22', strokeWidth:2});
</script>