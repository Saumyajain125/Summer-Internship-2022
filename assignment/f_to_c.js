function convertCtoF(celcius){
    return (celcius * 9/5) + 32;
}

function convertFtoC(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}
console.log(convertCtoF(60));
console.log(convertFtoC(45));