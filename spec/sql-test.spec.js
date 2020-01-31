pgtest = require('pgtest');
main = require('../src/node-script');

describe('hi', function() {

pgtest.expect('INSERT INTO Visitors(ID, Visitor_Name, Visitor_Age, Date_Of_Visit, Time_Of_Visit, Assistant_Name, Comments) VALUES ($1, $2, $3, $4, $5, $6, $7)').returning(null, [2, 'Nhlanhla Ngobese', 16, '12/04/2019', '12:30', 'Lwazi', 'Oh la la']);

    pgtest.connect('foo', function(error, pool, done) {
        pool.query('INSERT INTO Visitors(ID, Visitor_Name, Visitor_Age, Date_Of_Visit, Time_Of_Visit, Assistant_Name, Comments) VALUES ($1, $2, $3, $4, $5, $6, $7)', function(error, data){
            console.log(data);
            done();
        });
    });

    pgtest.check()
})