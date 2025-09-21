---
marp: true
theme: gaia
_class: lead
paginate: true
title: Operacions aritmètiques en Python
author: Curs Python 2024
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

section::after {
  content: attr(data-marpit-pagination) '/' attr(data-marpit-pagination-total);
}

</style>

# Operacions aritmètiques en Python

## Objectius

- Utilitzar variables en operacions aritmètiques
- Gestionar números obtinguts de l'entrada de l'usuari
- Convertir valors a altres tipus de dades fonamentals

---

# Operadors aritmètics bàsics

| Operador | Propòsit        | Exemple    | Resultat |
| -------- | --------------- | ---------- | -------- |
| `+`      | Suma            | `2 + 4`    | `6`      |
| `-`      | Resta           | `10 - 2.5` | `7.5`    |
| `*`      | Multiplicació   | `-2 * 123` | `-246`   |
| `/`      | Divisió (float) | `9 / 2`    | `4.5`    |
| `//`     | Divisió (enter) | `9 // 2`   | `4`      |
| `%`      | Mòdul (residu)  | `9 % 2`    | `1`      |
| `**`     | Potència        | `2 ** 3`   | `8`      |

---

# Ordre d'operacions

L'ordre d'operacions segueix la jerarquia matemàtica:

1. Perèntesis
2. Potència (`**`)
3. Multiplicació i divisió (`*`, `/`, `//`, `%`)
4. Suma i resta (`+`, `-`)

```python
print(2 + 3 * 3)     # Sortida: 11
print((2 + 3) * 3)   # Sortida: 15
```

---

## Operands i tipus de dades

Si tots els operands són enters, el resultat serà un enter.

Si un operand és un nombre decimal (float), el resultat serà un nombre decimal.

_Excepció: la divisió_ `/` _sempre retorna un nombre decimal, fins i tot amb operands enters._

---

## Exemple pràctic: IMC

Calcula l'Índex de Massa Corporal (IMC):

```python
altura = 172.5
pes = 68.55
imc = pes / (altura / 100) ** 2
print(f"L'IMC és {imc}")
```

---

## Entrada de l'usuari i conversió de tipus

Fins ara hem usat `input()` per llegir text de l'usuari.

Per llegir números de l'usuari i realitzar càlculs farem:

```python
any_naixement = int(input("Quin any vas néixer? "))
edat = 2025 - any_naixement
print(f"Tens {edat} anys.")
```

```python
altura = float(input("Quina és la teva altura (cm)? "))
pes = float(input("Quin és el teu pes (kg)? "))
altura = altura / 100
imc = pes / altura ** 2
print(f"L'IMC és {imc}")
```

---

<div class="exercici-classe">
Times five

Name and age

</div>

---

## Reutilitzar una variable

El següent programa calcula la suma de tres nombres donats per l'usuari:

```python
nombre1 = int(input("Primer nombre: "))
nombre2 = int(input("Segon nombre: "))
nombre3 = int(input("Tercer nombre: "))

sum = nombre1 + nombre2 + nombre3
print(f"La suma de tots els nombres: {sum}")
```

Ara estem usant quatre variables diferents, però amb dos seria suficient. **Alguna idea?**

---

Es pot fer servir una sola variable temporal per llegir diferents valors:

```python
suma = 0

nombre = int(input("Primer nombre: "))
suma = suma + nombre

nombre = int(input("Segon nombre: "))
suma = suma + nombre

nombre = int(input("Tercer nombre: "))
suma = suma + nombre

print(f"La suma de tots els nombres: {suma}")
```

---

## Notació abreujada `+=`

```python
suma = 0

nombre = int(input("Primer nombre: "))
suma += nombre

nombre = int(input("Segon nombre: "))
suma += nombre

nombre = int(input("Tercer nombre: "))
suma += nombre

print(f"La suma de tots els nombres: {suma}")
```

---

## Encara més curt

No cal ni variable temporal:

```python
suma = 0
suma += int(input("Primer nombre: "))
suma += int(input("Segon nombre: "))
suma += nuint(input("Tercer nombre: "))

print(f"La suma de tots els nombres: {suma}")
```

---

## Quan calen variables separades?

Depèn del context! Si volem recordar cadascun dels valors, no podem reutilitzar variables:

```python
nombre1 = int(input("Primer nombre: "))
nombre2 = int(input("Segon nombre: "))

print(f"{nombre1} + {nombre2} = {nombre1+nombre2}")
```

---

<div class="exercici-classe">
Seconds in a day

Fix the code: Product

Sum and product

Sum and mean

Food expenditure

Students in groups

</div>
