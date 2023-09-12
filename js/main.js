
const monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
const interes = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
const cuotas = parseInt(prompt("Ingrese el número de cuotas:"));

if ((monto <= 0) || (interes <= 0 ) || (cuotas <= 0)) {
    alert("Por favor, ingrese valores mayor a 0.");
} else {
    calcularCuota(monto, interes, cuotas);
}



function calcularCuota(monto, interes, cuotas) {
    if (monto <= 0 || cuotas <= 0) {
        alert("El monto y el número de cuotas deben ser mayores que 0.");
        retu
    }

    const tasaMensual = interes / 100 / 12;
    const cuota = monto * (tasaMensual * Math.pow(1 + tasaMensual, cuotas)) / (Math.pow(1 + tasaMensual, cuotas) - 1);

    console.log("Cuota Mensual:", cuota.toFixed(2));
    console.log("Detalles de Pagos:");

    for (let i = 1; i <= cuotas; i++) {
        const pagoInteres = monto * tasaMensual;
        const pagoCapital = cuota - pagoInteres;

    console.log(`Mes ${i}:`);
    console.log(`  Cuota: ${cuota.toFixed(2)}`);
    console.log(`  Saldo Restante: ${(monto - pagoCapital).toFixed(2)}`);

        monto -= pagoCapital;
    }
}

