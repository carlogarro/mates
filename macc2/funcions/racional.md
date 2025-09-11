---
marp: true
theme: gaia
_class: lead
paginate: true
title: Límits i continuitat
author: Carlos García Rodríguez
date: 2025-08-25
lang: ca
---

<style>
.exercici-classe, .exercici-casa {
  position: relative;
  border-radius: 12px;
  background: #fff8e1;
  padding: 1.2em;
  margin: 1em 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  
  font-size: 1.1em;
}

.exercici-classe{
  border-left: 6px solid #ff9800;
}

.exercici-casa{
  border-left: 6px solid #d23d48;
}

/* Exercici a classe */
.exercici-classe::before {
  content: "Exercici a classe";
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ff9800;   /* verd */
  color: white;
  padding: 0.2em 0.6em;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: bold;
}

/* Exercici a casa */
.exercici-casa::before {
  content: "Exercici a casa";
  position: absolute;
  top: -10px;
  right: -10px;
  background: #d23d48;   /* blau */
  color: white;
  padding: 0.2em 0.6em;
  border-radius: 12px;
  font-size: 0.85em;
  font-weight: bold;
}
</style>

<!-- Incluimos JSXGraph -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraph.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraphcore.js"></script>

# Funció racional

Una **funció racional** és el quocient de dues funcions polinòmiques, és a dir, una funció de la forma:

$$f(x) = \frac{P(x)}{Q(x)}$$

on $P(x)$ i $Q(x)$ són polinomis, i $Q(x) \neq 0$.

---

## Domini

El domini d'una funció racional són tots els valors reals per als quals el denominador $Q(x)$ no és zero, ja que dividir per zero no està definit.

$$
\operatorname{dom}(f) = \{ x \in \mathbb{R} \mid Q(x) \neq 0 \}
$$

---

1. **Identifica el denominador** $Q(x)$.
2. **Resol l’equació**:
   $$
   Q(x) = 0
   $$
   - Troba quins valors de $x$ **anul·len el denominador**.

3. **Exclou aquests valors** del domini.
4. **Escriu el domini** com:
   - Una frase ("Tots els nombres reals excepte...")
   - O en **forma d’intervals**, excloent els punts trobats.

---

## Exemples: Trobar el domini d’una funció racional

---

### Funció donada:
$$
f(x) = \frac{2x + 1}{x^2 - 4}
$$

**1. Identifica el denominador:**  
$$
Q(x) = x^2 - 4
$$

**2. Troba quan el denominador s’anul·la:**  
$$
x^2 - 4 = 0 \Rightarrow x = \pm2
$$

---

**3. El denominador és 0 quan $x = 2$ o $x = -2$**  
Aquests **valors s’han d’excloure** del domini perquè la funció no està definida en aquests punts.

**Forma amb intervals:**
$$
\operatorname{dom}(f) = (-\infty, -2) \cup (-2, 2) \cup (2, \infty)
$$

**Forma descriptiva:**  
Tots els nombres reals **excepte** $x = -2$ i $x = 2$

### Observació:
- El numerador $2x + 1$ pot ser qualsevol valor; no afecta el domini.
- El problema està únicament en el **denominador**.

---


## Exemples

$$
f(x) = \frac{x^2 - 1}{x - 3}
$$

el domini és $\mathbb{R} \setminus \\{3\\}$, és a dir, tots els reals menys $x=3$. Ja que si la $x=3$ el denominador val zero.

<div id="jxgbox" class="jxgbox" style="width:500px; height:300px; margin: 0 auto;"></div>
<script>
  const board = JXG.JSXGraph.initBoard('jxgbox', {
    boundingbox: [-15, 20, 20, -15],
    axis: true,
    showCopyright: false
  });
  const f = function(x) {
    return (x*x - 1) / (x - 3);
  };
  board.create('functiongraph', f, {strokeColor:'#00a', strokeWidth:2});
  board.create('line', [[3, -5], [3, 5]], {
    strokeColor: 'red', dash: 2, strokeWidth: 1, fixed: true
  });
</script>

---

$$
f(x) = \frac{1}{x - 3}
$$

La funció no està definida quan el denominador s’anul·la:
$x - 3 = 0 \Rightarrow x = 3$

Per tant,

$$
\operatorname{dom}(f) = \mathbb{R} \setminus \{3\}
$$

<div id="jxgbox1" class="jxgbox" style="width:400px; height:300px; margin: 0 auto;"></div>
<script>
  const b1 = JXG.JSXGraph.initBoard('jxgbox1', {
    boundingbox: [-5, 5, 10, -5],
    axis: true,
    showCopyright: false
  });
b1.create('functiongraph', [
function(x) {
return 1 / (x - 3);
}, -5, 10
], {
strokeColor: 'blue',
dash: 0
});
b1.create('line', [[3, -10], [3, 10]], {
strokeColor: 'red',
dash: 2,
straightFirst: false,
straightLast: false
});
</script>

---

$$
f(x) = \frac{x + 1}{x^2 - 4}
$$

Denominador: $x^2 - 4 = 0 \Rightarrow x = \pm 2$

Per tant,

$$
\operatorname{dom}(f) = \mathbb{R} \setminus \{-2, 2\}
$$

<div id="jxgbox2" class="jxgbox" style="width:400px; height:300px; margin: 0 auto;"></div>
<script>
  const b2 = JXG.JSXGraph.initBoard('jxgbox2', {
    boundingbox: [-5, 5, 5, -5],
    axis: true,
    showNavigation: true,
    showCopyright: false
  });
b2.create('functiongraph', [
function(x) {
return (x + 1) / (x*x - 4);
}, -5, 5
], {
strokeColor: 'blue'
});
b2.create('line', [[-2, -10], [-2, 10]], {
strokeColor: 'red',
dash: 2,
straightFirst: false,
straightLast: false
});
b2.create('line', [[2, -10], [2, 10]], {
strokeColor: 'red',
dash: 2,
straightFirst: false,
straightLast: false
});
</script>

---

<div class="exercici-casa">
Name twice
</div>