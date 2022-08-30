//EJERCICIO 1
function timeConversion(hora){
    let hour = hora.slice(0,2);
    let minuto = hora.slice(3,5);
    let segundo = hora.slice(6,8);
    let horario = hora.slice(8,11);

    switch(horario){
        case "AM":
            let horaMañana = "00"
            if(hour == "12"){
                return `${horaMañana}:${minuto}:${segundo}`
            }else{
                return `${hour}:${minuto}:${segundo}`
            }
            break;
        case "PM":
            let horaTarde = "12"
            if(hour == "12"){
                return `${horaTarde}:${minuto}:${segundo}`
            }else{
                let newHora = parseInt(hour) + 12;
                return `${newHora}:${minuto}:${segundo}`;
            }
            break;
    }
}
let horaSinFormato="12:45:58AM"
let horaReloj = timeConversion(horaSinFormato)
console.log(horaReloj)

//Formato "03:45:58PM"

//EJERCICIO 2
let fizzBuzz = (numero) => {
    let divisionTres = numero%3;
    let divisionCinco = numero%5;
    let mensaje = ()=>{
        if(divisionTres == 0 && divisionCinco == 0){
            return "fizzbuzz";
        }else if(divisionTres == 0){
            return "fizz"
        }else if(divisionCinco == 0){
            return "buzz"
        }else{
            return numero
        }
    }
    return console.log(mensaje())
    
}
for(let x = 1; x <= 100; x++){
    fizzBuzz(x)
}

//EJERCICIO 3

let palabraEntrada = "Hola Mundo";
let palabraInvertida = "";
for(let i = palabraEntrada.length; i >= 0 ; i--){
    palabraInvertida += palabraEntrada.charAt(i)
}
console.log(palabraInvertida)