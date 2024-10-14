import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'
import nodemailer from 'nodemailer'

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
                        sendEamil(id, customerInfo, formattedCheckInDate, formattedCheckOutDate)
                        return res.status(200).send({id});
                    }
                })
        }
    })
})

const sendEamil = (id, customerInfo, checkInDate, checkOutDate) => {   
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'conn0204@gmail.com',
        pass: 'tuwd tbdr aucd ohdb'
      }
    }) 
    
    const mailOptions = {
      from: 'conn0204@gmail.com',
      to: `${customerInfo.email}`,
      subject: '예약 확인 메일입니다.',
      html: `
      <p>${customerInfo.name} 님 안녕하세요. JJ 호텔입니다.</p>
      <br>
      <p>이용 날짜: <strong>${checkInDate} ~ ${checkOutDate}</strong></p>
      <p>예약 번호: <strong>${id}</strong></p>
      <br>
      <p>저희 호텔을 이용해주셔서 감사합니다. 예약이 완료되었습니다.</p>
    `
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log("success")
      }
    })
  }

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