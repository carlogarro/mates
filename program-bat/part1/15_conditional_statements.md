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

#  Sentències condicionals en Python

## Objectius
- Aprendre a usar **sentències condicionals** amb `if`
- Entendre què és un **valor booleà**
- Utilitzar **operadors de comparació** per crear condicions  

---

#  Execució condicional de codi

Els programes no sempre executen totes les línies; només s’executa el bloc si la **condició és certa**:

```python
age = int(input("Quants anys tens? "))

if age > 17:
    print("Ets major d'edat!")
    print("Et regalo una còpia de GTA6.")

print("Següent client, si us plau.")
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
number = int(input("Escriu un nombre: "))

if number < 0:
    print("El nombre és negatiu.")
if number > 0:
    print("El nombre és positiu.")
if number == 0:
    print("El nombre és zero.")
```

Entrades possibles:

15 → El nombre és positiu.
-18 → El nombre és negatiu.
0 → El nombre és zero.

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

Les línies dins de l’`ìf` han d’estar indentades de la mateixa manera, amb espais o tabulacions.

---

## Tipus Boolean i expressions condicionals

Una expressió Booleana retorna True o False (només aquests dos valors possibles).

Exemple:

```python
a = 3
condition = a < 5
print(condition)  # True
if condition:
    print("a és menor que 5")
```

També es pot usar directament:

```
condition = True
if condition:
    print("Això s'imprimeix sempre.")
```

---

## Resum de la secció

Les condicions permeten controlar quines parts del codi s’executen.

Els operadors de comparació determinen la lògica de la condició.

La indentació és fonamental perquè Python reconegui els blocs.

Les expressions condicionals retornen valors Booleans (True / False).