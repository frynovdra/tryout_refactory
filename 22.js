const fahCe = (fahrenheit) => {
    let celcius = fahrenheit-32;
    celcius = celcius/1.8;
    console.log(`${fahrenheit} derajat Fahrenheit sama dengan ${celcius} Celcius`);
}
const fahKel = (fahrenheit) => {
    let kelvin = fahrenheit-32;
    kelvin = kelvin/1.8;
    kelvin = kelvin + 273.15; 
    console.log(`${fahrenheit} derajat Fahrenheit sama dengan ${kelvin} Kelvin`);
}
const celFah = (celcius) => {
    let fahrenheit = celcius*1.8;
    fahrenheit = fahrenheit + 32; 
    console.log(`${celcius} derajat Celcius sama dengan ${fahrenheit} Fahrenheit`);
}
const celKel = (celcius) => {
    kelvin = kelvin + 273.15;
    console.log(`${celcius} derajat Celcius sama dengan ${kelvin} Kelvin`);
}

const kelFah = (kelvin) => {
    fahrenheit = kelvin-273.15;
    fahrenheit = fahrenheit*1.8;
    fahrenheit = fahrenheit+32;
    console.log(`${kelvin} derajat kelvin sama dengan ${fahrenheit} Fahrenheit`);
}

const kelCel = (kelvin) => {
    celcius = kelvin -273.15;
    console.log(`${kelvin} derajat Kelvin sama dengan ${celcius} Celcius`);
}

celFah(75);