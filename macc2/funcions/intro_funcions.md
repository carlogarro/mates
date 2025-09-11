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

# Trimestre 1: Funcions

---

# Introducció

Una **funció** és una relació entre dues magnituds, on a **cada valor d’entrada** (anomenat $x$, o **variable independent**) li correspon **un únic valor de sortida** (anomenat $y$, o **variable dependent**).

Dit d’una altra manera, una funció és una regla que assigna a cada valor d’un conjunt (el **domini**) un únic valor d’un altre conjunt (el **codomini**).

---

<div style="text-align:center">
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Codomain2.SVG" alt="Funció com una màquina" width="400"/>
</div>

Il·lustració que mostra $f$, una funció amb domini $X$ i codomini $Y$. L’oval petit dins de $Y$ és la imatge de $f$, de vegades anomenada rang de $f$.

---

## Per a què serveixen?

Les funcions són una eina fonamental per a descriure situacions del món real. Alguns exemples habituals:

- **Economia**: El benefici d’una empresa en funció del nombre de productes venuts.
- **Demografia**: L’evolució de la població d’un país amb el pas dels anys.
- **Màrqueting**: La relació entre el pressupost publicitari i les vendes.
- **Estadística**: Relació entre dues variables d’un estudi.

---

## Exemples senzills

### 1. Preu total d’un producte

Si un producte val 3 €, el preu total segons la quantitat comprada és:

$$
\text{Preu}(x) = 3 \cdot x
$$

On $x$ és el nombre d’unitats.

### 2. Àrea d’un quadrat

Si volem saber l’àrea d’un quadrat en funció del costat:

$$
A(x) = x^2
$$

---

### 3. Funció amb restricció (a trossos)

Suposem que una empresa cobra 10 € per hora, però només treballa un màxim de 8 hores al dia. Podem definir la funció:

$$
f(x) =
\begin{cases}
10\cdot x & \text{si } 0 \le x \le 8 \\\\
\text{no definida} & \text{si } x > 8
\end{cases}
$$

---

## Què estudiarem sobre les funcions?

- El seu **domini** i la seva **imatge**.
- Tipus de funcions: **polinòmiques, racionals, exponencials, logarítmiques** i amb **arrels**.
- Les seves propietats: continuïtat, creixement, derivabilitat...
- La seva aplicació per **resoldre problemes reals**.

---

# Esquema d’anàlisi de funcions

Quan estudiem una funció, seguirem sempre aquest ordre de punts:

1. **Domini**

   - On està definida la funció.
   - Restriccions habituals (denominadors $≠ 0$, logaritmes > 0, etc.).

2. **Continuïtat**
   - Comprovem si la funció és contínua al seu domini.
   - Identifiquem possibles discontinuïtats (de salt, infinita, evitable).

---

3. **Límits**

   - En l’infinit $x → ±∞$.
   - En punts conflictius (per exemple, prop de denominadors nuls).

4. **Assimptotes**

   - Vertical ($x = a$).
   - Horitzontal ($y = b$).

5. **Talls amb els eixos**
   - Tall amb l’eix $X$: $f(x)=0$.
   - Tall amb l’eix $Y$: $f(0)$, si està definit.

---

6. **Derivades**

   - Intervals de creixement i decreixement, màxims, mínims i punts d'inflexió.

7. **Inequacions**
   - Resolució d’inequacions amb ajuda de la gràfica o de la factorizació.
