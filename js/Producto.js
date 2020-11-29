class Producto{
    constructor(codigo,nombre,costo){
        this.codigo=codigo;
        this.nombre=nombre;
        this.costo=costo;
    }
    info(){
        return `Codigo: ${this.codigo} Nombre: ${this.nombre} Costo: ${this.costo} `;
    }
    toHtml(){
        return `<div><p>Codigo: ${this.codigo}</p>
        <p>Nombre: ${this.nombre}<br>
           Costo: ${this.costo}</p></div>`;
    }
}