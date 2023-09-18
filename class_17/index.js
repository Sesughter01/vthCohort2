function myFunction() {
    const message = document.getElementById("p01"); 
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    // this shows that try is used to run a code 
    try {
        // trim removes all leading and trailing white-space characters from the current string.
      if(x.trim() == "") throw "empty";
        // not a number so a command for example: if you put an alphabeth it will show not a number
      if(isNaN(x)) throw "not a number";
      x = Number(x);
    //   even if we put a number < 5 it will stil show too high in the browser 
      if(x < 5) throw "too low";
      if(x < 10) throw "medium";
      if(x > 10) throw "too high";
    }
    // why catch is to handle all errors 
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }
