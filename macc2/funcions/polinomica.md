---
marp: true
theme: gaia
_class: lead
paginate: true
title: Funció polinòmica
author: Carlos García Rodríguez
date: 2025-08-25
lang: ca
footer: "Funció polinòmica"
---

<!-- Incluimos JSXGraph -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraph.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraphcore.js"></script>

# Funció polinòmica

Una funció polinòmica és una funció de la forma:

$$
f(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0
$$

on $a_0, a_1, \dots, a_n$ són coeficients reals i $n$ un enter no negatiu que indica el grau del polinomi.

---

# Tipus de polinomis

- Polinomi de grau 0 (constant)
- Polinomi de grau 1
- Polinomi de grau 2
- Polinomi de grau $n$

---

## Polinomi de grau 0 (constant):

$$f(x) = a$$

<div style="text-align:center; margin-top:20px;">
<div id="pol0" class="jxgbox" style="width:400px; height:300px;display:inline-block;"></div>
</div>
<script>
  window.addEventListener("DOMContentLoaded", function () {
    const board = JXG.JSXGraph.initBoard('pol0', {
      boundingbox: [-5, 10, 5, -10],
      axis: true,
      showNavigation: true,
      showCopyright: false
    });
    board.create('functiongraph', [
      function(x) {
        return 2;
      }
    ], {
      strokeColor: 'blue',
      strokeWidth: 2
    });
    board.create('text', [-4, -6, 'Funció polinòmica de grau zero:\n f(x) = 2'], {fontSize: 14, anchorX: 'left'});
  });
</script>

---

## Polinomi de grau 1 (recta):

$$f(x) = ax + b$$

<div style="text-align:center; margin-top:20px;">
<div id="pol1" class="jxgbox" style="width:400px; height:300px;display:inline-block;"></div>
</div>
<script>
  window.addEventListener("DOMContentLoaded", function () {
    const board = JXG.JSXGraph.initBoard('pol1', {
      boundingbox: [-5, 10, 5, -10],
      axis: true,
      showNavigation: true,
      showCopyright: false
    });
    board.create('functiongraph', [
      function(x) {
        return x+2;
      }
    ], {
      strokeColor: 'blue',
      strokeWidth: 2
    });
    board.create('text', [-4, -6, 'Funció polinòmica de primer grau:\n f(x) = x+2'], {fontSize: 14, anchorX: 'left'});
  });
</script>

---

## Polinomi de grau 2 (quadràtic):

$$f(x) = a x^2 + b x + c$$

<div style="text-align:center; margin-top:20px;">
<div id="jxgbox2" class="jxgbox" style="width:400px; height:300px;display:inline-block;"></div>
</div>
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

---

## Polinomi de grau 3 (cúbic):

$$
f(x) = a x^3 + b x^2 + c x + d
$$

<div style="text-align:center; margin-top:20px;">
<div id="jxgbox_cubic" class="jxgbox" style="width:400px; height:300px;display:inline-block;"></div>
</div>
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

---

# Exemple complet

**Farem l’anàlisi pas a pas de**

$$
f(x)=x^{3}-3x^{2}-4x+12
$$

<div style="text-align:center; margin-top:20px;">
<div id="polcomplet" class="jxgbox" style="width:600px; height:300px;display:inline-block;"></div>
</div>

<script>
var board = JXG.JSXGraph.initBoard('polcomplet', {
  boundingbox: [-2, 15, 4, -5],
  axis: true,
  pan: { enabled: true, needTwoFingers: false, needShift: false },
  zoom: { enabled: true, factorX: 1.25, factorY: 1.25, wheel: true, needShift: false },
  showCopyright: false
});
var f = board.create('functiongraph', function(x) {
  return x*x*x - 3*x*x - 4*x + 12;
}, {strokeColor: '#0077CC', strokeWidth: 2});
</script>

---

## Domini i continuïtat

- **Domini:** $\mathbb{R}$ (tots els nombres reals)
- **Continuïtat:** contínua a tot $\mathbb{R}$. _Puc anar desde qualsevol punt fins a un altre sense aixecar el llàpis._

---

## Talls amb els eixos

- **Tall amb l’eix Y:** $f(0)=12$ → punt $(0,12)$
- **Tall amb l'eix X:** $f(x)=0$
  Grau tres amb terme independent, necessitem fer Ruffini. Trobem les tres arrels (valors que fan que el polinomi sigui zero). $x=\{-2,2,3\}$
  Podem factoritzar el polinomi com $f(x)=(x+2)(x-2)(x-3)$

---

## Límits i comportament a l'infinit

$$
f(+\infty)=(+\infty)^{3}-3(+\infty)^{2}-4(+\infty)+12
$$

$$
f(-\infty)=(-\infty)^{3}-3(-\infty)^{2}-4(-\infty)+12
$$

- Observem el monomi de grau superior
  - $\lim_{x\to+\infty} f(x)=+\infty$
  - $\lim_{x\to-\infty} f(x)=-\infty$

Mentre $x$ creix, $f(x)$ va a $+\infty$; quan $x$ decreix, $f(x)$ va a $-\infty$;

---

## Assimptotes

- **Polinòmica → no té assimptotes** (ni verticals, ni horitzontals).

---

## Inequació: Per exemple, $f(x)>0$

- Arrels ordenades sobre la recta real $-2 < 2 < 3$
- Comprovem signes entre intervals calculant la imatge d'un punt aleatori dins de l'interval.
  - $(-\infty,-2)$ → negatiu
  - $(-2,2)$ → positiu
  - $(2,3)$ → negatiu
  - $(3,+\infty)$ → positiu
- **Solució:** $f(x)>0 \text{ si } x\in (-2,2)\ \cup\ (3,+\infty)$.

---

## Derivades — punts crítics i classificació

- Com derivem un polinomi?

1. Mira cada terme per separat.
2. Multiplica el nombre que hi ha davant per l’exponent.
3. Resta 1 a l’exponent.
4. Si el terme és una constant (no té $x$), desapareix.

$$
f(x)=x^{3}-3x^{2}-4x+12 \to f'(x)=3x^{2}-6x-4.
$$

---

- Practiquem unes derivades de polinomis

$f(x) = 5$
$g(x) = \tfrac{1}{2}x^3 - 4x$
$h(x) = -3x^4 + \tfrac{2}{3}x^2 - 7$
$p(x) = x^5 - \tfrac{1}{4}x^3 + 6$
$q(x) = -\tfrac{5}{2}x^2 + 9x - 1$
$r(x) = 7x^6 - \tfrac{3}{5}x$
$s(x) = -x^7 + 2x^4 - \tfrac{1}{2}$
$t(x) = \tfrac{3}{4}x^8 - 2x^2 + x - 10$

---

- Què indica la derivada?

La **derivada** d’una funció en un punt ens diu:

- **La pendent de la recta tangent** a la corba en aquell punt.
- És a dir, **com d’inclinada** està la corba en aquell moment.
- Si la derivada és **positiva** → la funció **puja**.
- Si la derivada és **negativa** → la funció **baixa**.
- Si la derivada és **0** → la pendent és plana (punt màxim, mínim o inflexió).

---

- Punts crítics (màxims i mínims)

Resolem $f'(x)=0$:

$x_{1}\approx -0.53,\quad x_{2}\approx 2.53$

- **Valors de la funció als crítics (aprox.):**
- $f(-0.53)\approx 13.12$ → màxim relatiu.
- $f(2.53)\approx -1.12$ → mínim relatiu.

---

## Concavitat i punts d'inflexió

- **Segona derivada:**
  $$
  f''(x)=6x-6.
  $$
- Punt d'inflexió on $f''(x)=0$ → $x=1$  
  Valor: $f(1)=1-3-4+12=6$.
  - Per $x<1$: $f''(x)<0$ ⇒ concava cap a baix.
  - Per $x>1$: $f''(x)>0$ ⇒ concava cap a dalt.
