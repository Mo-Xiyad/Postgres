import fs from "fs-extra";
import path from "path";
import pool from "./connect.js";

const tablesFilePath = path.join(process.cwd(), "src/db/tables.sql");

const createDefaultTables = async () => {
  try {
    // Read the tables.sql file as buffer
    const buffer = await fs.readFile(tablesFilePath);

    // Convert buffer to string
    const tablesSQLQuery = buffer.toString();
    // execute query

    await pool.query(tablesSQLQuery);
    console.log(`✅ Default tables are created.`);
  } catch (error) {
    console.log(error);
  }
};

export default createDefaultTables;
