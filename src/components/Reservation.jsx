import TitleLabel from "./TitleLabel"
import ReservationCalendar from "./ReservationCalendar"
import CustomButton from "./CustomButton"

function Reservation() {

  return (
    <>
      <TitleLabel title={"Reservation"} subTitle={"날짜 및 인원 선택"}></TitleLabel>
      <br />
      <ReservationCalendar />
      <br />
      <CustomButton title="예약하기"/>  
    </>
  )
}

export default Reservation
