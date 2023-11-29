console.log("-----Taza de interés plazo fijo según el banco----");
console.log(" ");


const calcularInteres = (monto, tasa) => {
    const interes = monto * (tasa / 100);
    return interes;
};


const mostrarMenu = () => {
    console.log('Seleccione un banco para calcular el interés de un plazo fijo:');
    console.log('1. Banco Supervielle');
    console.log('2. Banco BBVA');
    console.log('3. Banco NACION ARGENTINA');
    console.log('4. Salir');
};

let opcion = 0;

while (opcion !== 4) {
    mostrarMenu();
    const input = prompt('Ingrese el número del banco (1-4):');
    const opcionMin = input.toLowerCase();

    switch (opcionMin) {
        case '1':
        case 'banco supervielle':
            const montoSupervielle = parseFloat(prompt('Ingrese el monto del plazo fijo en pesos en Banco Supervielle:'));
            const tasaSupervielle = 3.5; 
            const interesSupervielle = calcularInteres(montoSupervielle, tasaSupervielle);
            console.log(`El interés en Banco Supervielle es: ${interesSupervielle}`);
            break;
        case '2':
        case 'banco bbva':
            const montoBBVA = parseFloat(prompt('Ingrese el monto del plazo fijo en pesos en Banco BBVA:'));
            const tasaBBVA = 4.0; 
            const interesBBVA = calcularInteres(montoBBVA, tasaBBVA);
            console.log(`El interés en Banco BBVA es: ${interesBBVA}`);
            break;
        case '3':
        case 'banco nacion argentina':
            const montoNacionArgentina = parseFloat(prompt('Ingrese el monto del plazo fijo en pesos en Banco NACION ARGENTINA:'));
            const tasaNacionArgentina = 3.8; 
            const interesNacionArgentina = calcularInteres(montoNacionArgentina, tasaNacionArgentina);
            console.log(`El interés en Banco NACION ARGENTINA es: ${interesNacionArgentina}`);
            break;
        case '4':
        case 'salir':
            console.log('Fin');
            opcion = 4; 
            break;
        default:
            console.log('Opción inválida. Ingrese un número del 1 al 4 o el nombre del banco.');
            break;
    }
}

