class Ui{
    constructor(){
        this.detalles=document.getElementById("detalles");
    }
    addProduct(producto){
        let card=`
            <div>
                <p>Codigo: ${producto.codigo}</p>
                <p>Nombre: ${producto.nombre}</p>
                <p>Costo: ${producto.costo}</p>
            </div>`;
            this.detalles.innerHTML += card;
    }
    listProducts(todos){
        this.detalles.innerHTML +="<div><h2>Listado de productos</h2>";
        todos.forEach(element => {
            this.detalles.innerHTML += `<p>${element.codigo} - ${element.nombre} $${element.costo}</p>`;
        });
        this.detalles.innerHTML +="<div>";
    }
}
