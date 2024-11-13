import TitleLabel from "../components/TitleLabel"
import ReservationCalendar from "../components/ReservationCalendar"
import CustomButton from "../components/CustomButton"
import Counter from "../components/Counter"
import Header from "../components/Header"

import { addDays } from "date-fns"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import "../css/Reservation.css"

function Reservation() {
  const navigate = useNavigate()
  const [reservationInfo, setReservationInfo] = useState({
    guestCount: 2,
    roomCount: 1,
    checkInDate: new Date(),
    checkOutDate: addDays(new Date(), 1),
    reservationDate: new Date()
  })

  const updateGuestCount = (count) => {
    setReservationInfo(prevState => ({
      ...prevState,
      guestCount: count
    }))
  }

  const updateRoomCount = (count) => {
    setReservationInfo(prevState => ({
      ...prevState,
      roomCount: count
    }))
  }

  const updateDate = (checkIn, checkOut) => {
    setReservationInfo(prevState => ({
      ...prevState,
      checkInDate: checkIn,
      checkOutDate: checkOut
    }))
  }

  const moveToRoomsPage = () => {
    navigate('/rooms', { state: { isFiltered: true, reservationInfo } })
  }

  return (
    <>
      <Header isEvent={true} />
      <div className="container">
        <TitleLabel title={"Reservation"} subTitle={"날짜 및 인원 선택"}></TitleLabel>
        
        <div className="calendarContainer">

          <div className="calendarSection">
            <ReservationCalendar onChangeDate={updateDate} />
          </div>
        
          <div className="calendaRightSection">
            <Counter title="인원" onChangeCounter={updateGuestCount} initCount="2" />
            <Counter title="객실" onChangeCounter={updateRoomCount} initCount="1" />
            <CustomButton title="예약하기" onClicked={moveToRoomsPage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Reservation
