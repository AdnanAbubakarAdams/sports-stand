// CONFIGURATIONS
const express = require("express");
const products = express.Router();


// IMPORTING ALL QUERIES
const {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require("../queries/stores.js");

// IMPORTING VALIDATIONS
// const { validateUrl } = require("../validations/checkPlayers");





// BUILDING OUT THE ROUTES 
// INDEX // ALL PRODUCTS
products.get("/", async (req, res) => {
    const allProducts = await getAllProducts();
    if (allProducts[0]) {
        res.status(200).json(allProducts);
    } else {
        res.status(500).json({ error: "server error!"});
    }
});

// // SHOW // ONE PRODUCT
products.get("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await getProduct(id)
    if(product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "not Found"});
    }
});

// // CREATE // CREATE OR CUSTOMISE YOUR PRODUCT
products.post("/",  async (req, res) => {
    try {
        const product = await createProduct(req.body);
        res.json(product);
    } catch (error) {
        return error;
    }
});

// // DELETE PRODUCT
products.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id)
    if(deletedProduct.id) {
        res.status(200).json(deletedProduct)
    } else {
        res.status(400).json("Product Not Found");
    }
});

// // UPDATE A PRODUCT
products.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await updateProduct(req.body, id);
    if(updatedProduct.id) {
        res.status(200).json(updatedProduct);
    } else {
        res.status(400).json({ error: "Your product has not been updated" })
    }
});

module.exports = products;