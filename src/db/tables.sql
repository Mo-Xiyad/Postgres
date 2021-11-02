-- drop (delete table)
-- DROP TABLE users
-- DROP TABLE products


-- create users table

CREATE TABLE IF NOT EXISTS
	products(
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name VARCHAR(50) NOT NULL,
		description VARCHAR(100) NOT NULL,
		brand VARCHAR(50) NOT NULL,
		price INTEGER NOT NULL,
		category VARCHAR(50) NOT NULL,
		created_at TIMESTAMPTZ DEFAULT NOW(),
		updated_at TIMESTAMPTZ DEFAULT NOW()
	);

