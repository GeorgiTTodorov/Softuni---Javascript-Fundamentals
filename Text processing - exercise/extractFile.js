function extractFile(str) {
  let strArray = str.split("\\");
  let lastElement = strArray.pop();
  let lastElementSplit = lastElement.split(".");

  if (lastElementSplit.length === 2) {
    console.log(`File name: ${lastElementSplit[0]}`);
    console.log(`File extension: ${lastElementSplit[1]}`);
  } else {
    let extension = lastElementSplit.pop();
    console.log(`File name: ${lastElementSplit.join(".")}`);
    console.log(`File extension: ${extension}`);
  }
}

extractFile("C:\\Internal\\training-internal\\template.bak.pptx");
