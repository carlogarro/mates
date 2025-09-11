---
marp: true
theme: gaia
_class: lead
paginate: true
title: Interacció amb l'usuari en Python
author: Curs Python 25
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

# Interacció amb l'usuari en Python

## Objectius

- Aprendre a obtenir **entrada de l'usuari** amb `input()`
- Emmagatzemar dades en **variables**
- Concatenar **cadenes de text** amb variables

---

## Entrada de dades amb input()

```python
nom = input("Quin és el teu nom? ")
print("Hola, " + nom)
```

`input()` demana dades a l'usuari.
El valor retornat es pot guardar a una variable.
Mostrem un missatge combinant text i variable.

<div class="exercici-classe">
Name twice
</div>

---

## Emmagatzematge en variables

```python
correu = input("Quin és el teu correu electrònic? ")
pseudonim = input("Quin és el teu pseudònim? ")
```

Cada nova entrada pot ser assignada a variables diferents
Les variables permeten reutilitzar i manipular la informació

---

## Concatenació de cadenes

```python
print("El teu nom és " + nom + " i el teu pseudònim és " + pseudonim)
```

L'operador suma `+` combina textos i variables
Mostra informació de manera llegible i personalitzada

---

## Exemple complet

```python
nom = input("Quin és el teu nom? ")
correu = input("Quin és el teu correu electrònic? ")
pseudonim = input("Quin és el teu pseudònim? ")
```

```python
print("Comprovem que tenim la informació correcta:")
print("El teu nom: " + nom)
print("El teu correu electrònic: " + correu)
print("El teu pseudònim: " + pseudonim)
```

---

## Notes importants

Cada crida a `input()` pot guardar el valor en una variable

- Serveix per concatenar cadenes i variables
- És recomanable utilitzar noms descriptius per a les variables
