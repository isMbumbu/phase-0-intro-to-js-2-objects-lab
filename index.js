// Write your solution in this file!
let employee={
    name:'Drew',
    streetAddress:"11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]: value 
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key]=value;
   return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; // Destructure to exclude the key
    return newEmployee; // Return the new object without the specified key
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutate the original employee object by deleting the key
    return employee; // Optionally return the modified object
}