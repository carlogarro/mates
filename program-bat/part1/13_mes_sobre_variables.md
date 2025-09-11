---
marp: true
theme: gaia
_class: lead
paginate: true
title: Més sobre les variables
author: Curs Python 2024
date: 2025-08-25
lang: ca
---

# Més sobre les variables

## Objectius
- Utilitzar variables en diferents contextos
- Conèixer els tipus de dades que es poden emmagatzemar
- Entendre la diferència entre cadenes, enters i nombres decimals

---

## Creació d'una variable

```python
nom = "Joan"
edat = 30
```
Assignem un valor a una variable amb el signe `=`
El valor pot ser una cadena de text, un número enter, etc.

---

## Canviant el valor d'una variable

```python
paraula = input("Escriu una paraula: ")
print(paraula)

paraula = input("Ara una altra paraula: ")
print(paraula)

paraula = "tercera"
print(paraula)
```

El valor d'una variable pot canviar al llarg de l'execució del programa.
Cada nova assignació substitueix el valor anterior.

---
## Concatenació de cadenes

```python
paraula = input("Escriu una paraula: ")
print(paraula)

paraula = paraula + "!!!"
print(paraula)
```

Podem modificar el valor d'una variable combinant-lo amb altres cadenes.
En aquest cas, afegim tres signes d'exclamació al final de la paraula.

---

## Noms de variables

Els noms de les variables han de començar amb una lletra o un guió baix.
Poden contenir lletres, números i guions baixos.
És recomanable utilitzar noms descriptius i en minúscules.

---

## Tipus de dades

Cadenes (strings): Seqüències de caràcters

```python
nom = "Joan"
```

Nombres enters (integers): Nombres sense decimals

```python
edat = 15
```

Nombres decimals (floats): Nombres amb decimals

```python
alçada = 1.75
```

---

## Diferències entre tipus de dades

```python
nombre1 = 100
nombre2 = "100"

print(nombre1)
print(nombre2)
```

Sense cometes: el valor és un número enter
Amb cometes: el valor és una cadena de text

---

## Bones pràctiques

Utilitzar noms de variables clars i descriptius
Evitar utilitzar noms reservats per Python (com print, input, etc.)
Mantenir la coherència en l'estil de codificació