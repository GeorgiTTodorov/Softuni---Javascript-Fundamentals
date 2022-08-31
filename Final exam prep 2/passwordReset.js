function passwordReset(input) {
  let password = Array.from(input.shift());

  for (let el of input) {
    let [command, valueA, valueB] = el.split(" ");

    if (command === "Done") {
      break;
    }
    switch (command) {
      case "TakeOdd":
        password = password.filter((x, index) => {
          return index % 2 !== 0;
        });
        console.log(password.join(""));
        break;
      case "Cut":
        let index = Number(valueA);
        let count = Number(valueB);
        password = password.join("");
        let result = password.substring(index, index + count);
        password = password.replace(result, "");
        console.log(password);
        break;
      case "Substitute":
        if (password.includes(valueA)) {
          password = password.replace(new RegExp(valueA, "g"), valueB);
          console.log(password);
        } else {
          console.log("Nothing to replace!");
        } 
        break;
    }
  }
  console.log(`Your password is ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log('-----------------------------');
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
)
