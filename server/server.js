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

// 예약하기
app.post('/reservation', (req, res) => {
    let { roomId, reservationInfo, customerInfo, totalPrice } = req.body
    let { customCount, roomCount, checkInDate, checkOutDate, reservationDate } = reservationInfo
    let { name, email } = customerInfo

    const formattedCheckInDate = new Date(checkInDate).toISOString().slice(0, 10)
    const formattedCheckOutDate = new Date(checkOutDate).toISOString().slice(0, 10)
    const formattedReservationDate = new Date(reservationDate).toISOString().slice(0, 10)

    let selectSql = 'select * from reservation where reservationDate = ?'

    connection.query(selectSql, [formattedReservationDate], (error, results) => {
        if (error) {
            console.log(error)
        } else {
            const count = results.length + 1
            const id = `${formattedReservationDate}-${count}`

            let sql = 'INSERT INTO reservation() VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
            connection.query(sql,
                [id, roomId, formattedCheckInDate, formattedCheckOutDate, customCount, formattedReservationDate, name, email, totalPrice],
                (error, results) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log("results")
                        return res.status(200).send({id});
                    }
                })
        }
    })
})

// 전체 객실 불러오기
app.get('/rooms', function (req, res) {
    let sql = 'select * from room'
    connection.query(sql, function (error, results) {
        if (error) {
            console.log(error)
        } else {
            res.send(results)
        }
    })
})