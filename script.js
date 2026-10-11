const studentForm = document.getElementById("studentForm");
const namesInput = document.getElementById("names");
const surnamesInput = document.getElementById("surnames");
const dniInput = document.getElementById("dni");
const message = document.getElementById("message");
const studentList = document.getElementById("studentList");
const emptyMessage = document.getElementById("emptyMessage");

const students = [];

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const names = namesInput.value.trim();
  const surnames = surnamesInput.value.trim();
  const dni = dniInput.value.trim();

  // Validación que corrige la incidencia INC-001.
  if (!names || !surnames || !dni) {
    showMessage("Complete todos los campos obligatorios.", "error");
    return;
  }

  if (!/^\d{8}$/.test(dni)) {
    showMessage("El DNI debe contener exactamente 8 números.", "error");
    dniInput.focus();
    return;
  }

  if (students.some(student => student.dni === dni)) {
    showMessage("Ya existe un estudiante registrado con ese DNI.", "error");
    dniInput.focus();
    return;
  }

  students.push({ names, surnames, dni });
  renderStudents();
  studentForm.reset();
  showMessage("Estudiante registrado correctamente.", "success");
});

function renderStudents() {
  studentList.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");
    [String(index + 1), student.names, student.surnames, student.dni].forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    studentList.appendChild(row);
  });

  emptyMessage.hidden = students.length > 0;
}

function showMessage(text, type) {
  message.textContent = text;
  message.className = type;
}
