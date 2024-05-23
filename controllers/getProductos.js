const { request, response } = require("express");
const { productos } = require("../productos")

const getProductos = (req = request, res = response )=> {

    res.json({
        status:true,
        productos,
        statusCode:200

    });
}

const getProductosById = (req = request , res = response)=> {

    let id = req.params.id;

    let productoS= "";

    productoS = productos.find((producto)=> {
        return producto.id === id;
    });
    if(productoS){
        return res.json({
            ok:true,
            robotS,
            statusCode:200
        });
    }else{
        return res.json({
            ok:false,
            msg:"No hay un comic con ese id",
            statusCode:404
        });
    }

}

module.exports = {
    getProductos,
    getProductosById
    
}