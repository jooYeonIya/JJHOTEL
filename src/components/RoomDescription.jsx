import { useLocation } from "react-router-dom"

export default function RoomDescription() {
  const location = useLocation()
  const roomId = location.state?.roomId

  return(
    <>
      <p>{roomId}</p>
    </>
  )
}