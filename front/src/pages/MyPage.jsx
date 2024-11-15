import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../components/AuthContext"
import CustomButton from "../components/CustomButton"
import Header from "../components/Header"
import TitleLabel from "../components/TitleLabel"
import ReservationInfo from "../components/ReservationInfo"
// import GuestInfo from "./GuestInfo"

export default function MyPage() {
  const [isClicked, setIsClicked] = useState(false)
  const [noData, setNoData] = useState(false)
  const [reservationList, setReservationList] = useState([])
  const [isGuest, setIsGuest] = useState(false)
  const [guestInfo, setGuestInfo] = useState([])
  const { doLogout } = useAuth()
  const navigate = useNavigate()


  const checkReservation = () => {
    axios.get("http://localhost:8080/guest/reservation/check", { withCredentials: true })
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

  const getMyInfo = () => {
    axios.get("http://localhost:8080/guest/myinfo", { withCredentials: true })
    .then((response) => {
      if (Object.keys(response.data).length > 0) {
        setIsGuest(true)
        setGuestInfo(response.data)
        navigate('/myinfo', { state: { guestInfo: response.data } })
      } else {
        setIsGuest(false)
      }
    })
  }

  const logout = () => {
    axios.get("http://localhost:8080/guest/logout", { withCredentials: true })
    .then(() => {
      doLogout()
      navigate('/')  
    })
  }

  return (
    <>
      <Header isEvent={true} />
      <div className="container">
        <CustomButton title="예약 내역 확인" onClicked={checkReservation} />
        <br />
        <CustomButton title="개인정보 확인" onClicked={getMyInfo} />
        <br />
        <CustomButton title="로그아웃" onClicked={logout} />
        <br />
        {isClicked && reservationList.map((data, index) => (
          <ReservationInfo key={index} reservation={data} />))}
        {isClicked && noData && <TitleLabel title="" subTitle="예약 내역이 없습니다" />}
      </div>
    </>
  )
}