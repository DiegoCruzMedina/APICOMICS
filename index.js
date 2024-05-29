
const express = require("express");
const app = express();
const port = 3002;

const { getProductos, getProductosById } = require("./controllers/getProductos");

app.use(cors());

app.get("/", getProductos);

app.get("/id", getProductosById);

app.listen(port, () => {
    console.log(`Corriendo ok en el puerto: ${port}`);
});