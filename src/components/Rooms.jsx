import { useEffect, useState } from "react"
import TitleLable from "./TitleLabel"
import { titles } from "../text/titles"

function Rooms({ isFiltered }) {
  const [title, setTitle] = useState({
    title: "",
    subTitle: ""
  })
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    // Reservation 예약하기 버튼을 클릭했을 때 화면 이동
    if (isFiltered) {
      setTitle(titles.filteredRooms)

    // Header의 Rooms를 클릭했을 때 화면 이동
    } else {
      setTitle(titles.rooms)
    }
  }, [])

  return (
    <>
      <TitleLable title={title.title} subTitle={title.subTitle}/>
    </>
  )
}

export default Rooms
