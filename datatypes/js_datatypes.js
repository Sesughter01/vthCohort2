// There are 8 primitive datatypes in JS 

/*

 1. String
 2. Number
 3. BigInt
 4. Boolean
 5. Undefined
 6. Null
 7. Symbol
 1. None




*/

// There 3 object or collection datatypes JS

/**
 * 1. Object
 * 2. Array
 * 3. Date
 * 
 * 
 */


// Examples of String

// Lets declare a variable called bank_account

// There are 3 major keywords used in creating variables in JS

//  var , let, const 

var bank_account; // variable declaration

bank_account = {                    // variable initialization
    account_name:'Maryam Haruna',
    account_number: '09112005'+11,
}

// bank_account = "account"  // this doesn't throw an error because var variables allow multiple declaration 



let address ; // declaration

address = '3 Dekunle Ayotebi Street' // initialized

// let address = 5  this will cause an error  because let keyword doesn't allow redeclaration

const bvn = '22323234543' ; // this will throw an error bcos const keyword does not allow variable re-assignment

// String variable

let account_name = "John Knox"

// Passing data to to html using the DOM

const acct_title1 = document.getElementById('account1_title');
const acct_subtitle1 = document.getElementById('account1_subtitle');

acct_title1.innerHTML = account_name
acct_subtitle1.innerHTML = address
// console.log(acct_title1)
