const studentForm = document.getElementById("studentForm");
const namesInput = document.getElementById("names");
const surnamesInput = document.getElementById("surnames");
const dniInput = document.getElementById("dni");
const message = document.getElementById("message");
const studentList = document.getElementById("studentList");
const emptyMessage = document.getElementById("emptyMessage");

const students = [];

// Restricción en tiempo real para que el DNI solo acepte números y máx 8 dígitos
dniInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "").slice(0, 8);
});

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const names = namesInput.value.trim();
  const surnames = surnamesInput.value.trim();
  const dni = dniInput.value.trim();

  // Validación de campos vacíos
  if (!names || !surnames || !dni) {
    showMessage("Complete todos los campos obligatorios.", "error");
    return;
  }

  // Validación estricta de 8 dígitos para solucionar la incidencia INC-001
  if (!/^\d{8}$/.test(dni)) {
    showMessage("El DNI es obligatorio y debe contener exactamente 8 números.", "error");
    dniInput.focus();
    return;
  }

  // Validación de DNI duplicado
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