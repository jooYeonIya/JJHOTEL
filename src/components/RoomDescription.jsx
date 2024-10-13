import { useLocation } from "react-router-dom"
import TitleLabel from "./TitleLabel"
import { useEffect, useState } from "react"

export default function RoomDescription() {
  const location = useLocation()
  const roomId = location.state?.roomId
  const [room, setRoom] = useState()

  useEffect(() => {
    getRoomInfo(roomId).then(setRoom)
  }, [roomId])

  if (!room) return <p>Loading...</p>

  return(
    <>
      <TitleLabel title={room.name} subTitle={room.description} />
    </>
  )
}

async function getRoomInfo(roomId) {
  const mockRoom = { 
    id: 1, 
    name: "Deluxe", 
    description: "도시의 전경이 어쩌구~",
    imageURL1: "src/images/facilities_dining.jpg",
    imageURL2: "src/images/about_information.jpg",
    imageURL3: "src/images/facilities_pool.jpg",
    imageURL4: "src/images/facilities_dining.jpg" }
  return mockRoom
}