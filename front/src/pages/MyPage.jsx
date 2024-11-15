import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../components/AuthContext"
import CustomButton from "../components/CustomButton"
import Header from "../components/Header"
import TitleLabel from "../components/TitleLabel"
import ReservationInfo from "../components/ReservationInfo"

export default function MyPage() {
  const [reservationState, setReservationState] = useState({
    isClicked: false,
    hasData: false,
    isCanceledCheck: false,
    reservationList: []
  })
  const { doLogout } = useAuth()
  const navigate = useNavigate()

  const checkReservation = (isCanceled) => {
    axios.get(`http://localhost:8080/guest/reservation/check/${isCanceled}`, { withCredentials: true })
      .then((response) => {
        setReservationState({
          isClicked: true,
          hasData: response.data.length > 0,
          isCanceledCheck: isCanceled,
          reservationList: response.data
        })
      })
  }

  const logout = () => {
    axios.get("http://localhost:8080/guest/logout", { withCredentials: true })
    .then(() => {
      doLogout()
      navigate("/")
    })
  }

  return (
    <>
      <Header isEvent={true} />
      <div className="container">
        <CustomButton title="예약 내역 확인" onClicked={() => checkReservation(false)} />
        <br />
        <CustomButton title="취소 내역 확인" onClicked={() => checkReservation(true)} />
        <br />
        <CustomButton title="로그아웃" onClicked={logout} />
        <br />
        {reservationState.isClicked && reservationState.hasData ? (
          reservationState.reservationList.map((data, index) => (
            <ReservationInfo key={index} reservation={data} isCanceld={reservationState.isCanceledCheck}/>
          ))
        ) : (
          reservationState.isClicked && <TitleLabel title="" subTitle="이력이 없습니다" />
        )}
      </div>
    </>
  )
}