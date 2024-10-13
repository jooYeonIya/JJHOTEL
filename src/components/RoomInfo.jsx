import { useEffect, useState } from "react"

export default function RoomInfo({ roomId, reservationInfo }) {
  const [room, setRoom] = useState(null)

  useEffect(() => {
    getRoomInfo(roomId).then(setRoom)
  }, [roomId])

  const getTotalPrice = () => {
    if (room && reservationInfo) {
      const roomPrice = Number(room.price.replace(/,/g, ""))
      return roomPrice * Number(reservationInfo.roomCount)
    }
    return 0
  }

  if (!room) return <p>Loading...</p>

  return (
    <>
      이용 날짜 : {reservationInfo.checkInDate.toLocaleDateString()} - {reservationInfo.checkOutDate.toLocaleDateString()}
      객실 타입 : {room.name}
      객실 갯수 : {reservationInfo.roomCount}
      인원 : {reservationInfo.customCount}
      금액 : {getTotalPrice()}
    </>
  )
}

async function getRoomInfo(roomId) {
  const mockRoom = { 
    name: "Deluxe", 
    price: "80,000"
  }
  return mockRoom
}