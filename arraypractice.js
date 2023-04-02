let students = [
  { name: "John", grade: 0, passing: false },
  { name: "Mary", grade: 0, passing: false },
  { name: "David", grade: 0, passing: false }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].name === "John") {
    students[i].grade = 100;
    students[i].passing = true;
  } else if (students[i].name === "Mary") {
    students[i].grade = 85;
    students[i].passing = true;
  } else {
    students[i].grade = 40;
    students[i].passing = false;
  }
  
  if (students[i].grade > 75) {
    students[i].passing = true;
  }
}

console.log(students);
