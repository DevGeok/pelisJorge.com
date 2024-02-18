class CarritoCompra {
    constructor(){
    this.carrito=[];
    this.total=0;
   }

   agregarProducto(product){
    this.carrito.push(product);
   }

   calcularTotal(){
    this.total=0;
   if (this.carrito.length === 0) throw new Error("El carrito está vacío");

    this.carrito.forEach(producto => {
            this.total = this.total + (producto.precio * producto.cantidad);            
    });
    return this.total;
   }

   aplicarDescuento(percentage){
     return this.total*((100-percentage)/100)
   }
};

module.exports = {
  CarritoCompra
}