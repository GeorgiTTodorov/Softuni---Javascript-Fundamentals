function destinationMapper(input) {
  let validDestination = /(?<symbol>[=|/])(?<word>[A-z]{3,})(\1)/g;

  let placesToTravel = validDestination.exec(input);
  let sum = 0;
  let destinations = [];

  while (placesToTravel !== null) {
    let destination = placesToTravel.groups.word;
      destinations.push(destination);
      placesToTravel = validDestination.exec(input);
      sum += destination.length;
  }

  console.log(`Destinations: ${destinations.join(", ")}`);
  console.log(`Travel Points: ${sum}`);
}

destinationMapper("=I5valid/=i=");
