import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import CustomButton from "./CustomButton"

function ReservationInfo({ reservation }) {
  const navigate = useNavigate()
  const [isDelete, setIsDelete] = useState(null)

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    date.setDate(date.getDate() + 1)
    return date.toISOString().split("T")[0]
  }

  //예약 취소 함수
  const deleteReservation = (name, id) => {
  
    axios.post("http://localhost:3003/checkreservation/delete", {name, id}).then((json) => {
      if (json.status == 200) {
        console.log("예약 취소 버튼 클릭")
        alert("예약이 취소되었습니다.")
        navigate('/')
        setIsDelete(true)
      } else {
        alert("예약을 취소할 수 없습니다. 다시 시도해주세요.")
      }
    })

  }

  const useConfirm = () => {
    if (window.confirm("예약을 취소하시겠습니까?")) {
      deleteReservation(reservation.name, reservation.id)
    }
  }

  return(
    <>
      <h2>예약 정보 </h2>
      <p>이용 날짜 : {formatDate(reservation.checkInDate)} ~ {formatDate(reservation.checkOutDate)} ({reservation.n}박)</p>
      <p>객실 타입 : {reservation.roomName}</p>
      <p>인원 : {reservation.numberOfPeople}명</p>
      <CustomButton title={"예약 취소"} onClicked={useConfirm}/>
      {isDelete && <p>예약이 취소되었습니다.</p>}
    </>
  )
}

export default ReservationInfo