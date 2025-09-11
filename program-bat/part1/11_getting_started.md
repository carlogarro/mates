---
marp: true
theme: gaia
_class: lead
paginate: true
title: Primeres passes amb Python
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
</style>

# Primeres passes amb Python

## Objectius

- Preparar el teu equip per programar.
- Escriure i executar el teu primer programa en Python
- Aprendre a utilitzar la comanda `print()`
- Realitzar operacions aritmètiques bàsiques

---

## Com obrir el terminal i usar Python

- A **macOS**: Ja ve instal·lat per defecte. Obre l’app **Terminal** (la trobaràs a Aplicacions → Altres).
- A **Linux**: Ja ve instal·lat per defecte. Busca **Terminal** al menú d’aplicacions. També serveix el _shortcut_ `Ctrl + Alt + T`
- A **Windows**: Per instal·lar-ho, entra a la [Microsoft Store](https://apps.microsoft.com) i busca _python_. Mira el següent tutorial: https://www.youtube.com/watch?v=V51Uj4Vl9zA
- A **Chromebook**: Aquests portàtils tenen recursos limitats. Per ara, feu servir https://www.online-python.com/

---

## Comprovar Python

Escriu al terminal (macOS i Linux):

```bash
python3 --version
```

Si mostra una versió (per exemple Python 3.11.6), ja el tens instal·lat Si no, cal instal·lar-lo des de [python.org](python.org).

Si l'has instal·lat a Windows, només és necessari buscar-lo entre els programes instal·lats i obrir-lo com un programa qualsevol. També pots obrir la terminal buscand _PowerShell_.

---

## Executar Python directament

Al terminal pots escriure:

```bash
python3
```

Apareix la consola interactiva de Python on pots provar càlculs senzills:

```bash
>>> 2 + 3
5
>>> print("Hola!")
Hola!
```

---

## Limitacions del terminal

Només serveix per fer proves ràpides o codi curt

Per això, normalment farem servir [Visual Studio Code](https://code.visualstudio.com/)

- Editor modern i intuïtiu
- Permet gestionar fitxers i projectes grans
- Es pot ampliar amb extensions
- Funciona igual en Windows, Mac i Linux

El terminal és útil per començar i entendre Python, però Visual Studio Code ens ajudarà a créixer com a programadors/es.

---

## Comanda `print()`

```python
print("Hola!")
```

Mostra text a la pantalla
El text ha d'anar entre cometes
Sense cometes, es produeix un error

Prova el següent

```python
print(Hola!)
```

---

Anem a la pàgina del [curs](https://programming-24.mooc.fi/) de la Universitat de Hèlsinki. Si no us heu enregistrat encara, seguiu les [instruccions](https://educaciodigital.cat/ies-viladegracia/moodle/mod/page/view.php?id=352247) del Moodle.

Resoldrem els següents problemes a classe.

<div class="exercici-classe">
  Emoticon
  
  Fix the code: Seven Brothers
</div>

---

## Múltiples comandes

```python
print("Benvingut al curs de Programació!")
print("Practiquem la comanda print.")
print("Aquest programa mostra tres línies de text.")
```

Les comandes s'executen en ordre descendent.
Cada línia es mostra per separat quan usem `print`.

<div class="exercici-casa">
  Row, Row, Row Your Boat
</div>

---

## Operacions aritmètiques

```python
print(2 + 5)
print(3 * 3)
print(2 + 2 * 10)
```

Es poden realitzar càlculs dins de `print()`
El resultat de l'operació es mostra a la pantalla

<div class="exercici-classe">
  Minutes in a year
  
  Print some code
</div>

---

## Diferència entre text i operacions

```python
print(2 + 2 * 10)
print("2 + 2 * 10")
```

Sense cometes: s'executa l'operació
Amb cometes: es mostra el text literal

---

## Comentaris en el codi

```python
print("Hores en un any:")
# hi ha 365 dies en un any i 24 hores en cada dia
print(365 * 24)
```

Els comentaris comencen amb `#`
Són ignorats per Python. Per tant, no s'executen.
S'utilitzen per explicar el codi
