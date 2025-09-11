import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

let alumnos = [];
let alumnoActual = null;
let claseActual = "";
const CONTRASENYA = "profe123"; // canvia-la per la teva contrasenya

// 🔹 Cargar lista de alumnos de una clase
async function cargarAlumnos(clase) {
  if (!clase) return alert("Selecciona una clase primero");
  alumnos = [];

  const q = query(collection(db, "alumnos"), where("grupo", "==", clase));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((docSnap) => {
    alumnos.push({ id: docSnap.id, ...docSnap.data() });
  });

  mostrarTablaCercanos();

  // Mostrar paneles
  document.getElementById("panelAlumno").classList.remove("hidden");
  document.getElementById("panelAcciones").classList.remove("hidden");
  document.getElementById("panelTabla").classList.remove("hidden");
}

// 🔹 Registrar participación
async function registrar(tipo, resultado) {
  if (!alumnoActual) return alert("Primero elige un alumno");
  const ref = doc(db, "alumnos", alumnoActual.id);

  // Definir la propiedad a actualizar según tipo y resultado
  const prop =
    resultado === "bien"
      ? tipo === "deberes"
        ? "bienDeberes"
        : "bienClase"
      : tipo === "deberes"
      ? "malDeberes"
      : "malClase";

  let nuevoValor = (alumnoActual[prop] || 0) + 1;
  await updateDoc(ref, { [prop]: nuevoValor });
  mostrarEmoji(resultado);
  cargarAlumnos(claseActual);
  document.getElementById("alumno").textContent = "---";
  //alumnoActual = null;
}

// 🔹 Elegir alumno al azar de la clase actual
function elegirAlumno() {
  if (alumnos.length === 0) return alert("No hay alumnos en esta clase");

  // Calcular promedio de la clase (total de todas las categorías)
  const totales = alumnos.map(
    (a) =>
      (a.bienDeberes || 0) +
      (a.malDeberes || 0) +
      (a.bienClase || 0) +
      (a.malClase || 0)
  );
  const promedio = totales.reduce((acc, t) => acc + t, 0) / alumnos.length;

  // Calcular pesos
  const pesos = alumnos.map((a) =>
    Math.max(
      0.1,
      promedio -
        ((a.bienDeberes || 0) +
          (a.malDeberes || 0) +
          (a.bienClase || 0) +
          (a.malClase || 0)) +
        1
    )
  );
  const sumaPesos = pesos.reduce((acc, w) => acc + w, 0);

  // Elegir aleatoriamente usando los pesos
  let r = Math.random() * sumaPesos;
  let idx = 0;
  while (r > pesos[idx]) {
    r -= pesos[idx];
    idx++;
  }

  alumnoActual = alumnos[idx];
  document.getElementById("alumno").textContent = alumnoActual.nombre;
  mostrarTablaCercanos();
}

// 🔹 Mostrar tabla
function mostrarTabla() {
  // Calcular puntuació total segons tipus
  alumnos.forEach((a) => {
    a.puntosTotales =
      (a.bienDeberes || 0) * 3 +
      (a.malDeberes || 0) * -3 +
      (a.bienClase || 0) * 1 +
      (a.malClase || 0) * -1;
  });

  // Ordenar de major a menor puntuació
  alumnos.sort((a, b) => b.puntosTotales - a.puntosTotales);
  const cuerpo = document.getElementById("cuerpoTabla");
  cuerpo.innerHTML = "";
  alumnos.forEach((a) => {
    let fila = `
      <tr class="hover:bg-gray-50">
        <td class="px-4 py-2 font-medium text-gray-700">${a.nombre}</td>
        <td class="px-4 py-2 text-center text-green-600 font-semibold">${
          a.bienDeberes || 0
        }</td>
        <td class="px-4 py-2 text-center text-red-600 font-semibold">${
          a.malDeberes || 0
        }</td>
        <td class="px-4 py-2 text-center text-green-600 font-semibold">${
          a.bienClase || 0
        }</td>
        <td class="px-4 py-2 text-center text-red-600 font-semibold">${
          a.malClase || 0
        }</td>
      </tr>`;
    cuerpo.innerHTML += fila;
  });
}

