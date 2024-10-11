import { useState } from "react"
import ReservationCalendar from "./ReservationCalendar"
import TitleLabel from "./TitleLabel"

function Reservation() {

  const getTomorrowDate = () => {
    const today = new Date()
    const tomorrowDate = new Date(today)
    tomorrowDate.setDate(today.getDate() + 1)
    return tomorrowDate
  }

  const [ date, setDate ] = useState([
    new Date(),
    getTomorrowDate(),
  ])
  
  const showStartDate = (date) => {
    return date.length > 0 ? date[0].toLocaleDateString() : date.toLocaleDateString()
  }

  const showEndDate = (date) => {
    return date.length > 0 ? date[1].toLocaleDateString() : date.toLocaleDateString()
  }

  return (
    <>
    <TitleLabel title={ "Reservation" } subTitle={ "날짜 및 인원 선택" }></TitleLabel>
    <br />
    <ReservationCalendar date={ date } dateChange={ setDate }/>
    startDate: { showStartDate(date) }
    endDate: { showEndDate(date) }
    </>
  )
}

export default Reservation
