import TitleLabel from "./TitleLabel"
import ReservationCalendar from "./ReservationCalendar"
import CustomButton from "./CustomButton"
import Counter from "./Counter"
import { useNavigate } from "react-router-dom"

function Reservation() {
  const navigate = useNavigate()

  const moveToRoomsPage = () => {
    navigate('/rooms', { state: { isFiltered: true } })
  }

  return (
    <>
      <TitleLabel title={"Reservation"} subTitle={"날짜 및 인원 선택"}></TitleLabel>
      <br />
      <ReservationCalendar />
      <br />
      <CustomButton title="예약하기" onClicked={moveToRoomsPage}/>  
      <br />
      <Counter title="인원"/>
      <br />
      <Counter title="객실"/>
    </>
  )
}

export default Reservation
