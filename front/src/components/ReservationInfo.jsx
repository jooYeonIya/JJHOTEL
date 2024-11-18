import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomButton from "./CustomButton";
import "../css/ReservationInfo.css";

function ReservationInfo({ reservation, isCanceld }) {
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(null);

  // 날짜 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString();
  };

  const getTotalNights = (checkInDate, checkOutDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const checkInTime = new Date(checkInDate).getTime();
    const checkOutTime = new Date(checkOutDate).getTime();

    const nights = Math.round((checkOutTime - checkInTime) / oneDay);
    return nights;
  };

  //예약 취소 함수
  const deleteReservation = (reservationId) => {

    axios.patch(`http://3.35.14.52:8080/reservation/check/delete/${reservationId}`).then((json) => {
      if (json.status == 200) {
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
      deleteReservation(reservation.reservationId);
    }
  };

  return (
    <div className="cancel_container">
      <h2>{isCanceld ? "취소 정보" : "예약 정보"}</h2>
      <div className="label_container">
        <div className="label_row">
          <label className="label_text">이용 날짜</label>
          <label className="label_info">
            {formatDate(reservation.checkInDate)} ~{" "}
            {formatDate(reservation.checkOutDate)}(
            {getTotalNights(reservation.checkInDate, reservation.checkOutDate)}
            박)
          </label>
        </div>
        <div className="label_row">
          <label className="label_text">객실 타입</label>
          <label className="label_info">{reservation.roomName}</label>
        </div>
        <div className="label_row">
          <label className="label_text">예약 인원</label>
          <label className="label_info">{reservation.guestCount}명</label>
          {!isCanceld && (
            <CustomButton title={"예약 취소"} onClicked={useConfirm} />
          )}
        </div>
      </div>
      {isDelete && <p>예약이 취소되었습니다.</p>}
    </div>
  );
}

export default ReservationInfo;
