function employees(array) {
  let objOfNames = {};

  for (const el of array) {
    objOfNames.name = el;
    objOfNames.number = el.length;
    console.log(
      `Name: ${objOfNames.name} -- Personal Number: ${objOfNames.number}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
