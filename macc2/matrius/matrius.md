---
marp: true
theme: gaia
_class: lead
paginate: true
title: Matrius
author: Carlos García Rodríguez
date: 2025-08-25
lang: ca
---

# Matrius

---

# 1. Què és una matriu?

- Una **matriu** és un conjunt d'elements disposats en **files** i **columnes**.
- Diem que una matriu és d'ordre (o dimensió) $m\times n$ si té $m$ files i $n$ columnes. Podem escriure també $(m,n)$.
- Normalment la representem amb una lletra majúscula i els seus elements amb la mateixa lletra minúscula i amb dos subíndexs, el primer indica la fila i el segon la columna a la qual pertany l'element.

---

- Es representa com:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & ... & a_{1n}\\
a_{21} & a_{22} & ... & a_{2n}\\
... & ... & ... & ... \\
a_{m1} & a_{m2} & ... & a_{mn}
\end{pmatrix}
$$

- $a_{ij}$ = element de la fila $i$ i columna $j$.

---

Exemples

---

# 2. Tipus de matrius

- **Quadrada**: Són matrius d'ordre $n\times n$, és a dir que tenen el mateix nombre de files que de columnes. Podem dir matriu quadrada d'ordre $n$.
- **Fila**: Són matrius que només tenen una fila, o sigui, són de dimensió $1\cdot n$
- **Columna**: Són matrius que només tenen una columna, o sigui, són de dimensió $m\cdot 1$

---

- **Matriu triangular** (superior o inferior): Són matrius quadrades en les quals tots els element situats per sota o per sobre de la diagonal són 0.
- **Diagonal**: Matriu quadrada en la qual tots les elements situats a fora de la diagonal són 0
- **Identitat**: Matriu diagonal en la qual tots els elements de la diagonal són 1. Se simbolitza per I.
- Matriu nul·la o matriu zero: Tots els seus elements són 0.

---

- **Matriu transposada**: La matriu transposada $A^t$ d'una matriu $A$ és la que s'obté intercanviant les seves files per les seves columnes. Si la matriu A és d'ordre $(n,k)$, la matriu transposada $A^t$ és d'ordre $(k,n)$

- **Matriu simètrica**: Una matriu A diem que és simètrica si és igual a la seva transposada. A és simètrica si $A = A^t$

- **Matriu esglaonada**: Matriu en què tots els element per sota de la "diagonal" són 0 (posem "diagonal" ja que només es pot parlar de diagonal en matrius quadrades però en aquest ho fem extensiu a matrius no quadrades).

---

# 3. Operacions bàsiques

## Suma de matrius

\[
A + B = \begin{pmatrix}a & b\\ c & d\end{pmatrix} + \begin{pmatrix}e & f\\ g & h\end{pmatrix} = \begin{pmatrix}a+e & b+f\\ c+g & d+h\end{pmatrix}
\]

## Producte per un escalar

\[
k \cdot A = k \cdot \begin{pmatrix}a & b\\ c & d\end{pmatrix} = \begin{pmatrix}ka & kb\\ kc & kd\end{pmatrix}
\]

---

# 4. Producte de matrius

\[
A \cdot B = C
\]

- Es pot multiplicar **només si el nombre de columnes de A = nombre de files de B**.
- Element \(c\_{ij}\) = suma del producte dels elements de la fila i de A per la columna j de B:

\[
c*{ij} = a*{i1}b*{1j} + a*{i2}b\_{2j} + \dots
\]

---

# 5. Matriu identitat

- La matriu identitat \(I_n\) és quadrada i té **1 a la diagonal principal i 0 a la resta**:

\[
I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}
\]

- Propietat: \(A \cdot I = I \cdot A = A\)

---

# 6. Determinant (només per matrius quadrades)

\[
\text{det}\begin{pmatrix}a & b\\ c & d\end{pmatrix} = ad - bc
\]

- S’utilitza per saber si una matriu és **invertible**.

---

# 7. Matriu inversa

- Una matriu quadrada \(A\) és **invertible** si existeix \(A^{-1}\) tal que:

\[
A \cdot A^{-1} = I
\]

- Per \(2\times 2\):

\[
A^{-1} = \frac{1}{ad - bc} \begin{pmatrix}d & -b\\ -c & a\end{pmatrix}, \quad ad-bc \neq 0
\]

---

# 8. Aplicacions pràctiques

- Economia: sistemes d’equacions per pressupostos.
- Sociologia: anàlisi de relacions entre grups.
- Estadística: covariances, transformacions lineals.

---

# 9. Exemple

\[
A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix},\quad B = \begin{pmatrix}2 & 0\\ 1 & 3\end{pmatrix}
\]

- \(A + B = \begin{pmatrix}3 & 2\\ 4 & 7\end{pmatrix}\)
- \(A \cdot B = \begin{pmatrix}4 & 6\\ 10 & 12\end{pmatrix}\)

---
