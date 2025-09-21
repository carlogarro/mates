---
marp: true
theme: gaia
_class: lead
paginate: true
title: Sentències condicionals en Python
author: Curs Python 2025
date: 2025-08-26
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

# Expressions condicionals

## Objectius

- Aprendre a usar **sentències condicionals** amb `if`
- Entendre què és un **valor booleà**
- Utilitzar **operadors de comparació** per crear condicions

---

# Execució condicional de codi

Els programes no sempre executen totes les línies; només s’executa el bloc si la **condició és certa**:

```python
edat = int(input("Quants anys tens? "))

if edat >= 18:
    print("Ets major d'edat!")
    print("Pots entrar.")

print("Següent client, si us plau.")
```

---

## Error habitual

```python
edat = 10
if edat >= 18
    print("Ets major d'edat!")
```

```
File "program.py", line 3
  if age > 17
            ^
SyntaxError: invalid syntax
```

---

## Operadors de comparació

| Operador | Condició                 |
| -------- | ------------------------ |
| `==`     | Igual a (`a == b`)       |
| `!=`     | Diferent de (`a != b`)   |
| `>`      | Major que (`a > b`)      |
| `>=`     | Major o igual (`a >= b`) |
| `<`      | Menor que (`a < b`)      |
| `<=`     | Menor o igual (`a <= b`) |

---

Exemple: nombre negatiu, positiu o zero

```python
nombre = int(input("Escriu un nombre: "))

if nombre < 0:
    print("El nombre és negatiu.")
if nombre > 0:
    print("El nombre és positiu.")
if nombre == 0:
    print("El nombre és zero.")
```

---

# Importància de la indentació

Python identifica el bloc condicional a través de la [identació](https://ca.wikipedia.org/wiki/Sagnat) uniforme:

```python
password = input("Escriu la contrasenya: ")

if password == "gatet":
    print("Has encertat la contrasenya!")
    print("Benvingut, usuari!")

print("El programa ha acabat. Gràcies i adéu!")
```

---

Les línies dins de l’`ìf` han d’estar indentades de la mateixa manera, amb espais o tabulacions.

![](https://programming-24.mooc.fi/static/43a34a2e4b0bc023009954d6f7809f7c/27c24/1_5_keyboard.webp)

---

<div class="exercici-classe">
Orwell

Absolute value

Soup or no soup

Order of magnitude

</div>

---

## Tipus Boolean i expressions condicionals

Una expressió Booleana retorna True o False (només aquests dos valors possibles).

Exemple:

```python
a = 3
condicio = a < 5
print(condicio)  # True
if condicio:
    print("a és menor que 5")
```

---

També es pot usar directament:

```python
condition = True
if condition:
    print("Això s'imprimeix sempre.")
```

---

<div class="exercici-classe">
Calculator

Temperatures

Daily wages

Solving a quadratic equation

</div>

---

<div class="exercici-casa">
Loyalty bonus

What to wear tomorrow

</div>
