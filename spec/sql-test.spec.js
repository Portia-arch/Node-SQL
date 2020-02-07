const {addNewVisitor, listVisitors, deleteVisitor} = require('../src/node-script');

     const details = {
       Name: "Nhlanhla Ngobese",
       Age: 16,
       Date: new Date("12/04/2019"),
       Time: "12:30:00",
       Assistant: "Lwazi",
       Comments: "Oh la la"
     };

describe("node sql", function() {   

    it("save data to the database", async function(done) {

        await addNewVisitor(details.Name, details.Age, details.Date, details.Time, details.Assistant, details.Comments)
            .then(function(data){

                const objDetails = data.rows

                expect(objDetails[0].Name).toEqual(details.Name);
                expect(objDetails[0].Age).toEqual(details.Age);
                expect(objDetails[0].Date).toEqual(details.Date);
                expect(objDetails[0].Time).toEqual(details.Time);
                expect(objDetails[0].Assistant).toEqual(details.Assistant);
                expect(objDetails[0].Comments).toEqual(details.Comments);
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