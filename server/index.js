
const express= require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cors = require("cors")
const app = express()

/*
const db = mysql.createPool(
  {
    host: "localhost",
    user: "root",
    password: "tomato1349",
    database: "crud"

  }
)
*/

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "tomato1349",
    database: "test"

  }
)

app.use(cors())
app.use(express.json() )
app.use( bodyParser.urlencoded({ extended: true }))

quotes= (_v) => { return '"' + _v + '"'}

app.post("/test/user", (req,res) => {

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password


    console.log("POST: " + name + " " + " " + email + " " + password)
    // CREATE THE mysql command
    let sql = "insert into user(name,email,password) values("
    sql += quotes( name) + ","
    sql += quotes( email )+ ','
    sql += quotes( password )+ ')'
    console.log( sql )
    
    // Execute the mysql command 
    db.query( sql ,[name,password], (err,result) =>
    {
          console.log("sql inserted: ") 
          console.log( sql )
          console.log('inserted: ' + name + "  " +  password ) 
  
     })

     res.send("got " + name + " " + email + password)
     
    
 })

 app.get('/test/getusers', (req,res) =>{
      const sql = "select name,email,password from user order by name"
      db.query(sql, (err,result) =>{

         res.send( result )

      })

 })
 
 app.get("/test/category" , (req,res) => {

   const sql = "select label, value from category order by label"
   db.query(sql, (err,result) => {
      console.log(" getting category table ")
      console.log( result )

      res.send( result )  
  })


})

app.get("/test/resource" , (req,res) => {

  const sql = "select label, value from resource  order by label"
  db.query(sql, (err,result) => {
     console.log(" getting resource table ")
     console.log( result )

     res.send( result )  
 })


})


app.get('/', (req,res) => {

  res.send("<b>Working!</b>")

})


app.get('/test/user2', (req,res) => {

  res.send("<b>test/user works</b>")

})



app.post("api/insert" , (req,res)=>{


     const fname = req.body.fname
     const lname = req.body.lname
     const email = req.body.email
     const password = req.body.password
     console.log("/api/insert works")
//     res.send("/api/insert works:" + fname )
//     console.log("api/insert:" + fname + " " + lname + " " + email + " " + password )
      const sqlInsert= "insert into member(fname,lname,email,password) values('?','?','?','?')"

      db.query( sqlInsert, [fname,lname,email,password] , (err,result)=>{

             console.log( err)

     })

})



// Create (CRUD)
app.post("/api/create" , (req,res)=>{

    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const password = req.body.password
    
    let sql = "insert into member(fname,lname,email,password) values("
    sql += quotes( fname) + ','
    sql += quotes( lname)+ ','
    sql += quotes( email) + ','
    sql += quotes( password) + ')'

    
    db.query( sql ,[fname,lname,email,password], (err,result) =>
    {
          console.log("sql inserted: ") 
          console.log( sql )
          

          console.log('inserted: ' + fname + "  " + lname + "  " + email + "  "+ password) 

     })
    
    res.send("/api/post works"  + req.body.fname )

})

//  Read   (CRUD)
app.get("/api/read" , (req,res) => {

    const sql = "select * from member order by lname asc"
    db.query(sql, (err,result) => {

        console.log( result )
        res.send( result )  
    })


})


// Update (CRUD)
app.post("/api/update" , (req,res)=>{
 
  const fname = req.body.fname
  const lname = req.body.lname
  const email = req.body.email
  const password = req.body.password


  let sql = 'update member set '
  sql += "fname = " + quotes(fname) + ","
  sql += "lname=" + quotes(lname) + ","
  sql += "email=" + quotes(email) + ","
  sql += "password=" +  quotes(password) + " "
  sql += "where email= " + quotes(email)

  console.log( sql )
  
   db.query( sql , (err,result) => {
         
       console.log( sql )
       console.log( result )    

  })


})


// Deletr (CRUD)
app.post("/api/delete" , (req,res)=>{
 
  const email = req.body.email
  sql = "delete from member where email = " + quotes(email)
  console.log( sql)

  db.query( sql , (err,result) => {
         
       console.log( sql )
       console.log( result )    

  })

    res.send("/api/delete works"  + email )

})

app.listen(3001, () =>{

    console.log("running on port #3001")

})


