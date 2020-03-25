let students = [
  97,
  48,
  99,
  40,
  11,
  5,
  78,
  44,
  22,
  82,
  24,
  0,
  52,
  68,
  33,
  60,
  59,
  90,
  84,
  90,
  76,
  36,
  79,
  87,
  48,
  59,
  42,
  21,
  39
];
let studentsNeed = 7;

function angryProfessor(k, a) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      result.push(a[i]);
    }
  }
  if (result.length >= k) {
    return 'NO';
  } else {
    return 'YES';
  }
}

console.log(angryProfessor(studentsNeed, students));
