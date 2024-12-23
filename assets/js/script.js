const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("tbody");
const totalTareas = document.querySelector(".totalTareas");
const tareasrealizadas = document.querySelector(".tareasrealizadas");

const labores = [
  { id: 1, name: "Limpiar el baño", realizada: false },
  { id: 2, name: "Hacer la cama", realizada: false },
  { id: 3, name: "Lavar los platos", realizada: false },
  { id: 4, name: "Sacar la basura", realizada: false },
];

const mostrar = () => {
  list.innerHTML = labores
    .map((labor) =>
      `<tr>
        <td>${labor.id}</td>
        <td class="${labor.realizada ? "realizada" : ""}">${labor.name}</td>
        <td>
        <input type='checkbox'
        ${labor.realizada ? "checked" : ""}
        onChange="toggleLabor(${labor.id})">
        </td>
        <td>
        <i class="fa-solid fa-x" onClick='deleteLabor(${labor.id})'></i>
        </td>
      </tr>
      `
    )
    .join("");
  laboresState();
};

btn.addEventListener("click", () => {
  if (input.value === "") return;
  const newId =
    labores.length > 0
      ? Math.max(labores[labores.length - 1].id + 1, labores.length)
      : 1;

  labores.push({
    id: newId,
    name: input.value,
    realizada: false,
  });
  input.value = "";
  mostrar();
});

const laboresState = () => {
  totalTareas.textContent = labores.length;
  tareasrealizadas.textContent = labores.filter((labor) => labor.realizada).length;
};

const deleteLabor = (id) => {
  const index = labores.findIndex((labor) => labor.id === id);
  labores.splice(index, 1);
  console.log(labores);
  mostrar();
};

const toggleLabor = (id) => {
  const labor = labores.find((labor) => labor.id === id);
  if (labor) {
    labor.realizada = !labor.realizada;
    mostrar();
  }
};

mostrar();