let lista = [];

function agregar() {
  let tarea = document.getElementById("tarea").value;
  lista.push(tarea);
  document.getElementById("tarea").value = ""; //limpiar el input
  actualizar();
}
function actualizar() {
  const lista_tareas = document.getElementById("lista_tareas");
  lista_tareas.innerHTML = "";
  lista.forEach((tarea, index) => {
    const tareaDiv = document.createElement("div"); //crea un div
    tareaDiv.innerHTML = `
      <span>${tarea} </span>
      <button type="button" class="trash1" onclick="eliminar(${index})">
        <i class="bi bi-trash3"></i>
      </button>
    `;
    lista_tareas.appendChild(tareaDiv);
  });
}
function eliminar(index) {
  lista.splice(index, 1);
  actualizar();
}
