let score = 75;
let grade;

switch (true) {
  case (score >= 90 && score <= 100):
    grade = "A";
    break;
  case (score >= 80 && score <= 89):
    grade = "B";
    break;
  case (score >= 70 && score <= 79):
    grade = "C";
    break;
  case (score >= 60 && score <= 69):
    grade = "D";
    break;
  case (score < 60):
    grade = "F";
    break;

  default:
    grade = "Invalid score";
}

let studentResults = ((grade === "F") || (grade === "Invalid score")) ? "Failed" : "Passed"
console.log(studentResults);
