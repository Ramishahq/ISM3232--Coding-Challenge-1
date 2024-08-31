// Task1: Variables and Data Types



let employeeName = "Rami";
const employeeID = 321; 
var isActive = true; 
console.log (employeeName, typeof(employeeName));
console.log (employeeID, typeof(employeeID));
console.log (isActive, typeof(isActive));
 

// Task2: Compound Data Types 

let products = ["Shampoo","Body Wash", "Conditioner"]; 
const productDetails = { 
    Name: "Shampoo", 
    Price: 22,
    Instock: "Yes",
}
console.log (products,productDetails);

// Task3: Assignment Operators

let accountBalance = 2000;
console.log ("Initial Balance:",accountBalance);
accountBalance += 1000;
console.log("Total Balance after Deposit:", accountBalance);
accountBalance -= 500;
console.log("Total Balance after Withdraw:", accountBalance);
accountBalance *= 2;
console.log("Total Balance after Interest:", accountBalance);
accountBalance /= 4;
console.log("Total Balance after Charges:", accountBalance);
accountBalance %= 500;
console.log("Total Balance after Payment:", accountBalance);


