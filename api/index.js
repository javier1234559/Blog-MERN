const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")


//config
dotenv.config()
app.use(express.json());


//connect to database
main().then(console.log("Connected is successsful")).catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

//api 
app.use("/api/auth",authRoute);

app.get('/', (req, res) => {
  console.log("sdfsdf")
})
// app.get('/', (req, res) => {
//   console.log("sdfsdf")
// })


//chay server
app.listen("3001",() =>{
    console.log("Backend is running ")
})