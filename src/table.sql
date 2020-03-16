-- CREATES TABLES ON THE DATABASE

Create Table visitors
(
    ID SERIAL PRIMARY KEY,
    Visitor_Name VARCHAR(100),
    Visitor_Age INTEGER,
    Date_Of_Visit DATE,
    Time_Of_Visit TIME,
    Assistant_Name VARCHAR(100),
    Comments VARCHAR(225)
);