function companyUsers(arr) {
  let companyNameAndId = new Map();

  for (const el of arr) {
    let [name, id] = el.split(" -> ");

    if (!companyNameAndId.has(name)) {
      companyNameAndId.set(name, new Set());
    }
    companyNameAndId.get(name).add(id);
  }

  let sorted = Array.from(companyNameAndId).sort();

  for (const [key, value] of sorted) {
    console.log(`${key}`);
    for (const token of value) {
      console.log(`-- ${token}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
