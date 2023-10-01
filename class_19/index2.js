 // Bank Account Class
 class BankAccount {
    constructor(customerName, customerEmail, customerBVN, customerAccountNumber) {
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerBVN = customerBVN;
        this.customerAccountNumber = customerAccountNumber;
    }
}

 // Create an instance of BankAccount
 const customerAccount = new BankAccount("Oyeniran Mayowa Victor", "oyeniranmayowavictor43@gmail.com", "1234567890", "2092484980");

  // Button click to toggle
  const toggleButton = document.getElementById("toggleButton");
  const customerDetails = document.getElementById("customerDetails");
  const customerNameSpan = document.getElementById("customerName");
  const customerEmailSpan = document.getElementById("customerEmail");
  const customerBVNSpan = document.getElementById("customerBVN");
  const customerAccountNumberSpan = document.getElementById("customerAccountNumber");


  toggleButton.addEventListener("click", function() {
    if (customerDetails.style.display === "none") {

        // To Show customer details
        customerNameSpan.textContent = customerAccount.customerName;
        customerEmailSpan.textContent = customerAccount.customerEmail;
        customerBVNSpan.textContent = customerAccount.customerBVN;
        customerAccountNumberSpan.textContent = customerAccount.customerAccountNumber;
        customerDetails.style.display = "block";
        toggleButton.textContent = "Hide Details";

    } else {

        // To Hide customer details
        customerDetails.style.display = "none";
        toggleButton.textContent = "Show Details";
    }
});
