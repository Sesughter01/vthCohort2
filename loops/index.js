// create a loop that runs from 1 to 15

// var text = "";
    
    // for (let i = 1; i < 16; i++) {
      // text += " " + i + "<br>";
    // }
    // document.getElementById("demo").innerHTML = text;
    // create an array with 3 element
      const cars = ["BMW", "Volvo", "Saab"];
      let i, len, text;
      for (i = 0, len = cars.length, text = ""; i < len; i++) {
      text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;