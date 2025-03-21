let groceryList = []; // declare empty array

let createList = prompt("Do you want to create a grocery list? (y/n):");

if (createList.toLowerCase() === "y") { // use .tolowercase() to allow both "Y" and "y" as valid inputs
    let numItems = parseInt(prompt("How many items do you want to add?:"), 10); // use parseInt() to convert a string into an integer-whole number
    
    for (let i = 0; i < numItems; i++) {
        let item = prompt(`Enter item ${i + 1}:`);
        groceryList.push(item); // add item to list
    }

    console.log("Original List:", groceryList);
    console.log("Sorted List:", groceryList.slice().sort()); // sort without modifying original
    console.log("Reversed List:", groceryList.slice().reverse()); // reverse without modifying original
} else {
    console.log("No grocery list created.");
}
