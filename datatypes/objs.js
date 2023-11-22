function updateBrand(obj) {
    // Mutating the object is visible outside the function
    obj_1 = obj;
    // Try to reassign the parameter, but this won't affect
    // the variable's value outside the function
    // obj = null;
    return obj_1
  }
  
  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(car.brand); // Honda
  
  // Pass object reference to the function
  updateBrand(car);
  
  // updateBrand mutates car
  console.log(car.brand); // Toyota
  document.getElementById("account_number").innerHTML = updateBrand("Toyota");

  