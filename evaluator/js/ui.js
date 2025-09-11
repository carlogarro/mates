// ui.js
let cuerpoTabla = document.getElementById("cuerpoTabla");
let divAlumno = document.getElementById("alumno");

// Mostrar alumno actual en la tarjeta
export function mostrarAlumno(nombre) {
  divAlumno.textContent = nombre;
  divAlumno.className = "";
}

// Actualizar tabla de resultados
export function actualizarTabla() {
  cuerpoTabla.innerHTML = "";
  import("./students.js").then(({ alumnos }) => {
    alumnos.forEach((a) => {
      let fila = `<tr>
        <td>${a.nombre}</td>
        <td>${a.bien || 0}</td>
        <td>${a.mal || 0}</td>
      </tr>`;
      cuerpoTabla.innerHTML += fila;
    });
  });
}

// Animación al marcar
export function marcarUI(resultado) {
  divAlumno.className = resultado === "bien" ? "correct" : "incorrect";
  setTimeout(() => (divAlumno.className = ""), 500);
}
