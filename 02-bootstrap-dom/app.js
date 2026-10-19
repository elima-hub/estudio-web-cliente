const inputNombre = document.getElementById("nombre");
const selectPlato = document.getElementById("plato");
const inputCantidad = document.getElementById("cantidad");
const btnAgregar = document.getElementById("btn-agregar");
const tablaPedidos = document.getElementById("tabla-pedidos");

function agregarPedido(){
    const nombre = inputNombre.value;
    const plato = selectPlato.value;
    const cantidad = Number(inputCantidad.value);

    if (nombre.trim() === ""){
        alert("El contenido de 'Cliente' es inválido");
        return;
    }

    if (cantidadInvalida(cantidad)){
        alert("El contenido de 'Cantidad' es inválido");
        return;
    }

    const fila = tablaPedidos.insertRow();
    fila.insertCell().textContent = nombre;
    fila.insertCell().textContent = plato;
    fila.insertCell().textContent = cantidad;

    inputNombre.value = "";
    inputCantidad.value = "1";
    inputNombre.focus();
}

function cantidadInvalida(cantidad){
    if (!Number.isInteger(cantidad) || cantidad <= 0){
        return true;
    } else {
        return false;
    }
}

btnAgregar.addEventListener("click", agregarPedido);