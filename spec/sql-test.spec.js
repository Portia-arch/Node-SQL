const {addNewVisitor, listVisitors, deleteVisitor} = require('../src/node-script');

     const details = {
       Name: "Nhlanhla Ngobese",
       Age: 16,
       date: new Date("12/04/2019"),
       Time: "12:30:00",
       Assistant: "Lwazi",
       Comments: "Oh la la"
     };

describe("node sql", function() {   

    it("save data to the database", async function(done) {

        await addNewVisitor(details.Name, details.Age, details.date, details.Time, details.Assistant, details.Comments)
            .then(results => {

                const objDetails = results.rows

                expect(objDetails[0].Name).toBe(details.Name);
                expect(objDetails[0].Age).toBe(details.Age);
                expect(objDetails[0].Date).toEqual(details.date);
                expect(objDetails[0].Time).toBe(details.Time);
                expect(objDetails[0].Assistant).toBe(details.Assistant);
                expect(objDetails[0].Comments).toBe(details.Comments);
        });

        done();
    });

    xit("should be able to delete a visitor by ID", async function(){
        expect(await deleteVisitor(id)).toEqual(1)
    });

    xit("should be able to delete all visitors", async function(){
        expect(await dropVisitors()).toBeNull()
    });
});