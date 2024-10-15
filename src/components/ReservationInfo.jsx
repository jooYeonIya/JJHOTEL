import React, { useState } from "react"
import CustomButton from "./CustomButton"

function ReservationInfo({ reservation }) {
  const {n, roomName, numberOfPeople} = reservation
  const [isDelete, setIsDelete] = useState(null)

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0]
  }

  //예약 취소 함수
  const deleteReservation = () => {
    console.log("예약 취소 버튼 클릭")
    setIsDelete(true)
  }

  const useConfirm = () => {
    if (window.confirm("예약을 취소하시겠습니까?")) {
      deleteReservation()
      alert("예약이 취소되었습니다.")
    }
  }

  return(
    <>
      <h2>예약 정보 </h2>
      <p>이용 날짜 : {formatDate(reservation.checkInDate)} ~ {formatDate(reservation.checkOutDate)} ({n}박)</p>
      <p>객실 타입 : {roomName}</p>
      <p>인원 : {numberOfPeople}명</p>
      <CustomButton title={"예약 취소"} onClicked={useConfirm}/>
      {isDelete && <p>예약이 취소되었습니다.</p>}
    </>
  )
}

export default ReservationInfo