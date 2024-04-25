const classes = require("../assets/classes.json");

// This function returns a sorted list of all actors in our movie dataset.
export function getAllStudents() {
  let students = new Set();
  classes.forEach((c) => {
    c.students.forEach((student) => {
      students.add(student);
    });
  });
  return Array.from(students).sort();
}