function inventory(arr) {
  let heroRegister = [];

  for (const el of arr) {
    let [name, level, items] = el.split(" / ");
    heroRegister.push({ name: name, level: Number(level), items: items });
  }
  let sortedList = heroRegister.sort((a, b) => {
    return a.level - b.level;
  });

  sortedList.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
