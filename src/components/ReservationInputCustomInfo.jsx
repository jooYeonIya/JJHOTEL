import { useLocation } from "react-router-dom"
import { titles } from "../text/titles"
import TitleLabel from "./TitleLabel"
import RoomInfo from "./RoomInfo"

export default function ReservationInputCustomInfo() {
  const location = useLocation()
  const roomId = location.state.roomId
  const reservationInfo = location.state.reservationInfo

  return (
    <>
      <TitleLabel title={titles.inputCustomInfo.title} subTitle={titles.inputCustomInfo.subTitle} />
      <RoomInfo roomId={roomId} reservationInfo={reservationInfo} />
    </>
  )
}