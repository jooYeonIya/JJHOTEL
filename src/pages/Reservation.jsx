import TitleLabel from "../components/TitleLabel"
import ReservationCalendar from "../components/ReservationCalendar"
import CustomButton from "../components/CustomButton"
import Counter from "../components/Counter"
import { addDays } from "date-fns"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Reservation() {
  const navigate = useNavigate()
  const [reservationInfo, setReservationInfo] = useState({
    customCount: 1,
    roomCount: 1,
    checkInDate: new Date(),
    checkOutDate: addDays(new Date(), 1),
    reservationDate: new Date()
  })

  const updateCustomCount = (count) => {
    setReservationInfo(prevState => ({
      ...prevState,
      customCount: count
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
      <TitleLabel title={"Reservation"} subTitle={"날짜 및 인원 선택"}></TitleLabel>
      <br />
      <ReservationCalendar onChangeDate={updateDate}/>
      <br />
      <CustomButton title="예약하기" onClicked={moveToRoomsPage} />
      <br />
      <Counter title="인원" onChangeCounter={updateCustomCount}/>
      <br />
      <Counter title="객실" onChangeCounter={updateRoomCount} />
    </>
  )
}

export default Reservation
