// require('dotenv').config();
const {Pool} = require("pg");
const pool = new Pool({
    user: "user",
    localhost: "localhost",
    database: "db",
    password: "pass",
    port: 5432
});

// pool.connect()

// Pool.query("Create Table visitors(ID SERIAL PRIMARY KEY, Visitor_Name VARCHAR(100), Visitor_Age INTEGER, Date_Of_Visit DATE, Time_Of_Visit TIME, Assistant_Name VARCHAR(100), Comments VARCHAR(225))", 
// function(error, results) {
//     if (error)  {
//         throw error;
//     }
//     console.log(results)
// });

const addNewVisitor = async (ID, Name, Age, Date, Time, Assistant, Comments) => {

    const sql = 'INSERT INTO Visitors(ID, Visitor_Name, Visitor_Age, Date_Of_Visit, Time_Of_Visit, Assistant_Name, Comments) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const data = [ID, Name, Age, Date, Time, Assistant , Comments]

try {
    results = await pool.query(sql, data)        
        console.log(results.rows);
} catch (error) {
        console.log(error);
}   
};

// addNewVisitor(2, 'Nhlanhla Ngobese', 16, '12/04/2019', '12:30', 'Lwazi', 'Oh la la');
// addNewVisitor(1, 'Busisiwe Mkhabela', 25, '12/06/2019', '09:00', 'Tadiwa', 'Yey!!');
// addNewVisitor(3, 'Mbali Thusini', 19, '12/01/2019', '09:50', 'Tshepy', 'where');
// addNewVisitor(5, 'Nqobile Mkhize', 31, '12/12/2019', '08:30', 'Wandile', 'Can I go home already');
// addNewVisitor(4, 'Sphesihle Buthelezi', 11, '12/08/2019', '10:30', 'Weston', 'Who knew!!');

const listVisitors = async () => {

    const sql = 'Select ID, Visitor_Name FROM Visitors';

try {
    results = await pool.query(sql)
      
        console.log(results.rows);
        // pool.end();
} catch (error) {
    console.log(error);
}    

};

// listVisitors();


const deleteVisitor = async(ID) => {

    const sql = 'DELETE FROM Visitors WHERE ID= $1';
    const data = [ID]

try {
    results = await pool.query(sql, data,)
        
        console.log(results.rows);
        // pool.end();

} catch (error) {
    console.log(error);
}    
};

// deleteVisitor(1);

const updateVisitor = async (ID, Name, Age, Date, Time, Assistant, Comments) => {

    const sql = 'UPDATE Visitors SET Visitor_Name= $2, Visitor_Age= $3, Date_Of_Visit= $4, Time_Of_Visit= $5, Assistant_Name= $6, Comments= $7 Where ID= $1'
    const data = [ID, Name, Age, Date, Time, Assistant, Comments]

   try {
       results = await pool.query(sql, data)
        //    if (error) {
        //        throw error
        //    };
           console.log(results.rows);
           // pool.end();
   } catch (error) {
       console.log(error);
   } 
};

// updateVisitor(2, 'Yolanda Radebe', 24, '02/03/2017', '12:06', 'Sbonelo', 'Im tired')

const viewVisitor = async(ID) => {

    const sql = 'SELECT * FROM Visitors WHERE ID= $1 ';
    const data = [ID];

try {
    results = await pool.query(sql, data)
    
        console.log(results.rows)
        // pool.end();

} catch (error) {
    console.log(error);
}    
};

// viewVisitor(2)

const dropVisitor = async(ID) => {

    const sql = 'DELETE FROM Visitors';
    const data = [ID]

try {
    results = await pool.query(sql)
        
        console.log(results.rows);
        pool.end();

} catch (error) {
    console.log(error)
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
}
