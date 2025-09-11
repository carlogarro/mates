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

# Més sobre les variables

## Objectius

- Utilitzar variables en diferents contextos
- Conèixer els tipus de dades que es poden emmagatzemar
- Entendre la diferència entre cadenes, enters i nombres decimals

---

## Creació d'una variable

- Serveixen per **emmagatzemar informació** que es farà servir més endavant
- Es creen amb la sintaxi:

```python
variable_name = ...
```

Exemple amb input

```python
name = input("What is your name? ")
print("Hi, " + name)
```

---

## Definir variables amb valors fixos

```python
given_name = "Paul"
family_name = "Python"

name = given_name + " " + family_name
print(name)
```

Aquest mètode s’anomena _hard-coding_: els valors no canvien.

---

## Canviar el valor d’una variable

```python
word = input("Please type in a word: ")
print(word)

word = input("And another word: ")
print(word)

word = "third"
print(word)
```

Cada nova assignació substitueix l’anterior.

---

## Valor nou a partir de l’antic

```python
word = input("Please type in a word: ")
print(word)

word = word + "!!!"
print(word)
```

---

### Bones pràctiques en noms de variables

- Escollir noms descriptius (`word`, `age`, `email`)

- Han de començar amb una lletra i poden contenir lletres, números i guions baixos `_`

- `name`, `Name` i `NAME` són variables diferents

- A Python, per convenció, es fan servir minúscules i separació de paraules amb `_`. Per exemple `nom_persona`.

---

## Tipus de dades: enters

```python
age = 24
print(age)
```

Sense cometes és un enter, amb cometes un string.

### Diferència de tipus

```python
number1 = 100
number2 = "100"

print(number1 + number1)   # suma d'enters (integers)
print(number2 + number2)   # concatenació de text (strings)
```

---

## Errors amb tipus diferents

```python
number = "100"
print(number / 2)
```

```python
result = 10 * 25
print("The result is " + result)
```

```text
TypeError: unsupported operand type(s) for /: 'str' and 'int'
```

---

## Solucions

- Amb `str()`:

```python
result = 10 * 25
print("The result is " + str(result))
```

- Amb comes:

```python
result = 10 * 25
print("The result is", result)
```

---

## Imprimir amb f-strings

```python
result = 10 * 25
print(f"The result is {result}")
```

```python
name = "Mark"
age = 37
city = "Palo Alto"

print(f"Hi {name}, you are {age} years old. You live in {city}.")
```

<div class="exercici-classe">
  Extra space
</div>

---

## Tipus de dades: floats (decimals)

```python
number1 = 2.5
number2 = -1.25
number3 = 3.62

mean = (number1 + number2 + number3) / 3
print(f"Mean: {mean}")
```

<div class="exercici-classe">
  Arithmetics

Fix the code: Print a single line

</div>
