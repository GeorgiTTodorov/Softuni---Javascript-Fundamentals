function schoolGrades(grades) {
  let gradesInfo = new Map();

  for (const el of grades) {
    let data = el.split(" ");
    let studentName = data.shift();
    let grades = data.map(Number);

    if (!gradesInfo.has(studentName)) {
      gradesInfo.set(studentName, []);
    }

    for (const grade of grades) {
      gradesInfo.get(studentName).push(grade);
    }
  }
  let sortByName = Array.from(gradesInfo.entries()).sort(([keyA], [keyB]) => {
    return keyA.localeCompare(keyB);
  });
  for (const [name, grades] of sortByName) {
    let sumGrades = 0;
    grades.forEach((x) => (sumGrades += x));
    let avgGrade = (sumGrades / grades.length).toFixed(2);
    console.log(`${name}: ${avgGrade}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
