import { useEffect, useState } from "react"
import TitleLabel from "../components/TitleLabel"
import { titles } from "../text/titles"
import { useLocation, useNavigate } from "react-router-dom"
import CustomButton from "../components/CustomButton"

function Rooms() {
  const location = useLocation()
  const navigate = useNavigate()
  const isFiltered = location.state?.isFiltered
  const reservationInfo = location.state?.reservationInfo
  const [title, setTitle] = useState({ title: "", subTitle: "" })
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    // Reservation 예약하기 버튼을 클릭했을 때 화면 이동
    if (isFiltered) {
      setTitle(titles.filteredRooms)
      getFilteredRooms().then(setRooms)

      // Header의 Rooms를 클릭했을 때 화면 이동
    } else {
      setTitle(titles.rooms)
      getAllRooms().then(setRooms)
    }
  }, [isFiltered])

  const moveToRoomDescription = (roomId) => {
    navigate('/roomDescription', { state: { roomId } })
  }

  const moveToReservationInputCustomInfo = (roomId) => {
    navigate('/inputCustomInfo', { state: { roomId, reservationInfo } })
  }

  return (
    <>
      <TitleLabel title={title.title} subTitle={title.subTitle} />

      {rooms.map((room) =>
        <div>
          <div id="leftSection">
            <img src={room.imageURL} alt="" width={200} height={100}/>
          </div>
          <div id="rightSection">
            <p>{room.name}</p>
            <CustomButton title={"상세 보기"} onClicked={() => moveToRoomDescription(room.id)}/>
            {isFiltered && <CustomButton title={"예약하기"} onClicked={() => moveToReservationInputCustomInfo(room.id)} />}
          </div>
        </div>
      )}
    </>
  )
}

export default Rooms

async function getAllRooms() {
  const mockRooms = [
    { id: 1, name: "Deluxe", imageURL: "src/images/facilities_dining.jpg"},
    { id: 2, name: "Suite", imageURL: "src/images/facilities_dining.jpg"},
    { id: 3, name: "Standard", imageURL: "src/images/facilities_dining.jpg"}
  ]
  return mockRooms
}

async function getFilteredRooms() {
  const mockRooms = [
    { id: 1, name: "Deluxe", imageURL: "src/images/facilities_dining.jpg"},
    { id: 2, name: "Suite", imageURL: "src/images/facilities_dining.jpg"}
  ]
  return mockRooms
}