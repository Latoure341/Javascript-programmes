let user_name = prompt("Enter your name: ");
let isMorning = prompt("Enter whether it is morning or not: (True or False)");

function greetingBot(user_name, isMorning) {
    if(isMorning) {
        return `Good Morning, ${user_name}!`
    } else {
        return `Hello, ${user_name}!`
    }
}

console.log(greetingBot(user_name, isMorning));
