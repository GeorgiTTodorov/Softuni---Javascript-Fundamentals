function sortAnArrayBy2Criteria(array) {

let sorted = array.sort((a, b) => { 
    return a.length - b.length || a.localeCompare(b) });
   
    console.log(sorted.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])