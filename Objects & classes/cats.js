function cats(arr) {
  class Cats {
    constructor(catName, catAge) {
      this.name = catName;
      this.age = catAge;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let catsArr = [];

  for (let cat of arr) {
    let index = cat.split(" ");
    let catName = index[0];
    let catAge = index[1];
    let thisCat = new Cats(catName, catAge);
    catsArr.push(thisCat);
  }

  for (let thisCat of catsArr) {
    thisCat.meow();
  }
}

cats(["Mellow 2", "Tom 5"]);
