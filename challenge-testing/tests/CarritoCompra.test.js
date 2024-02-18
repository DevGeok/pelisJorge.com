const {CarritoCompra} = require("../index");

describe('Class CarritoCompra',()=>{

    it('Debe existir como clase',()=>{
    expect(CarritoCompra).toBeInstanceOf(Function);
    });     
    it('Debe poder instanciarse un objeto de la clase CarotoCompra', () => {
        const newCarrito = new CarritoCompra();
        expect(newCarrito).toBeInstanceOf(CarritoCompra);
        expect(newCarrito.carrito).toBeDefined();
    });

    it('Debe contener los metodos constructor, agregarProducto, calcularTotal y aplicarDescuento', () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined();
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
    });
});

describe('Constructor de la clase',()=>{

    it('Debe instanciarse un objeto que contenga un arreglo vacío',()=>{
        const newCarrito = new CarritoCompra();
    expect(Array.isArray(newCarrito.carrito)).toBe(true);
    expect(newCarrito.carrito.length).toBe(0)
    expect(newCarrito.carrito).toEqual([]);
    });
});

describe('metodo agregarProducto',()=>{

    it('Debe recibir un objeto y agregarlo al carrito',()=>{
        const newCarrito = new CarritoCompra();
        const producto={
            nombre: "Salchichas",
            cantidad: "2",
            precio: "10"
        }
        newCarrito.agregarProducto(producto);
    expect(newCarrito.carrito).toContainEqual(producto);
    expect(newCarrito.carrito.length).toBe(1);
    expect(newCarrito.carrito).toEqual([producto]);
    });
    it('Debería recibir muchos objetos y agregarlos al carrito', () => {
        const newCarrito = new CarritoCompra();
        const productos=[{
            nombre: "Salchichas",
            cantidad: 2,
            precio: 10
        },
        {
            nombre: "Pan",
            cantidad: 2,
            precio: 5
        },
        {
            nombre: "Salsa de Tomate",
            cantidad: 1,
            precio: 8
        },
        {
            nombre: "Papitas",
            cantidad: 2,
            precio: 3
        }]
        productos.forEach((producto) => {
            newCarrito.agregarProducto(producto);
            expect(newCarrito.carrito).toContain(producto);
        });
        expect(newCarrito.carrito.length).toBe(4);
        expect(newCarrito.carrito).toEqual(productos);
    });
});

describe('metodo calcularTotal',()=>{

    it('Debería dar el total de la suma de el costo de todos los productos',()=>{
        const newCarrito = new CarritoCompra();
        newCarrito.carrito=[{
            nombre: "Salchichas",
            cantidad: 2,
            precio: 10
        },
        {
            nombre: "Pan",
            cantidad: 2,
            precio: 5
        },
        {
            nombre: "Salsa de Tomate",
            cantidad: 1,
            precio: 8
        },
        {
            nombre: "Papitas",
            cantidad: 2,
            precio: 3
        }]
    expect(!isNaN(newCarrito.calcularTotal())).toBe(true);
    expect(newCarrito.calcularTotal()).toBe(44);
    });
     //Aquí van los demás it
});

describe('metodo aplicarDescuento',()=>{

    it('Debe aplicar el descuento',()=>{
        const newCarrito = new CarritoCompra();
        newCarrito.total = 1000;
    expect(newCarrito.aplicarDescuento(10)).toBe(900);
    expect(newCarrito.aplicarDescuento(50)).toBe(500);
    expect(newCarrito.aplicarDescuento(25)).toBe(750);
    expect(newCarrito.aplicarDescuento(70)).toBe(300);
    });
     //Aquí van los demás it
});