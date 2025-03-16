document.getElementById("addData").addEventListener("click", function() {
  // Получаем значения из формы
  const name = document.getElementById("depName").value;
  const manager = document.getElementById("manager").value;
  const phone = document.getElementById("phone").value;
  const employees = document.getElementById("employees").value;
  const address = document.getElementById("address").value;

  // Добавляем департамент
  storage.addDepartment(name, manager, phone, employees, address);
  updateSelect();
  clearForm();
});

document.getElementById("showAll").addEventListener("click", function() {
  renderTemplate(storage.getAllDepartments());
});

document.getElementById("showById").addEventListener("click", function() {
  const id = +document.getElementById("selectId").value; 
  const department = storage.getDepartment(id);
  renderTemplate(department ? [department] : []); 
});

document.getElementById('reset').addEventListener('click', clearForm);

document.getElementById('delete').addEventListener('click', () => {
  const recordId = +document.getElementById("selectId").value; // Приводим к числу
  if (recordId) {
      storage.deleteDepartmentById(recordId); // Удаляем департамент по ID
      updateSelect(); // Обновляем выпадающий список
      alert(`Запись с ID ${recordId} была успешно удалена.`);
  } else {
      alert('Пожалуйста, выберите запись для удаления.');
  }
  clearForm();
});

function updateSelect() {
  const select = document.getElementById("selectId");
  select.innerHTML = "";
  storage.getAllDepartments().forEach(dep => {
      let option = document.createElement("option");
      option.value = dep.number; // Устанавливаем value как номер департамента
      option.textContent = dep.number; // Отображаем номер департамента
      select.appendChild(option);
  });
}

function renderTemplate(data) {
  const templateScript = document.getElementById("departmentTemplate").innerHTML;
  const template = Handlebars.compile(templateScript);
  document.getElementById("output").innerHTML = template({ departments: data });
}

function clearForm() {
  document.querySelectorAll('.departmentForm .input').forEach(input => input.value = '');
}