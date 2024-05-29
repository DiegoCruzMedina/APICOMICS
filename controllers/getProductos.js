const { request, response } = require("express");
const { productos } = require("../productos.js");

const getProductos = (req, res) => {
    res.json(productos);
};

const getProductosById = (req, res) => {
    const id = req.params.id;
    const producto = productos.find(p => p.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).send("Producto no encontrado");
    }
};

module.exports = {
    getProductos,
    getProductosById
};