const morgan = require("morgan");
const express = require("express");
const {db, Page, User} = require("./models")
const users = require("./routes/users")
// const wiki = require("./routes/wiki")

const app = express()

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
// app.use("/wiki", require("./routes/wiki"))
app.get("/users", (req,res,next)=>{
  res.send("this worked")
})


db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.get('/', (req, res) =>{
  res.send("Hello World")
})

const PORT = 1337;

const init = async () => {
  try{
  await db.sync({force:true})
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });} catch (error){
    console.log(error)
  }
}

init()
