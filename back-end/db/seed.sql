\c sports_stand_dev;

INSERT INTO players (name, age, team, nationality, position, prefered, image, is_idol) VALUES 
('Cristiano Ronaldo', 37, 'Manchester United', 'Portugal', 'Forward', 'Right', 'https://tinyurl.com/ysy8k9e5', true),
('Lebron James', 37, 'Lakers', 'USA', 'Forward', 'Right', 'https://tinyurl.com/4e26smt8', true),
('Lionel Messi', 35, 'Paris Saint-Germain', 'Argentina', 'Right Winger', 'Left', 'https://tinyurl.com/28y2ycth', false),
('Anthony Davis', 30, 'Lakers', 'USA', 'Center', 'Right', 'https://tinyurl.com/5n7srs6n', false),
('Bruno Fernandez', 27, 'Manchester United', 'Portugal', 'Attacking Midfielder', 'Right', 'https://tinyurl.com/2brx9wd4', false),
('Kevin Durant', 30, 'Brooklyn Nets', 'USA', 'Guard', 'Right', 'https://tinyurl.com/bdd8bpsp', false),
('Marcus Rashford', 24, 'Manchester United', 'England', 'Attacking Midfielder', 'Right', 'https://tinyurl.com/4dnjrt46', false),
('Kyrie Irving', 33, 'Brooklyn Nets', 'USA', 'Forward', 'Right', 'https://tinyurl.com/mtnz3btn', false),
('Anthony Martial', 26, 'Manchester United', 'France', 'Striker', 'Right', 'https://tinyurl.com/5xyt8n2x', false),
('Stephen Curry', 34, 'Golden State Warriors', 'USA', 'Guard', 'Right', 'https://tinyurl.com/mrys4vtj', false),
('Casemiro', 30, 'Manchester United', 'Brazil', 'Midfielder', 'Right', 'https://tinyurl.com/23b7ujwf', false),
('Ja Morant', 23, 'Memphis Grizzlies', 'USA', 'Guard', 'Right', 'https://tinyurl.com/yuvj9muc', true),
('Mohamed Salah', 30, 'Liverpool', 'Egypt', 'Right Winger', 'Left', 'https://tinyurl.com/nhbfra45', false),
('Giannis Antetokounmpo', 27, 'Milwaukee Bucks', 'Greece', 'Forward', 'Right', 'https://tinyurl.com/2syzef42', false);


INSERT INTO comments (player_id, commenter, comment, rating ) VALUES 
('1', 'Adnan', 'Cristiano Ronaldo is the GOAT', 10),
('2', 'JcPrado', 'Lebron James a.k.a the KING is the GOAT', 10),
('3', 'Mubarak', 'Messi the biggest God given talent the world has ever seen', 9),
('4', 'Sadick', 'I do not know sports but this guy looks like a nice guy', 8),
('5', 'Mason', 'Bruno is pretty average', 7),
('6', 'Olay', 'Durant, I love him', 10);
