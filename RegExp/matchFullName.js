function matchFullName(list) {
  let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g;
  let validNames = [];
  let name = pattern.exec(list);

  while (name !== null) {
    validNames.push(name);

    name = pattern.exec(list);
  }

  console.log(validNames.join(' '));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
