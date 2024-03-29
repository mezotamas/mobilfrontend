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

app.post('/keresidezet', (req, res) => {
  
    dbconn()
    
    
    let parancs='SELECT * from idezet inner join kategoria on idezet_kategoria=kategoria_id where idezet.idezet_szoveg like "%'+req.body.bevitel1+'%" order by idezet_id desc'
    connection.query(parancs, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

})
app.post('/torolidezet', (req, res) => {
    dbconn()
    let parancs='DELETE FROM idezet WHERE idezet_id="'+req.body.bevitel1+'"';
    connection.query(parancs, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

})
app.post('/keresvelemeny', (req, res) => {
  
    dbconn()
    
    let f='"%'+req.body.bevitel1+'%"'
    let parancs='SELECT * from velemeny inner join idezet on idezet_id=velemeny_idezet_id inner join kategoria on idezet_kategoria=kategoria_id where velemeny_szoveg like '+f+' order by velemeny_id desc'
    connection.query(parancs, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()

})


app.get('/idezet', (req, res) => {

  dbconn()
    
    connection.query('SELECT * from idezet inner join kategoria on idezet_kategoria=kategoria_id order by idezet_id desc', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()



    
  })
  app.get('/kategoria', (req, res) => {

  dbconn()
    
    connection.query('SELECT * from kategoria', function (err, rows, fields) {
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
    
    connection.query("select * from velemeny inner join idezet on idezet_id=velemeny_idezet_id inner join kategoria on idezet_kategoria=kategoria_id order by velemeny_id desc", function (err, rows, fields) {
      if (err) 
        console.log( err)
      else{
      console.log(rows)
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
    
    connection.query("INSERT INTO velemeny  VALUES (NULL, '"+req.body.bevitel1+"',NOW(),'"+req.body.bevitelvelemenyid+"')", function (err, rows, fields) {
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