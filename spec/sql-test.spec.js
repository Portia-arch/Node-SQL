const {addNewVisitor} = require('../src/node-script')

describe("node sql", function() {
    

    it("save data to the database", async function(done) {

        let addthings = await addNewVisitor(2, 'Nhlanhla Ngobese', 16, '12/04/2019', '12:30', 'Lwazi', 'Oh la la')

        expect(addthings[0].ID).toEqual(2)
        expect(addthings[0].Visitor_Name).toEqual('Nhlanhla Ngobese')
        expect(addthings[0].Visitor_Age).toEqual(16)
        expect(addthings[0].Date_Of_Visit).toEqual('12/04/2019')
        expect(addthings[0].Time_Of_Visit).toEqual('12:30')
        expect(addthings[0].Assistant).toEqual('Lwazi')
        expect(addthings[0].Comments).toEqual('Oh la la')

        done()
    })

})