# Funcions definides a trossos

Una **funció definida a trossos** és una funció que pren diferents expressions segons el valor de l’entrada \\(x\\).

## Exemple

Definim la funció:

\\[
f(x) =
\begin{cases}
x + 2 & \text{si } x < -1 \\\\
x^2 & \text{si } -1 \leq x < 2 \\\\
4 - x & \text{si } x \geq 2
\end{cases}
\\]

<div id="jxgbox-piecwise" class="jxgbox" style="width:500px; height:300px; margin: 0 auto;"></div>
<script>
  const board = JXG.JSXGraph.initBoard('jxgbox-piecwise', {
    boundingbox: [-5, 5, 5, -2],
    axis: true,
    showNavigation: true,
    showCopyright: false
  });
  // f(x) = x + 2, per x < -1
  board.create('functiongraph', [
    function (x) { return x + 2; },
    -5, -1
  ], {
    strokeColor: 'blue'
  });
  // f(x) = x^2, per -1 <= x < 2
  board.create('functiongraph', [
    function (x) { return x * x; },
    -1, 2
  ], {
    strokeColor: 'green'
  });
  // f(x) = 4 - x, per x >= 2
  board.create('functiongraph', [
    function (x) { return 4 - x; },
    2, 5
  ], {
    strokeColor: 'orange'
  });
  // Cercles buits i plens per marcar continuïtat
  board.create('point', [-1, 1], {face: 'o', size: 3, fixed: true, color: 'blue'});  // punt obert
  board.create('point', [-1, 1], {size: 1, fixed: true, color: 'green'});  // ajuda pel segment
  board.create('point', [2, 4], {face: 'o', size: 3, fixed: true, strokeColor: 'green', fillColor: 'white'});  // punt obert
  board.create('point', [2, 2], {size: 3, fixed: true, color: 'orange'});  // punt tancat
</script>


### Domini:

La funció està definida per a **tots els valors de** \\(x\\), ja que cada cas cobreix una part del conjunt dels reals i no hi ha cap discontinuïtat de definició.

\\[
\text{Domini} = \mathbb{R}
\\]

---

# Continuïtat d'una funció a trossos

Per estudiar si una **funció definida a trossos** és contínua, seguirem dos passos:

## 1. Estudiar la continuïtat de cada tros per separat

Cada expressió de la funció ha de ser **contínua** dins del seu interval de definició. La majoria de funcions habituals ho són (polinòmiques, exponencials, logarítmiques, etc.), sempre que no tinguin punts problemàtics com divisions per zero o arrels parells de nombres negatius.

Per exemple, si tenim:

\\[
f(x) =
\begin{cases}
x^2 & \text{si } x < 1 \\\\
3x + 1 & \text{si } x \geq 1
\end{cases}
\\]

La funció \\(x^2\\) és contínua per a tots els reals. També ho és \\(3x + 1\\). Però això **no garanteix** que \\(f(x)\\) sigui contínua en tot \\( \mathbb{R} \\).


## 2. Estudiar les fronteres entre els intervals

Els punts més crítics són els **valors on canvia la definició de la funció**, ja que poden aparèixer discontinuïtats. Aquests punts solen coincidir amb els extrems dels intervals.

Per veure si \\(f(x)\\) és **contínua en un punt \\(a\\)** on canvia la definició, cal comprovar que:

\\[\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)\\]

És a dir, que el límit per l'esquerra del punt frontera sigui igual al límit per la dreta del punt frontera i també sigui igual al valor de la funció en aquest punt.

---

### Exemple

\\[
f(x) =
\begin{cases}
x^2 & \text{si } x < 2 \\\\
4x - 4 & \text{si } x \geq 2
\end{cases}
\\]

Estudiem la **continuïtat en \\(x = 2\\)**:

- Límits laterals:
  - \\( \lim_{x \to 2^-} x^2 = 4 \\)
  - \\( \lim_{x \to 2^+} (4x - 4) = 4 \\)
- Valor de la funció: \\( f(2) = 4 \Rightarrow \text{(està definit)} \\)

Com que coincideixen els límits i el valor, podem afirmar que **\\(f(x)\\) és contínua en \\(x = 2\\)**.

<div id="jxg-discontinua" class="jxgbox" style="width: 500px; height: 300px; margin: auto;"></div>
<script type="text/javascript">
  const board1 = JXG.JSXGraph.initBoard('jxg-discontinua', {
    boundingbox: [-1, 10, 5, -2],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    pan: { enabled: true, needTwoFingers: false }
  });
  // Primer tros: f(x) = x^2, per a x < 2
  board1.create('functiongraph', [
    function(x) { return x*x; },
    -1, 2
  ], {strokeColor: 'blue'});
  // Punt buit (x = 2, y = 4), no definit al primer tros
  board1.create('point', [2, 4], {
    face: 'o',
    fillColor: 'white',
    strokeColor: 'blue',
    fixed: true,
    name: ''
  });
  // Segon tros: f(x) = x + 1, per a x ≥ 2
  board1.create('functiongraph', [
    function(x) { return 4*x-4; },
    2, 5
  ], {strokeColor: 'red'});
  // Punt tancat (x = 2, y = 3), valor real del segon tros
  board1.create('point', [2, 4], {
    size: 1,
    face: 'o',
    fillColor: 'red',
    strokeColor: 'red',
    fixed: true,
    name: ''
  });
</script>
