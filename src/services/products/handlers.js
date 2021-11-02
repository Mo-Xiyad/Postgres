import pool from "../../db/connect.js";

const getAll = async (_req, res, _next) => {
  try {
    const data = await pool.query("SELECT * FROM users ORDER BY id ASC;");
    res.send(data.rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getById = async (req, res, _next) => {
  try {
    const data = await pool.query("SELECT * FROM users WHERE id=$1", [
      req.params.id,
    ]);

    if (data.rows.length === 0) {
      res.status(400).send("User not found");
    } else {
      res.send(data.rows[0]);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createUser = async (req, res, _next) => {
  try {
    const { name, email, last_name } = req.body;
    const data = await pool.query(
      "INSERT INTO users(name,last_name,email) VALUES($1,$2,$3) RETURNING *;",
      [name, last_name, email]
    );

    res.send(data.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUserById = async (req, res, next) => {
  try {
    const { name, last_name, email } = req.body;
    const data = await pool.query(
      "UPDATE users SET name=$1,last_name=$2,email=$3 WHERE id=$4 RETURNING *;",
      [name, last_name, email, req.params.id]
    );
    res.send(data.rows[0]);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    await pool.query("DELETE FROM users WHERE id=$1", [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const usersHandler = {
  getAll,
  getById,
  createUser,
  updateUserById,
  deleteUserById,
};

export default usersHandler;