function mostrarTablaCercanos() {
  if (!alumnoActual) return;

  // Calcular puntuació total segons tipus
  alumnos.forEach((a) => {
    a.puntosTotales =
      (a.bienDeberes || 0) * 3 +
      (a.malDeberes || 0) * -3 +
      (a.bienClase || 0) * 1 +
      (a.malClase || 0) * -1;
  });

  // Ordenar de major a menor puntuació
  alumnos.sort((a, b) => b.puntosTotales - a.puntosTotales);

  const idx = alumnos.findIndex((a) => a.id === alumnoActual.id);
  const inicio = Math.max(0, idx - 2);
  const fin = Math.min(alumnos.length - 1, idx + 2);
  const sublista = alumnos.slice(inicio, fin + 1);
  const cuerpo = document.getElementById("cuerpoTabla");
  cuerpo.innerHTML = "";

  sublista.forEach((a) => {
    const fila = `
      <tr class="${
        a.id === alumnoActual.id ? "bg-yellow-50" : "hover:bg-gray-50"
      }">
        <td class="px-4 py-2 font-medium text-gray-700">${a.nombre}</td>
        <td class="px-4 py-2 text-center text-green-600 font-semibold">${
          a.bienDeberes || 0
        }</td>
        <td class="px-4 py-2 text-center text-red-600 font-semibold">${
          a.malDeberes || 0
        }</td>
        <td class="px-4 py-2 text-center text-green-600 font-semibold">${
          a.bienClase || 0
        }</td>
        <td class="px-4 py-2 text-center text-red-600 font-semibold">${
          a.malClase || 0
        }</td>
      </tr>`;
    cuerpo.innerHTML += fila;
  });
}

// 🔹 Cargar todas las clases disponibles en el selector
async function cargarClases() {
  const snapshot = await getDocs(collection(db, "alumnos"));
  const clases = new Set();
  snapshot.forEach((doc) => {
    clases.add(doc.data().grupo);
  });

  const select = document.getElementById("claseSelect");
  select.innerHTML = `<option value="">-- Selecciona una classe --</option>`;
  clases.forEach((c) => {
    select.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

function mostrarEmoji(resultado) {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const emoji = document.createElement("div");
      emoji.textContent = resultado == "bien" ? "🎉" : "💀";
      emoji.style.position = "absolute";
      emoji.style.fontSize = `${Math.random() * 30 + 20}px`;
      emoji.style.left = `${Math.random() * window.innerWidth}px`;
      emoji.style.top = `${Math.random() * window.innerHeight}px`;
      emoji.style.opacity = 1;
      emoji.style.transition = "all 2s ease-out";

      document.getElementById("emojisFlotantes").appendChild(emoji);

      // Moure i desaparèixer
      setTimeout(() => {
        const deltaX = (Math.random() - 0.5) * 100;
        const deltaY = (Math.random() - 0.5) * 100;
        emoji.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        emoji.style.opacity = 0;
      }, 50);

      // Eliminar després de 2 segons
      setTimeout(() => {
        emoji.remove();
      }, 2000);
    }, i * 25); // aquí cada emoji apareix 50ms després del anterior
  }
}

// 🔹 Eventos
document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("btnCargarClase").addEventListener("click", () => {
    const clase = document.getElementById("claseSelect").value;
    if (!clase) return alert("Selecciona una classe");
    claseActual = clase;
    cargarAlumnos(clase);
  });

  document.getElementById("btnLogin").addEventListener("click", () => {
    const valor = document.getElementById("passwordInput").value.trim();
    if (valor === CONTRASENYA) {
      // Mostrar el contingut principal i amagar el login
      document.getElementById("loginPanel").classList.add("hidden");
      document.getElementById("mainContent").classList.remove("hidden");
    } else {
      document.getElementById("loginError").classList.remove("hidden");
    }
  });

  const inputPassword = document.getElementById("passwordInput");
  const btnLogin = document.getElementById("btnLogin");

  inputPassword.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      btnLogin.click();
    }
  });

  document.getElementById("btnElegir").addEventListener("click", elegirAlumno);
  document
    .getElementById("btnBienDeberes")
    .addEventListener("click", () => registrar("deberes", "bien"));
  document
    .getElementById("btnMalDeberes")
    .addEventListener("click", () => registrar("deberes", "mal"));
  document
    .getElementById("btnBienClase")
    .addEventListener("click", () => registrar("clase", "bien"));
  document
    .getElementById("btnMalClase")
    .addEventListener("click", () => registrar("clase", "mal"));

  /*   document.getElementById("toggleDark").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  }); */

  // Al iniciar, cargar lista de clases
  await cargarClases();
});
