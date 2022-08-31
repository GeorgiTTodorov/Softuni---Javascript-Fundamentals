function fancyBarcode(array) {
  let count = Number(array.shift());

  let validBarcode = /(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/g;

  for (let i = 0; i < count; i++) {
    let barcode = array[i];

    let match = validBarcode.exec(barcode);
    let productGroup ='';
    let isValid = false;

    while (match !== null) {
        isValid = true;
        let product = match[2];
        for (const char of product) {
            if (!isNaN(Number(char))) {
                productGroup += char;
            }
        }
        match = validBarcode.exec(barcode);
    }   
        if (isValid) {
            productGroup = productGroup !== '' ? productGroup : '00';
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode');
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
