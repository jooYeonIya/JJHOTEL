import TitleLabel from "./TitleLabel"
import ReservationCalendar from "./ReservationCalendar"
import CustomButton from "./CustomButton"
import Counter from "./Counter"

function Reservation() {

  return (
    <>
      <TitleLabel title={"Reservation"} subTitle={"날짜 및 인원 선택"}></TitleLabel>
      <br />
      <ReservationCalendar />
      <br />
      <CustomButton title="예약하기"/>  
      <br />
      <Counter title="인원"/>
      <br />
      <Counter title="객실"/>
    </>
  )
}

export default Reservation
