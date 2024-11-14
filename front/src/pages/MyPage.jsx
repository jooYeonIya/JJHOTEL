import axios from "axios"
import { useState } from "react"
import CustomButton from "../components/CustomButton"
import Header from "../components/Header"
import TitleLabel from "../components/TitleLabel"
import ReservationInfo from "../components/ReservationInfo"

export default function MyPage() {
  const [isClicked, setIsClicked] = useState(false)
  const [noData, setNoData] = useState(false)
  const [reservationList, setReservationList] = useState([])

  const checkReservation = () => {
    axios.get("http://localhost:8080/guest/reservation/check", { withCredentials: true})
    .then((response) => {
      if (response.data.length > 0) {
        setIsClicked(true)
        setNoData(false)
        setReservationList(response.data)
      } else {
        setIsClicked(true)
        setNoData(true)
      }
    })
  }

  return (
    <>
      <Header isEvent={true} />
      <div className="container">
        <CustomButton title="예약 내역 확인" onClicked={checkReservation} />
        <br />
        <CustomButton title="로그아웃" />
        <br />
        {isClicked && reservationList.map((data, index) => (
          <ReservationInfo key={index} reservation={data} />))}
        {isClicked && noData && <TitleLabel title="" subTitle="예약 내역이 없습니다" />}
      </div>
    </>
  )
}