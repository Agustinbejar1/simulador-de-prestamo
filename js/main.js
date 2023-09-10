
const monto = document.getElementById('monto');
const cuotas = document.getElementById('cuotas');
const interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');
const llenarTabla = document.querySelector('#lista-tabla');

btnCalcular.addEventListener('click', () => {
      calcularCuota(monto.value, interes.value, cuotas.value);
})

function calcularCuota(monto, interes, cuotas){
 
    let pagoInteres, pagoCapital, cuota;

    if(monto <= 0){
        alert("El monto debe ser mayor a 0");
        return;
    }else if (cuotas <= 0){
        alert("El número de cuotas debe ser mayor a 0")
        return;
    }

    cuota = monto * (Math.pow(1+interes/100, cuotas)*interes/100)/(Math.pow(1+interes/100, cuotas)-1);

    for(let i = 1; i <= cuotas; i++) {

        pagoInteres = parseFloat(monto*(interes/100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat (monto-pagoCapital);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cuota.toFixed(2)}</td>
            <td>${pagoCapital.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row)
    }
}


