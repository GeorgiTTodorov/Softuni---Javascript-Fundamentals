function aMinersTask(arr) {
    let resourceMap = new Map();

    for (let i = 0; i < arr.length; i+=2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);
        
        if (!resourceMap.has(resource)) {
            resourceMap.set(resource, quantity);
        } else {
            let oldValue = resourceMap.get(resource);
            resourceMap.set(resource, oldValue + quantity);
        }
        
    }

    for (const [key,value] of resourceMap) {
        console.log(`${key} -> ${value}`);
    }
    
}

aMinersTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )
aMinersTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )    