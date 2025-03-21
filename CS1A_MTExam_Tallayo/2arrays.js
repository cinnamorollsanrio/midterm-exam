let dsa = [];
let webDev = [];
let subject; // declare subject before assigning

let subjectChoice = prompt("Select a subject: (A) DSA, (B) WebDev:"); // use prompt to ask user

while (true) {     // use while(true) to create infinite loop so the code keeps running til it hit break to stop 
    if (subjectChoice === "A") {  // use if to know which subject the user chose
        subject = dsa;
    } else if (subjectChoice === "B") {  // same w dis
        subject = webDev;
    } else {  
        alert("Invalid choice. Try again."); // use alert to show a popup message to the user
        subjectChoice = prompt("Select a subject: (A) DSA, (B) WebDev:");
        continue;
    }

    let operation = prompt("Choose an operation: (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit:");

    if (operation === "A") { // === strict equality operator in JS checks both value and data type
        let student = prompt("Enter student name to enroll:");
        subject.push(student); // .push() adds a value to the end of an array
    } 
    else if (operation === "B") {
        alert("Currently enrolled: " + subject.join(", "));
        let student = prompt("Enter student name to unenroll:");
        let index = subject.indexOf(student);
        if (index !== -1) {
            subject.splice(index, 1); // .splice() adds, removes, or replaces elements in an array at a specific position
        } else {
            alert("Student not found.");
        }
    } 
    else if (operation === "C") {
        subjectChoice = prompt("Select a subject: (A) DSA, (B) WebDev:");
    } 
    else if (operation === "D") {
        console.log("DSA students:", dsa);
        console.log("WebDev students:", webDev);
        break; // to stop the loop
    } 
    else {
        alert("Invalid option. Try again.");
    }
}
