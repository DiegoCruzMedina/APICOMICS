const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3002; 

const { getProductos, getProductosById } = require("./controllers/getProductos.js");

// Usa el middleware CORS
app.use(cors());

app.get("/", getProductos);
app.get("/id/:id", getProductosById);

app.listen(port, () => {
    console.log(`Corriendo ok en el puerto: ${port}`);
});