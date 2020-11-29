import Producto from './producto.js'
import Ui from './Ui.js'
import Inventario from './Inventario.js'


let misProductos=new Inventario();
let ui=new Ui();
//btnAgregar
document.getElementById('btnAgregar').addEventListener('click',()=>{
    //recuperamos las cajas de texto 
    //debemos validar
    let codigo=document.getElementById('txtCodigo').value;
    let nombre=document.getElementById('txtNombre').value;
    let costo=document.getElementById('txtCosto').value;
    let nuevo=new Producto(codigo,nombre,costo);
    misProductos.agregar(nuevo);
    ui.addProduct(nuevo);
});

document.getElementById('btnListar').addEventListener('click',()=>{
    ui.listProducts(misProductos.listar());
})