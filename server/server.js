import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '1111',
    database: 'jjhotel'
});

connection.connect()

app.listen(3003, () => console.log("ready"))

app.get('/rooms', function(req, res) {
    let sql = 'select * from room'
    connection.query(sql, function (error, results) {
        if (error) {
            console.log(error)
        } else {
            res.send(results)
        }
    })
})