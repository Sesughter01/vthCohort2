function errorMessage() {
    const message = document.querySelector('#errorMsg');
    message.innerHTML = '';
    let inputElement = document.querySelector('#demo').value;

    try {
        // This condition is obeyed if the input contains no value inside
        if(inputElement.trim() === "") throw 'Input is empty';
       //This condition is obeyed if the input contains a letter or special character inside
        if(isNaN(inputElement)) throw 'Input is not a number';

        // This converts the input to a number type so it'll be able to run the following codes below that uses a number
        inputElement = Number(inputElement);
        // This condition is obeyed if the number of the input is below 5
        if(inputElement < 5) throw 'Input is too low';
        // This condition is obeyed if the number of the input is aboe 10
        if(inputElement > 10) throw 'Input is too high';
    } 
    // This condition then runs the code only if there was an error in the try block
    catch(err) {
        message.innerHTML = err;
    }

}


// function inputkey() {
//     if (event.key === 'Enter') {
//         errorMessage()
//     }
// }



