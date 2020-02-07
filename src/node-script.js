// require('dotenv').config();
const { Pool } = require("pg");
const pool = new Pool({
  user: "user",
  localhost: "localhost",
  database: "db",
  password: "pass",
  port: 5432
});
;

const addNewVisitor = async function(
  Name,
  Age,
  date,
  Time,
  Assistant,
  Comments
) {
  
  try {

    const sql =
      "INSERT INTO Visitors(Visitor_Name, Visitor_Age, Date_Of_Visit, Time_Of_Visit, Assistant_Name, Comments) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *";
    const data = [Name, Age, date, Time, Assistant, Comments];

     let results =  await pool.query(sql, data);
    return results.rows;

        } catch (error) {
            console.log(error);
        }
};


const listVisitors = async function() {
  const sql = "Select ID, Visitor_Name FROM Visitors";

  try {
    results = await pool.query(sql);
    return results.rows;

  } catch (error) {
    console.log(error);
  }
};


const deleteVisitor = async function(ID) {
  const sql = "DELETE FROM Visitors WHERE ID= $1";
  const data = [ID];

  try {
    results = await pool.query(sql, data);
    return results.rows;

  } catch (error) {
    console.log(error);
  }
};


const updateVisitor = async function(
  ID,
  Name,
  Age,
  Date,
  Time,
  Assistant,
  Comments
)  {
  const sql =
    "UPDATE Visitors SET Visitor_Name= $2, Visitor_Age= $3, Date_Of_Visit= $4, Time_Of_Visit= $5, Assistant_Name= $6, Comments= $7 Where ID= $1";
  const data = [ID, Name, Age, date, Time, Assistant, Comments];

  try {
    results = await pool.query(sql, data);
   
    return results.rows;
    
  } catch (error) {
    console.log(error);
  }
};


const viewVisitor = async function(ID) {
  const sql = "SELECT * FROM Visitors WHERE ID= $1 ";
  const data = [ID];

  try {
    results = await pool.query(sql, data);

    return results.rows;
 
  } catch (error) {
    console.log(error);
  }
};


const dropVisitor = async  function() {
  const sql = "DELETE FROM Visitors";

  try {
    results = await pool.query(sql);

    return results.rows;
    // pool.end();
  } catch (error) {
    console.log(error);
  }
};
// dropVisitor(2, 3, 4, 5)

module.exports = {
  addNewVisitor,
  updateVisitor,
  listVisitors,
  deleteVisitor,
  dropVisitor,
  viewVisitor
};
