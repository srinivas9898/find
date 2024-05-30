let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/employees",async(req,res)=>{
    let employees = await Employee.find();
    //.distinct("gender");
    //.select("country-_id").sort("country");
    //.and([{country:"china"},{gender:"Male"},{department:"Training"},]).count();
    //.select(["firstname","gender","country",]);
    //.sort("country");
    //.and([
        // {country:"Russia"},
       // {gender:"Male"},
     //   {age:{$gte:20,$lte:50}},
   // ]);
    //limit(200).skip(500);
    res.json(employees);
});
app.listen(4567,()=>{
    console.log("Listening to port 4567");
});

let employeeSchema = new mongoose.Schema({
    
id:Number,
firstName:String,
lastName:String,
email:String,
gender:String,
age:Number,
department:String,
country:String,
profilePic:String,
salary:Number,

});

let Employee = new mongoose.model("employee",employeeSchema);

let connectToMongoDB = async()=>{
   try{
    mongoose.connect("mongodb+srv://srinivas:srinivasg@srinivas123.tvzse0v.mongodb.net/reliance?retryWrites=true&w=majority&appName=srinivas123");
      console.log("Connect to MDB successfully");
   }catch(err){
    console.log("Unable to connect to MDB");
   }
};

connectToMongoDB();