import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { titles } from "../text/titles"
import TitleLabel from "../components/TitleLabel"
import RoomInfo from "../components/RoomInfo"
import CustomInfo from "../components/CustomInfo"
import Header from "../components/Header"
import axios from "axios"
import "../css/ReservationInputCustomInfo.css"

export default function ReservationInputCustomInfo() {
  const location = useLocation()
  const navigate = useNavigate()
  const roomId = location.state.roomId
  const reservationInfo = location.state.reservationInfo
  const [totalPrice, setTotalPrice] = useState(0)
  const [loading, setLoading] = useState(false)

  const saveRservation = async (customerInfo) => {
    setLoading(true)
    const roomReservationDto = {
      roomId: roomId,
      guestEmail: customerInfo.email,
      checkInDate: reservationInfo.checkInDate,
      checkOutDate: reservationInfo.checkOutDate,
      guestCount: reservationInfo.guestCount,
      reservationDate: reservationInfo.reservationDate,
      totalPrice: totalPrice,
      roomCount: reservationInfo.roomCount
    }

    let response = await axios.post("http://3.35.14.52:8080/reservation", roomReservationDto, { withCredentials: true })  

    if (response.status == 200) {
      alert(`예약되었습니다. 예약번호는 ${response.data} 입니다`)
      navigate('/')
    }
  }

  const getTotalPrice = (price) => {
    setTotalPrice(price)
  }

  if (loading) {
    return <> {loading ? "전송 중..." : "이메일 전송"} </>
  }

  return (
    <>
      <Header isEvent={true} />
      <div className="container">
        <TitleLabel title={titles.inputCustomInfo.title} subTitle={titles.inputCustomInfo.subTitle} />
        <RoomInfo roomId={roomId} reservationInfo={reservationInfo} onChangeTotalPrice={getTotalPrice} />
        <CustomInfo onSave={saveRservation} />
      </div>
    </>
  )
}