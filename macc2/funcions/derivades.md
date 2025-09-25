---
marp: true
theme: gaia
_class: lead
paginate: true
title: Límits i continuitat
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

# Derivades

La **derivada** d'una funció $f$ en un punt $x$ mesura la taxa de variació instantània de $f$ respecte de $x$.

Si existeix, la definim com:

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
$$

La interpretació geomètrica: pendent de la recta tangent a la corba $y=f(x)$ en $x$.

---

## Taula de derivades (funció i derivada)

|      Funció      |       Derivada        |        Funció        |                Derivada                 |
| :--------------: | :-------------------: | :------------------: | :-------------------------------------: |
|       $k$        |           0           |      $k\cdot x$      |                    k                    |
|      $x^n$       |      $n x^{n-1}$      |        $e^x$         |                  $e^x$                  |
|      $a^x$       |      $a^x\ln a$       |       $\ln x$        |                  $1/x$                  |
|   $f(x)+g(x)$    |     $f'(x)+g'(x)$     |    $k\cdot f(x)$     |             $k\cdot f'(x)$              |
| $f(x)\cdot g(x)$ | $f'(x)g(x)+f(x)g'(x)$ | $\dfrac{f(x)}{g(x)}$ | $\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}$ |

---

## Demostració: derivada de $x^2$

Per definició de derivada:

$$
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
$$

Si $f(x)=x^2$:

$$
f'(x)=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}
$$

---

Desenvolupem $(x+h)^2=x^2+2xh+h^2$:

$$
f'(x)=\lim_{h\to0}\frac{x^2+2xh+h^2-x^2}{h}
$$

$$
f'(x)=\lim_{h\to0}\frac{2xh+h^2}{h}
=\lim_{h\to0}(2x+h)
$$

Quan $h\to0$:

$$
f'(x)=2x
$$
