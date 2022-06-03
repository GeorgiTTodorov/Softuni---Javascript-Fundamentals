function cone(radius, height) {

    let volume = (height * Math.PI * Math.pow(radius, 2)) / 3;
    let slantHeight = Math.pow(height, 2) + Math.pow(radius, 2);
    slantHeight = Math.sqrt(slantHeight);
    let surfaceArea = Math.PI * slantHeight * radius + Math.PI * Math.pow(radius, 2);

    console.log('volume = ' + volume.toFixed(4));
    console.log('area = ' + surfaceArea.toFixed(4));

}

cone(3, 5)