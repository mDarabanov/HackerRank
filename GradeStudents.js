let integerGrades = [73, 67, 38, 33];
let result = [];
let closestGrade = 0;

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 === 0) {
      result.push(grades[i]);
    } else if (grades[i] < 37) {
      result.push(grades[i]);
    } else if (grades[i] % 5 !== 0) {
      closestGrade = grades[i] - (grades[i] % 5) + (grades[i] % 5 > 0 && 5);
      closestGrade - grades[i] < 3
        ? result.push(closestGrade)
        : result.push(grades[i]);
    }
  }
  return result;
}

console.log(gradingStudents(integerGrades));
