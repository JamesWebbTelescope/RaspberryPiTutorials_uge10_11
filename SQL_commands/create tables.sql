CREATE TABLE Students (
    studentID int not null AUTO_INCREMENT,
    firstname varchar(55) not null,
    lastname varchar(55) not null,
    status varchar(55) not null DEFAULT 'Active',
    PRimary key (studentID)
);

CREATE TABLE Tutorials(
tutorialID int not null AUTO_INCREMENT,
name varchar(55) not null,
link varchar(55) not null,
PRimary key (tutorialID)
);