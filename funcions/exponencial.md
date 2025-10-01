---
marp: true
theme: gaia
_class: lead
paginate: true
title: Funció exponencial
author: Carlos García Rodríguez
date: 2025-08-25
lang: ca
style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
---

<!-- Incluimos JSXGraph -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraph.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraphcore.js"></script>

# Funció exponencial

Una **funció exponencial** és de la forma:

$$
f(x) = b^x
$$

on la base $b$ és un nombre real positiu diferent de $1$ ($b > 0, a \neq 1$).

| Tipus                  | Valor de $b$ | Comportament            |
| ---------------------- | ------------ | ----------------------- |
| Creixement exponencial | $b > 1$      | Creix amb el temps      |
| Decadència exponencial | $0 < b < 1$  | Disminueix amb el temps |

---

## Exemples

---

### Creixement d'una població que es duplica cada hora

$P(t) = 100 \cdot 2^t$

Comença amb 100 bacteris. Cada hora, es multipliquen per 2.

<div class="columns">
<div>

- Després de 1 hora: $100 \cdot 2^1 = 200$
- Després de 2 hores: $100 \cdot 2^2 = 400$
- Després de 3 hores: $100 \cdot 2^3 = 800$

</div>
<div>

<div id="exponencialBacteris" class="jxgbox" style="width:500px; height:300px;margin:35px;"></div>

</div>
</div>

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

### Domini i continuïtat

- **Domini:** $\mathbb{R}$ (tots els nombres reals)
- **Continuïtat:** contínua a tot $\mathbb{R}$. _Puc anar desde qualsevol punt fins a un altre sense aixecar el llàpis._

### Talls amb els eixos

- **Tall amb l’eix Y:** $f(0)=100$ → punt $(0,100)$
- **Tall amb l'eix X:** $f(x)=0$ → Logaritmes

---

### Límits i comportament a l'infinit

O infinit o zero.

## Assimptotes

- **Exponencial → no té assimptotes** verticals.
- Si $\lim_{x\to+\infty} f(x)=k$ → Té una assímptota horitzontal

---

### Consum d’una droga al cos on s'elimina un 30% de la dosi cada hora.

$C(t) = 500 \cdot (0.7)^t$

Dosi inicial: 500 mg. Es manté el 70% cada hora.

<div class="columns">
<div>

- Després de 1 hora: $500 \cdot 0.7 = 350$
- Després de 2 hores: $500 \cdot (0.7)^2 = 245$
- Després de 3 hores: $500 \cdot (0.7)^3 = 171.5$

</div>
<div>

<div id="exponencialDroga" class="jxgbox" style="width:500px; height:300px; margin:35px;"></div>

</div>
</div>

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

---

<style scoped>section { font-size: 30px; }</style>

## PAU CAT CCSS SET 2022

Durant la darrera epidèmia d’Ebola es va considerar que, sense cap intervenció, el virus es propagava augmentant en un 3\% diari el nombre d’afectats. Suposeu que, en una població, avui, hi ha 25 persones infectades.

- Escriviu la fórmula de la funció que dóna el nombre de persones infectades en passar els dies. Quantes persones estaran infectades al cap de 20 dies?
- A partir d’una data determinada, en aquesta població s’apliquen unes mesures sanitàries que permeten que el nombre de persones infectades disminueixi segons la funció $g(x) = 1000 \cdot (0.95)^x$. Si considerem controlada l’epidèmia quan el nombre d’afectats és igual o inferior a 10 persones, quants dies hauran de passar després d’aplicar les mesures sanitàries per a poder declarar controlada l’epidèmia?

---

## PAU CAT CCSS JUNY 2015

La funció derivada d’una funció $f$ és $f'(x) = e^{–2x} · (x – x^2)$

- Estudieu el creixement i el decreixement de la funció $f$.
- Si la funció $f$ té extrems relatius, indiqueu-ne les abscisses i classifiqueu-los.
