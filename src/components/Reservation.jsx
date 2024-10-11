import TitleLabel from "./TitleLabel"
import ReservationCalendar from "./ReservationCalendar"

function Reservation() {

  return (
    <>
      <TitleLabel title={"Reservation"} subTitle={"날짜 및 인원 선택"}></TitleLabel>
      <br />
      <ReservationCalendar />
    </>
  )
}

export default Reservation
