let studentName = prompt("Enter student name:"); // prompt ask user
let subjectTitle = prompt("Enter subject title:");
let classSchedule = prompt("Enter class schedule (Time, Days):");
let classroom = prompt("Enter classroom:");
let classInstructor = prompt("Enter class instructor:");

// use to ${} to insert variables directly into a string for cleaner and more readable output
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}`);
