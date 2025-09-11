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

# Operacions aritmètiques en Python

## Objectius
- Utilitzar variables en operacions aritmètiques
- Gestionar números obtinguts de l'entrada de l'usuari
- Convertir valors a altres tipus de dades fonamentals

---

# Operadors aritmètics bàsics

| Operador | Propòsit          | Exemple     | Resultat |
|----------|-------------------|-------------|----------|
| `+`      | Suma              | `2 + 4`     | `6`      |
| `-`      | Resta             | `10 - 2.5`  | `7.5`    |
| `*`      | Multiplicació     | `-2 * 123`  | `-246`   |
| `/`      | Divisió (float)   | `9 / 2`     | `4.5`    |
| `//`     | Divisió (enter)   | `9 // 2`    | `4`      |
| `%`      | Mòdul (residu)             | `9 % 2`     | `1`      |
| `**`     | Potència     | `2 ** 3`    | `8`      |:contentReference[oaicite:7]{index=7}

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

*Excepció: la divisió* `/` *sempre retorna un nombre decimal, fins i tot amb operands enters.*

---

## Exemple pràctic: IMC

Calcula l'Índex de Massa Corporal (IMC):

```python
altura = 172.5
pes = 68.55
imc = pes / (altura / 100) ** 2
print(f"L'IMC és {imc}")
```

Entrada de l'usuari i conversió de tipus
Per llegir números de l'usuari i realitzar càlculs:

```pythob
any_naixement = int(input("Quin any vas néixer? "))
edat = 2025 - any_naixement
print(f"Tens {edat} anys.")
```

---

## Bones pràctiques

Utilitzar parèntesis per a garantir l'ordre desitjat en les operacions.
Convertir l'entrada de l'usuari al tipus de dada adequat abans de realitzar operacions.
Comprovar els resultats per assegurar-se que els càlculs són correctes.