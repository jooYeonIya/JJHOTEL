import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { titles } from "../text/titles"
import TitleLabel from "../components/TitleLabel"
import RoomInfo from "../components/RoomInfo"
import CustomInfo from "../components/CustomInfo"
import Header from "../components/Header"
import axios from "axios"

export default function ReservationInputCustomInfo() {
  const location = useLocation()
  const navigate = useNavigate()
  const roomId = location.state.roomId
  const reservationInfo = location.state.reservationInfo
  const [totalPrice, setTotalPrice] = useState(0);

  const saveRservation = async (customerInfo) => {
    let response  = await axios.post("http://localhost:3003/reservation", {roomId, reservationInfo, customerInfo, totalPrice})
    
    if (response.status == 200) {
      alert(`예약되었습니다. 예약번호는 ${response.data.id} 입니다`)
      navigate('/')
    }
  }

  const getTotalPrice = (price) => {
    setTotalPrice(price)
  }

  return (
    <>
      <Header isEvent={true}/>
      <TitleLabel title={titles.inputCustomInfo.title} subTitle={titles.inputCustomInfo.subTitle} />
      <RoomInfo roomId={roomId} reservationInfo={reservationInfo} onChangeTotalPrice={getTotalPrice}/><br />
      <CustomInfo isReservation={true} onSave={saveRservation}/>
    </>
  )
}