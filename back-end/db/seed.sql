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


INSERT INTO store (name, price, image, category) VALUES 
('Manchester United KIT', 89, 'https://tinyurl.com/y599xw69', 'Jersey' ),
('Lakers KIT', 80, 'https://tinyurl.com/p76tw2ea', 'Jersey'),
('Madrid KIT', 78, 'https://tinyurl.com/37uc44s4', 'Jersey'),
('Brooklyn Nets Kit', 86, 'https://tinyurl.com/5t4w4fdh', 'Jersey'),
('Liverpool KIT', 60, 'https://tinyurl.com/2hm8fxnf', 'Jersey'),
('Boston Celtics KIT', 60, 'https://tinyurl.com/26w6ym9u', 'Jersey'),
('Barcelona KIT', 60, 'https://tinyurl.com/5n9bxera', 'Jersey'),
('Golden State Warriors KIT', 80, 'https://tinyurl.com/2p8ys3p6', 'Jersey'),
('Bayern Munchen KIT', 75, 'https://tinyurl.com/2p8bh8nj', 'Jersey'),
('76 Sixers KIT', 80, 'https://tinyurl.com/yuckte2k', 'Jersey'),
('As Roma KIT', 50, 'https://tinyurl.com/mvdcpb48', 'Jersey'),
('Lebron 19', 110, 'https://tinyurl.com/mr3fsjt8', 'Shoes'),
('Air Jordan 11', 450, 'https://tinyurl.com/mr3fsjt8', 'Shoes'),
('Nike HyperVenom', 220, 'https://tinyurl.com/c62v4cwt', 'Shoes'),
('Legendary Jordan 1', 437500, 'https://tinyurl.com/3ff4u74b', 'Shoes'),
('Adidas Predator', 300, 'https://tinyurl.com/2p9bm86m', 'Shoes'),
('Kyrie 6', 120, 'https://tinyurl.com/bdhnddbw', 'Shoes'),
('Lotto', 100, 'https://tinyurl.com/2p8t8ue2', 'Shoes'),
('Nike Phantom', 130, 'https://tinyurl.com/4mycspk2', 'Shoes');