function cutAndReverse(input) {
  let halfL = input.length / 2;
  let firsHalf = input.substring(0, halfL);
  let secondHalf = input.slice(halfL);

  let one = firsHalf.split("").reverse().join("");
  let two = secondHalf.split("").reverse().join("");

  console.log(one);
  console.log(two);
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
