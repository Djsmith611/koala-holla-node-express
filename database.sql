CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (250) NOT NULL,
	"favoriteColor" VARCHAR (100) NOT NULL,
	"age" INT NOT NULL,
    "readyToTransfer" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR (250)
);

INSERT INTO "koalas" 
	("name", "favoriteColor", "age", "readyToTransfer", "notes") 
VALUES 
    ('Scotty', 'Red', 4, true, 'Born in Guatemala'),
    ('Jean ', 'Green', 5, true, 'Allergic to lots of lava'),
    ('Ororo ', 'Yellow', 7, false, 'Loves listening to Paula (Abdul)'),
    ('K''Leaf', 'Purple', 15, false, 'Never refuses a treat.'),
    ('Charlie', 'Orange', 9, true, 'Favorite band is Nirvana'),
    ('Betsy', 'Blue', 4, true, 'Has a pet iguana');

