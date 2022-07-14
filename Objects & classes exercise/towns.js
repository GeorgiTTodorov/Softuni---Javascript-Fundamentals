function towns(array) {


   for (const el of array) {
      let line = el.split(' | ');
      let town = {};
      town.town = line[0];
      town.latitude = Number(line[1]).toFixed(2);
      town.longitude = Number(line[2]).toFixed(2);

      console.log(town);
   }
      

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)