function login(input) {

    let index = 0;
    let username = input[index];
    let password = '';
    let counter = 0;
    let loginAttempt = 0;
    
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
        
    }
    
    index++;
    loginAttempt = input[index];

    while (loginAttempt !== password) {
        counter++;
        index++;
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again');
        loginAttempt = input[index];
    }

    if (loginAttempt === password) {
        console.log(`User ${username} logged in.`);
    }

}

login(['momo','omom'])
