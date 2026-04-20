let user_name = "Eric";
let isMorning = false;

function greetingBot(user_name, isMorning) {
    if(isMorning) {
        return `Good Morning, ${user_name}!`
    } else {
        return `Hello, ${user_name}!`
    }
}

console.log(greetingBot(user_name, isMorning));
