const Pool = require("pg").Pool;
const pool = new Pool({
    user: "user",
    database: "db",
    password: "pass",
});

const addNewVisitor = (ID, Name, Age, Date, Time, Assistant, Comments) => {

    const sql = 'INSERT INTO Visitors(ID, Visitor_Name, Visitor_Age, Date_Of_Visit, Time_Of_Visit, Assistant_Name, Comments) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const data = [ID, Name, Age, Date, Time, Assistant , Comments]

    pool.query(sql, data, (error, results) => {
            if (error) {
                throw error;
            }

            console.log(results.rows);
            pool.end()
        }
    );
};

// addNewVisitor(2, 'Nhlanhla Ngobese', 16, '12/04/2019', '12:30', 'Lwazi', 'Oh la la');
// addNewVisitor(1, 'Busisiwe Mkhabela', 25, '12/06/2019', '09:00', 'Tadiwa', 'Yey!!');
// addNewVisitor(3, 'Mbali Thusini', 19, '12/01/2019', '09:50', 'Tshepy', 'where');
// addNewVisitor(5, 'Nqobile Mkhize', 31, '12/12/2019', '08:30', 'Wandile', 'Can I go home already');
// addNewVisitor(4, 'Sphesihle Buthelezi', 11, '12/08/2019', '10:30', 'Weston', 'Who knew!!');

const listVisitors = () => {

    const sql = 'Select * FROM Visitors';

    pool.query(sql, (error, results) => {
        if (error) {
            throw error
        };
        console.log(results.rows);
        pool.end();
    });

};

// listVisitors();


const deleteVisitor = ID => {

    const sql = 'DELETE FROM Visitors WHERE ID= $1';
    const data = [ID]

    pool.query(sql, data, (error, results) => {
        if (error) {
            throw error
        };
        console.log(results.rows);
        pool.end();
    });
};
// deleteVisitor();

const updateVisitor = (ID, Name, Age, Date, Time, Assistant, Comments) => {

    const sql = 'UPDATE Visitors SET Visitor_Name= $2, Visitor_Age= $3, Date_Of_Visit= $4, Time_Of_Visit= $5, Assistant_Name= $6, Comments= $7 Where ID= $1'
    const data = [ID, Name, Age, Date, Time, Assistant, Comments]

    pool.query(sql, data, (error, results) => {
        if (error) {
            throw error
        };
        console.log(results.rows);
        pool.end();
    });
}
// updateVisitor(2, 'Yolanda Radebe', 24, '02/03/2017', '12:06', 'Sbonelo', 'Im tired')

const viewVisitor = ID => {

    const sql = 'SELECT * FROM Visitors WHERE ID= $1 ';
    const data = [ID];

    pool.query(sql, data,  (error, results) => {
        if (error) {
            throw error
        };
        console.log(results.rows)
        pool.end();
    });
};
// viewVisitor(2)

const dropVisitor = ID => {

    const sql = 'DELETE FROM Visitors';
    // const data = [ID]

    pool.query(sql, (error, results) => {
        if (error) {
            throw error
        };
        console.log(results.rows);
        pool.end();
    });
};
// dropVisitor(2, 3, 4, 5)

