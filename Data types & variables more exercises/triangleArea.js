function triangleArea(a, b, c) {

    let s = (a + b + c) / 2;
    let triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c) );

    console.log(triangleArea);

}

triangleArea(2, 3.5, 4);
