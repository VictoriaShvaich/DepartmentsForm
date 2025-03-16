class Department {
  constructor(number, name, manager, phone, employees, address) {
    this.number = number;
    this.name = name;
    this.manager = manager;
    this.phone = phone;
    this.employees = employees;
    this.address = address;
}
}

class DepartmentStorage {
constructor() {
    this.departments = new Map();
    this.currentNumber = 1; // Счетчик для уникальных номеров
}

addDepartment(name, manager, phone, employees, address) {
    const department = new Department(this.currentNumber, name, manager, phone, employees, address);
    this.departments.set(this.currentNumber, department);
    this.currentNumber++; // Увеличиваем номер для следующего департамента
}

getDepartment(number) {
    return this.departments.get(number);
}

getAllDepartments() {
    return Array.from(this.departments.values());
}

deleteDepartmentById(number) {
    this.departments.delete(number);
}
}

const storage = new DepartmentStorage();