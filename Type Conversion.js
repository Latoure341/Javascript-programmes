
const inputString = "25";
const numbInput = parseInt(inputString);

if(numbInput === 0){
    console.log("truthy")
} else{
    console.log(`${numbInput} And ${0}: Falsy`)
}

if(numbInput === "Hello"){
    console.log("truthy")
} else {
    console.log(`${numbInput} And Hello: Falsy`)
}

if(numbInput === ""){
    console.log("truthy")
} else {
    console.log(`${numbInput} And " ": Falsy`)
}

if(numbInput === null){
    console.log("truthy")
} else{
    console.log(`${numbInput} And ${null}: Falsy`)
}

if(numbInput === NaN){
    console.log("truthy")
} else{
    console.log(`${numbInput} And ${NaN}: Falsy`)
}