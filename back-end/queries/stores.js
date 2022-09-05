
const db = require("../db/dbConfig.js");

// QUERY FOR ALL PRODUCTS 
const getAllProducts = async () => {
    try {
        const allProducts = await db.any("SELECT * FROM store")
        return allProducts;
    } catch (err) {
        return err;
    }
};

// QUERY FOR A SINGLE PRODUCT
const getProduct = async (id) => {
    try {
        const aProduct = await db.one("SELECT * FROM store WHERE id=$1", id);
        return aProduct;
    } catch (error) {
        return error;
    }
};

// // QUERY TO CREATE A PRODUCT
const createProduct = async (product) => {
    const { name, price, image, category, quantity } = product;
    try {
        const newProduct = await db.one(
            "INSERT INTO store (name, price, image, category, quantity) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, price, image, category, quantity]
        );
        return newProduct;
    } catch (error) {
        return error;
    }
};

// // QUERY TO DELETE A PRODUCT
const deleteProduct = async (id) => {
    try {
        const deletedProduct = await db.one("DELETE FROM store WHERE id = $1 RETURNING *", id);
        return deletedProduct;
    } catch (error) {
        return error;
    }
};

// // QUERY TO UPDATE A PRODUCT
const updateProduct = async (product, id) => {
    const { name, price, image, category, quantity } = product;
    try {
        const updatedProduct = await db.one("UPDATE store SET name = $1, price = $2, image = $3, category = $4, quantity = $5 WHERE id = $6 RETURNING *",
        [name, price, image, category, quantity, id])
        return updatedProduct;
    } catch(err) {
        return err;
    }
};





module.exports = {
    getAllProducts,
    getProduct, 
    createProduct,
    deleteProduct,
    updateProduct
};