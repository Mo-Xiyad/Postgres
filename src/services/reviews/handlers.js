import pool from "../../db/connect.js";

const createReview = async (req, res, next) => {
  try {
    const { comment, rate } = req.body;
    const data = await pool.query(
      "INSERT INTO reviews(product_id,comment,rate) VALUES($1,$2,$3) RETURNING *;",
      [req.params.productId, comment, rate]
    );

    res.send(data.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
    next(error);
  }
};

const getAllReviewsbyProductId = async (req, res, _next) => {
  try {
    const data = await pool.query(
      "SELECT * FROM reviews WHERE product_id=$1 ORDER BY id ASC",
      [req.params.productId]
    );

    if (data.rows.length === 0) {
      res.status(400).send("reviews not found");
    } else {
      res.send(data.rows);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getReviewsbyId = async (req, res, next) => {
  try {
    const data = await pool.query("SELECT * FROM reviews WHERE id=$1", [
      req.params.reviewId,
    ]);

    if (data.rows.length === 0) {
      res.status(400).send("reviews not found");
    } else {
      res.send(data.rows);
    }
  } catch (error) {
    res.status(400).send(error.message);
    next(error);
  }
};

const updateReviewById = async (req, res, next) => {
  try {
    const { comment, rate } = req.body;
    const data = await pool.query(
      "UPDATE reviews SET comment=$1, rate=$2 WHERE id=$3 RETURNING *;",
      [comment, rate, req.params.reviewId]
    );
    res.send(data.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const productReviewHandler = {
  createReview,
  getAllReviewsbyProductId,
  getReviewsbyId,
  updateReviewById,
};

export default productReviewHandler;
