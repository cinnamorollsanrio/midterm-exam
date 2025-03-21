let colors = []; // declare empty array for a place to store the colors the user inputs

for (let i = 0; i < 3; i++) { // use 3 loops
    let userColor = prompt("Enter a color:"); //ask input
    colors.push(userColor); //.push to add color to array
}

console.log("Your chosen colors are:", colors); // print
