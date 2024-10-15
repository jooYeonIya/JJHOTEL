import { useEffect, useState } from "react"
import axios from "axios"

export default function RoomInfo({ roomId, reservationInfo, onChangeTotalPrice }) {
  const [room, setRoom] = useState(null)

  useEffect(() => {
    getRoomInfo(roomId)
  }, [roomId])

  async function getRoomInfo(roomId) {
    axios.post("http://localhost:3003/roomDescription", { roomId })
    .then(res => {
      let room = res.data[0]
      setRoom(room)
    })
  }

  const getTotalPrice = () => {
    if (room && reservationInfo) {
      const roomPrice = Number(room.price)
      const roomCount = Number(reservationInfo.roomCount)
      const nights = reservationInfo.checkOutDate.getDate() - reservationInfo.checkInDate.getDate();
      const totalPrice = roomPrice * roomCount * nights
      onChangeTotalPrice(totalPrice)
      return totalPrice
    }
    return 0
  }

  if (!room) return <p>Loading...</p>

  return (
    <>
      이용 날짜 : {reservationInfo.checkInDate.toLocaleDateString()} - {reservationInfo.checkOutDate.toLocaleDateString()}
      객실 타입 : {room.roomName}
      객실 갯수 : {reservationInfo.roomCount}
      인원 : {reservationInfo.customCount}
      금액 : {getTotalPrice().toLocaleString()}
    </>
  )
}