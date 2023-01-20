const express = require('express')
var cors = require('cors')
var mysql = require('mysql')
const app = express()
const port = 22007
var connection
function dbconn() {
  connection = mysql.createConnection({
    host: '192.168.0.200',
    user: 'u53_jsVtWFL7iE',
    password: 'Gxi8wTYeGqm+76r7+=I45OKO',
    database: 's53_db'

  })
  connection.connect()
}
app.use(cors())



app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/keres', (req, res) => {
  
    dbconn()
    
    
    let parancs='SELECT * from idezet inner join kategoria on idezet_kategoria=kategoria_id where idezet.idezet_szoveg like "%'+req.body.bevitel1+'%"'
    connection.query(parancs, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

})
app.post('/keresv', (req, res) => {
  
    dbconn()
    
    
    let parancs='SELECT * from velemeny where velemeny_szoveg like "%'+req.body.bevitelv+'%"'
    connection.query(parancs, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

})


app.get('/idezet', (req, res) => {

  dbconn()
    
    connection.query('SELECT * from idezet inner join kategoria on idezet_kategoria=kategoria_id inner join velemeny on idezet_velemeny_id=velemeny_id', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })
  

  app.post('/felvitel', (req, res) => {

    dbconn()
    
    connection.query("INSERT INTO idezet  VALUES (NULL, '"+req.body.bevitel1+"',NOW(),'"+req.body.bevitel2+"' ,'"+req.body.bevitel3+"' ,'"+req.body.bevitel4+"')", function (err, rows, fields) {
      if (err) 
        console.log( err)
      else{
      console.log("Sikeres felvitel!")
      res.send("Sikeres felvitel!")}
      
    })
    
    connection.end()

    
  })
app.get('/velemenyek', (req, res) => {

    dbconn()
    
    connection.query("select * from velemeny inner join idezet on idezet_id=velemeny_idezet_id", function (err, rows, fields) {
      if (err) 
        console.log( err)
      else{
      console.log("Sikeres felvitel!")
      res.send(rows)}
      
    })
    
    connection.end()

    
  })
app.get('/statisztika1', (req, res) => {

    dbconn()
    
    connection.query("SELECT count(idezet_id) as idezetek_szama  FROM idezet", function (err, rows, fields)
     {
      if (err) 
        console.log( err)
      else{
      console.log("Sikeres felvitel!")
      res.send(rows)}
      
    })
    
    connection.end()

    
  })
 app.get('/statisztika2', (req, res) => {

    dbconn()
    
    connection.query("SELECT count(velemeny_id) as velemenyek_szama  FROM velemeny", function (err, rows, fields) {
      if (err) 
        console.log( err)
      else{
      console.log("Sikeres felvitel!")
      res.send(rows)}
      
    })
    
    connection.end()

    
  })
app.post('/velemeny', (req, res) => {

    dbconn()
    
    connection.query("INSERT INTO velemeny  VALUES (NULL, '"+req.body.bevitelvelemeny+"',NOW(),'"+req.body.bevitelvelemenyid+"')", function (err, rows, fields) {
      if (err) 
        console.log( err)
      else{
      console.log("Sikeres felvitel!")
      res.send("Sikeres felvitel!")}
      
    })
    
    connection.end()

    
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})