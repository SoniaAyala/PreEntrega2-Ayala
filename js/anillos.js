
class Compras {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerTotalCompra() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, anillo)=> acumulador + anillo.precio, 0)
        }
    }
}

const carrito = []

const anillos = [{imagen: '🌸', referencia: 128, nombre: 'Magnolia', precio: 43},
                 {imagen: '🌞', referencia: 211, nombre: 'Solsire', precio: 45.99},
                 {imagen: '🍀', referencia: 333, nombre: 'Serendipia', precio: 33},
                 {imagen: '🦊', referencia: 114, nombre: 'Foxy', precio: 24.95},
                 {imagen: '💎', referencia: 312, nombre: 'La reina', precio: 56}]


function buscarAnillo(referencia) {
    let anilloEscogido = anillos.find((anillo)=> anillo.referencia === referencia)
    return anilloEscogido
}

window.onload = function comprar() {
    let referencia = prompt("Ingresa el número de referencia del anillo que deseas agregar al carrito de compras:")
    let anilloSeleccionado = buscarAnillo(parseInt(referencia))
    const totalCuotas1 = 2
    const totalCuotas2 = 3
    
    if (anilloSeleccionado === undefined) {
        alert("¡Lo sentimos! No encontramos el anillo seleccionado.")
    } else {
        carrito.push(anilloSeleccionado)
        alert(anilloSeleccionado.nombre + " se agregó al carrito con éxito.")
        let respuesta = confirm("¿Deseas agregar otro anillo al carrito de compras?")
    if (respuesta === true) {
            comprar()
    } else {
        const shop = new Compras (carrito)
        let totalCompra = shop.obtenerTotalCompra()
        console.log("El importe total de la compra es", totalCompra.toLocaleString("es-ES"), "€")
        let respuesta = confirm ("¿Deseas ver nuestras cuotas?")
    if (respuesta != false) {
        console.log ("Éstas son nuestras cuotas:")
    for (let i = 1; i <= totalCuotas1; i++){
            console.log(i, "cuotas sin interés.")
                } 
    for (let i = 3; i <= totalCuotas2; i++){
            console.log (i, "cuotas con interés")
                }
            }
        }
    }
} 