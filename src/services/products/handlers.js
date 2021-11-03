import pool from "../../db/connect.js";

const getAllProducts = async (req, res, next) => {
  try {
    const data = await pool.query("SELECT * FROM products ORDER BY id ASC;");
    res.send(data.rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProductById = async (req, res, _next) => {
  try {
    const data = await pool.query("SELECT * FROM products WHERE id=$1", [
      req.params.id,
    ]);

    if (data.rows.length === 0) {
      res.status(400).send("Product not found");
    } else {
      res.send(data.rows[0]);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createProducts = async (req, res, _next) => {
  try {
    const { name, description, brand, price, imageUrl, category } = req.body;
    const data = await pool.query(
      "INSERT INTO products(name,description,brand,price,imageUrl,category) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;",
      [name, description, brand, price, imageUrl, category]
    );

    res.send(data.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateProductById = async (req, res, next) => {
  try {
    const { name, description, brand, price, category } = req.body;
    const data = await pool.query(
      "UPDATE products SET name=$1, description=$2, brand=$3, price=$4, imageUrl$=5, category=$6 WHERE id=$7 RETURNING *;",
      [name, description, brand, price, imageUrl, category, req.params.id]
    );
    res.send(data.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteProductById = async (req, res, next) => {
  try {
    await pool.query("DELETE FROM products WHERE id=$1", [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addProductImage = async (req, res, next) => {
  try {
    const imgurl = req.file.path;

    const data = await pool.query(
      "UPDATE products SET imageUrl=$1 WHERE id=$2 RETURNING *;",
      [imgurl, req.params.id]
    );

    res.send(data.rows[0]);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const productsHandler = {
  getAllProducts,
  getProductById,
  createProducts,
  updateProductById,
  deleteProductById,
  addProductImage,
};

export default productsHandler;
