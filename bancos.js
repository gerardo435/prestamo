function calcularPrestamo() {
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let banco = document.getElementById("banco").value;
    let tipoPrestamo = document.getElementById("tipoPrestamo").value;
    let tipoEmpresa = document.getElementById("tipoEmpresa").value;
    let monto = parseFloat(document.getElementById("monto").value);
    let plazo = parseInt(document.getElementById("plazo").value);
                                                                            
    let tasaInteres;
    let limiteMonto = 99999999999;
    let esEmpleadoPublico = tipoEmpresa === "publica";
    
    if (banco === "agricola") {   
        tasaInteres = plazo > 5 ? 12 : 10;
        if (esEmpleadoPublico) tasaInteres = 2;
    } else if (banco === "azul") {
        tasaInteres = 12;
        if (plazo > 5) {
            alert("Banco Azul solo permite plazos de 1 a 5 años.");
            return;
        }
        if (monto > 120000) {
            alert("Banco Azul solo permite montos hasta $120000.");
            return;
        }
        if (esEmpleadoPublico) tasaInteres = 9;
    } else if (banco === "cuscatlan") {
        if (tipoPrestamo === "hipotecario") {
            alert("Banco Cuscatlán no ofrece créditos hipotecarios.");
            return;
        }
        tasaInteres = 19;
        limiteMonto = 12 * parseFloat(document.getElementById("tiempo").value);
        if (monto > limiteMonto) {
            alert(`Banco Cuscatlán solo permite prestar hasta 12 veces su salario (${limiteMonto}).`);
            return;
        }
    
    }

    
    let interes = (monto * tasaInteres * plazo) / 100;
    let deudaTotal = monto + interes;
    let cuotaMensual = deudaTotal / (plazo * 12);

    
    document.getElementById("resBanco").textContent = banco.charAt(0).toUpperCase() + banco.slice(1);
    document.getElementById("resNombre").textContent = `${nombre} ${apellido}`;
    document.getElementById("resTipoPrestamo").textContent = tipoPrestamo;
    document.getElementById("resMonto").textContent = monto.toFixed(2);
    document.getElementById("resPlazo").textContent = plazo;
    document.getElementById("resInteres").textContent = interes.toFixed(2);
    document.getElementById("resDeudaTotal").textContent = deudaTotal.toFixed(2);
    document.getElementById("resCuota").textContent = cuotaMensual.toFixed(2);



    document.getElementById("resultado").style.display = "block";
}


