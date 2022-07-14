function bombNumbers3(array, array2) {
  let bombNumber = array2[0];
  let power = array2[1];
  let sumArr = 0;
  let bombIndex = array.indexOf(bombNumber);
  
  while (array.includes(bombNumber)) {
      array.splice(bombIndex - power, power + power + 1)
  }

  array.forEach(el => sumArr += el);
  console.log(sumArr);
        
}

bombNumbers3([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    )
bombNumbers3([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    );
bombNumbers3([1, 7, 7, 1, 2, 3],
  [7, 1]
  )   
bombNumbers3([1, 2, 2, 4, 2, 2, 2, 9],
  [4, 2]
  )