-- drop (delete table)

-- DROP TABLE products
-- DROP TABLE reviews


-- create users table

CREATE TABLE IF NOT EXISTS
	products(
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name VARCHAR(50) NOT NULL,
		description VARCHAR(100) NOT NULL,
		brand VARCHAR(50) NOT NULL,
		price NUMERIC(50) NOT NULL,
		imageUrl VARCHAR(300) NULL,
		category VARCHAR(50) NOT NULL,
		created_at TIMESTAMPTZ DEFAULT NOW(),
		updated_at TIMESTAMPTZ DEFAULT NOW()
	);



		-- product_id INTEGER REFERENCES products,
CREATE TABLE IF NOT EXISTS
	reviews(
		product_id INTEGER REFERENCES products (id),
		comment VARCHAR(500) NOT NULL,
		rate INTEGER NOT NULL,
		created_at TIMESTAMPTZ DEFAULT NOW(),
		updated_at TIMESTAMPTZ DEFAULT NOW(),
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY
	);



	-- https://www.w3resource.com/PostgreSQL/foreign-key-constraint.php