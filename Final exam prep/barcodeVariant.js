function fancyBarcode(array) {
  let count = Number(array.shift());

  let validBarcode = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
  let digits = /\d+/g;

  for (let i = 0; i < count; i++) {
    let barcode = array[i];
    let match = barcode.match(validBarcode);
    let productGroup;
    
    if (match !== null && (match[0].match(digits) !== null)) {
        match = match.join("");
        productGroup = match.match(digits).join('');
    } else {
        productGroup = '00';
        if (match !== null) {
            match = match.join('');
        }    
    }

    if (match === barcode) {
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}
  
  fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
  console.log('__________________');
  fancyBarcode(['6',
  '@###Val1d1teM@###',
  '@#ValidIteM@#',
  '##InvaliDiteM##',
  '@InvalidIteM@',
  '@#Invalid_IteM@#',
  '@#ValiditeM@#'])