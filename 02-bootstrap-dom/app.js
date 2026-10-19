const inputNombre = document.getElementById("nombre");
const selectPlato = document.getElementById("plato");
const inputCantidad = document.getElementById("cantidad");
const btnAgregar = document.getElementById("btn-agregar");
const tablaPedidos = document.getElementById("tabla-pedidos");

function agregarPedido(){
    const nombre = inputNombre.value
    const plato = selectPlato.value
    const cantidad = inputCantidad.value

    if (nombre.trim() === ""){
        alert("El contenido de 'Cliente' es inválido");
        return;
    }

    if (cantidad.trim() <= 0){
        alert("El contenido de 'Cantidad' es inválido");
        return;
    }
}