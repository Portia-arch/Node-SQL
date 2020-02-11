
describe("node sql", function() {   

    const {
      addNewVisitor,
      updateVisitor,
      listVisitors,
      deleteVisitor,
      dropVisitors,
      viewVisitor
    } = require("../src/node-script");

    let obj = {
      date_of_visit: new Date("01/27/2019")
    }

    it("save data to the database", async function(done) {

      objDetails = await addNewVisitor("Nhlanhla Ngobese", 23, "01/27/2019", "11:22:00", "Wandile", "Yey!!");
      await addNewVisitor("Portia Mkhabela", 21, "01/27/2019", "09:42:00", "Hloni", "I don't listen to anyone!!");
      await addNewVisitor("Sihle Moagi", 19, "01/27/2019", "15:21:00", "SB", "Umlungu wam uthi...");
      await addNewVisitor("Wandile Nxumalo", 20, "01/27/2019", "10:33:00", "Tshepi", "It's me again");

      expect(objDetails[0].visitor_name).toEqual("Nhlanhla Ngobese");
      expect(objDetails[0].visitor_age).toEqual(23);
      expect(objDetails[0].date_of_visit).toEqual(obj.date_of_visit);
      expect(objDetails[0].time_of_visit).toEqual("11:22:00");
      expect(objDetails[0].assistant_name).toEqual("Wandile");
      expect(objDetails[0].comments).toEqual("Yey!!");

      done();

    });

    it("should be able to list all visitors", async function(done){
    
      let list = await listVisitors();

      expect(list[0].visitor_name).toEqual("Nhlanhla Ngobese");
      expect(list[0].id).toBeDefined();
      
      expect(list[1].visitor_name).toEqual("Portia Mkhabela");
      expect(list[1].id).toBeDefined();

      expect(list[2].visitor_name).toEqual("Sihle Moagi");
      expect(list[2].id).toBeDefined();
        
      done();

    });

    it("should be able to delete a visitor", async function(done){

    let deleted = await deleteVisitor(3);

    expect(deleted.command).toBe('DELETE');
      expect(deleted.rowCount).toBe(1);
     done();
    });

    it("should be able to update visitor's details", async function (done) {

    let update = await updateVisitor(2, "LEBOHANG", 22, "01/01/2020", "11:22:00", "Assistant", "Comments");

    expect(update.command).toEqual('UPDATE');
    expect(update.rowCount).toEqual(1);
    done();
    }); 
  
    it("should be able to view a visitor", async function (done) {

     let view =  await viewVisitor(4);
       expect(view[0].visitor_name).toEqual("Wandile Nxumalo");
       expect(view[0].visitor_age).toEqual(20);
       expect(view[0].date_of_visit).toEqual(obj.date_of_visit);
       expect(view[0].time_of_visit).toEqual("10:33:00");
       expect(view[0].assistant_name).toEqual("Tshepi");
       expect(view[0].comments).toEqual("It's me again");
        done();
    }); 
  
    it("should be able to delete all visitors", async function (done) {
      expect(await dropVisitors()).not.toBeNull();
       done();
  });
   
});