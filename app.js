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

// 🔹 Cargar lista de alumnos de una clase
async function cargarAlumnos(clase) {
  if (!clase) return alert("Selecciona una clase primero");
  alumnos = [];

  const q = query(collection(db, "alumnos"), where("grupo", "==", clase));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((docSnap) => {
    alumnos.push({ id: docSnap.id, ...docSnap.data() });
  });

  mostrarTabla();

  // Mostrar paneles
  document.getElementById("panelAlumno").classList.remove("hidden");
  document.getElementById("panelAcciones").classList.remove("hidden");
  document.getElementById("panelTabla").classList.remove("hidden");
}

// 🔹 Registrar participación
async function registrar(resultado) {
  if (!alumnoActual) return alert("Primero elige un alumno");
  const ref = doc(db, "alumnos", alumnoActual.id);
  let nuevoValor = alumnoActual[resultado] + 1;
  await updateDoc(ref, { [resultado]: nuevoValor });
  cargarAlumnos(claseActual);
  document.getElementById("alumno").textContent = "---";
  alumnoActual = null;
}

// 🔹 Elegir alumno al azar de la clase actual
function elegirAlumno() {
  if (alumnos.length === 0) return alert("No hay alumnos en esta clase");

  // Calcular promedio de la clase
  const totales = alumnos.map((a) => a.bien + a.mal);
  const promedio = totales.reduce((acc, t) => acc + t, 0) / alumnos.length;

  // Calcular pesos
  const pesos = alumnos.map((a) =>
    Math.max(0.1, promedio - (a.bien + a.mal) + 1)
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
}

// 🔹 Mostrar tabla
function mostrarTabla() {
  const cuerpo = document.getElementById("cuerpoTabla");
  cuerpo.innerHTML = "";
  alumnos.forEach((a) => {
    let fila = `
      <tr class="hover:bg-gray-50">
        <td class="px-4 py-2 font-medium text-gray-700">${a.nombre}</td>
        <td class="px-4 py-2 text-gray-600">${a.grupo}</td>
        <td class="px-4 py-2 text-center text-green-600 font-semibold">${a.bien}</td>
        <td class="px-4 py-2 text-center text-red-600 font-semibold">${a.mal}</td>
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
  select.innerHTML = `<option value="">-- Selecciona una clase --</option>`;
  clases.forEach((c) => {
    select.innerHTML += `<option value="${c}">${c}</option>`;
  });
}

// 🔹 Eventos
document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("btnCargarClase").addEventListener("click", () => {
    const clase = document.getElementById("claseSelect").value;
    if (!clase) return alert("Selecciona una clase");
    claseActual = clase;
    cargarAlumnos(clase);
  });

  document.getElementById("btnElegir").addEventListener("click", elegirAlumno);
  document
    .getElementById("btnBien")
    .addEventListener("click", () => registrar("bien"));
  document
    .getElementById("btnMal")
    .addEventListener("click", () => registrar("mal"));

  // Al iniciar, cargar lista de clases
  await cargarClases();
});
