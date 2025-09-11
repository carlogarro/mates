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

section::after {
  content: attr(data-marpit-pagination) '/' attr(data-marpit-pagination-total);
}

</style>

# Entrada de l’usuari i variables

- Escriure un programa que utilitzi **input** de l’usuari
- Fer servir **variables** per emmagatzemar i mostrar dades
- **Combinar cadenes de text (strings)** amb variables

---

## Què és l’input?

- **Input**: informació que l’usuari dona al programa.
- A Python fem servir la funció `input()`
- Pot mostrar un missatge de **pregunta** i esperar la resposta

```python
name = input("What is your name? ")
print("Hi there, " + name)
```

### Exemple d’execució

```txt
What is your name? Paul
Hi there, Paul
```

---

<div class="exercici-classe">
  Name twice
</div>

---

## Variables

Una variable és un lloc on s’emmagatzema un valor (text, número...).

El valor pot canviar durant l’execució.

El nom de la variable no afecta el contingut, però ha de ser clar i lògic.

```python
name = input("What is your name? ")

print("Hi, " + name + "!")
print(name + " is quite a nice name.")
```

---

## Bones pràctiques amb variables

Escriure-les en anglès (recomanat)

Utilitzar noms significatius: `name`, `email`, `age`.

Evitar noms confusos com `x`, `temp2`, etc. (si no són necessaris)

---

## Concatenació de cadenes

El símbol `+` uneix textos i/o variables.

```python
# Les dues fan el mateix
print("bon" + "dia")
print("bon dia")
```

```python
name = input("What is your name? ")
print("Hi " + name + "! Let me make sure: your name is " + name + "?")
```

<div class="exercici-classe">
  Name and exclamation marks
</div>

---

## Múltiples inputs

```python
name = input("What is your name? ")
email = input("What is your email address? ")
nickname = input("What is your nickname? ")

print("Let's make sure we got this right")
print("Your name: " + name)
print("Your email address: " + email)
print("Your nickname: " + nickname)
```

---

## Sobreescriptura de variables

Si una variable rep un nou input, perd el valor anterior

```python
address = input("What is your address? ")
print("So you live at " + address)
address = input("Please type in a new address: ")
print("Your address is now " + address)
```

<div class="exercici-classe">
Name and address

Fix the code: Utterances

</div>

---

<div class="exercici-casa">
  Story
</div>
