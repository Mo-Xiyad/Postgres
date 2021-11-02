INSERT INTO users(name,last_name,email) VALUES('Abnet','Nega','abnet_nega@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('adam','Belahouane','adam_belahouane@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Bogdan','Birau','bogdan_birau@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Cian','Markwick-Ward','cian_markwick-ward@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Claudia','Smriglio','claudia_smriglio@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Daniel','Kolobanov','daniel_kolobanov@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Egbedi','Ejiroghene','egbedi_ejiroghene@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Emilian','Kasemi','emilian_kasemi@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Foram','Patel','foram_patel@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('guillermo','fragachan','guillermo_fragachan@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Hilary','Ogalagu','hilary_ogalagu@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Juha-Tapio','Turpeinen','juha-tapio_turpeinen@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Mohamed','Xiyad','mohamed_xiyad@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Paul','Murray','paul_murray@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Rashmi','Shantayya','rashmi_shantayya@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Wako','Anindo','wako_anindo@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Jonathan','Ruto','jonathan_ruto@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Lorenzo','Giorgini','lorenzo_giorgini@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Martyna','Sowińska','martyna_sowińska@strive.school');
 INSERT INTO users(name,last_name,email) VALUES('Zukhriddin','Akhmedov','zukhriddin_akhmedov@strive.school');


-- insert into users table  and return inserted row

INSERT INTO
	users(
		name,
		last_name,
		email
	)
	VALUES(
		'emilian',
		'kasemi',
		'emilian@gmail.com' -- this has to be unique!
	) RETURNING *;



-- get all users  with all columns

SELECT * FROM users;

-- get all users with selected columns

SELECT id,name,last_name FROM users;


-- get user with id = 3

SELECT * from users WHERE id=3;


-- you can chain AND and OR conditions

SELECT * from users WHERE name='ubeyt' OR id=3;



-- get all users where email includes e letter

SELECT * FROM users WHERE email LIKE '%e%' ;

-- get all users where name ends with O

SELECT * FROM users WHERE name LIKE '%o';


-- get all users where name starts with A

SELECT * FROM users WHERE name LIKE 'A%';


-- rename name and last_name columns on the fly  (ALIAS)


SELECT id ,name AS student_name ,last_name AS student_last_name FROM users;


-- count all students

SELECT count(*) from users;


-- ORDER BY id desc

SELECT * FROM users ORDER BY id DESC;

-- ORDER BY id asc

SELECT * FROM users ORDER BY id ASC;

-- update a record with id

UPDATE users 
	SET 
		name='UBEYT',
		last_name='DEMIR',
		email='ubeytdemir.dev@gmail.com'
		WHERE id=1 
		RETURNING*;



--- delete user by id


DELETE FROM users WHERE id=1;


-- delete user with like operator 


DELETE FROM users WHERE name LIKE '%o';