// Write your solution in this file!

const employee = {
    name: 'Sam', 
    streetAdress: '0 West'
};
console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
};
console.log(newEmployee);


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
console.log(employee);

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {employee};
    newEmployee[key] = value;
    delete newEmployee.key;
    return newEmployee;
};
console.log(newEmployee);

function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
    delete employee.name;
    return employee;
};
console.log(employee);