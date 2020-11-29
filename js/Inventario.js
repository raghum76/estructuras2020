class Inventario{
    constructor(){
        this.prods=new Array();
    }
    agregar(nuevo){
        this.prods.push(nuevo);
    }
    buscar(codigo){}
    eliminar(codigo){}
    listar(){
        return this.prods;
    }
}