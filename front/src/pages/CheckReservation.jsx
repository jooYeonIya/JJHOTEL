import { useState, useEffect } from "react";
import axios from "axios";
import ReservationInfo from "../components/ReservationInfo";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import "../css/CheckReservation.css";

function CheckReservation() {
  const [guestName, setGuestName] = useState("");
  const [reservationId, setReservationId] = useState("");
  const [reservationData, setReservationData] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const checkReservation = async (e) => {
    e.preventDefault();

    const reservationInfoWithGuestDto = {
      guestName: guestName,
      reservationId: reservationId,
    };

    try {
      const response = await axios.post(
        "http://3.35.14.52:8080/reservation/check",
        reservationInfoWithGuestDto
      );

      if (response.data) {
        setReservationData(response.data);
        setIsClicked(true);
      } else {
        setReservationData(null);
        alert("예약 정보를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("ERROR:", error);
      alert("입력한 예약 정보가 없습니다. 다시 입력해주세요.");
    }
  };

  useEffect(() => {
    console.log("예약 데이터가 업데이트됨:", reservationData);
  }, [reservationData]);

  return (
    <div>
      <Header isEvent={true} />
      <div className="checkreserve_container">
        <h2>고객 정보</h2>
        <div className="input_container">
          <div className="check_container_left">
            <div className="input_row">
              <label className="input_label">성명</label>
              <input
                className="input_name"
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />
              <br />
            </div>

            <div className="input_row">
              <label className="input_label">예약번호</label>
              <input
                className="input_id"
                type="text"
                value={reservationId}
                onChange={(e) => setReservationId(e.target.value)}
              />
              <br />
            </div>
          </div>
          <div className="check_container_right">
            <CustomButton title="예약 조회" onClicked={checkReservation} />
          </div>
        </div>
        {isClicked && reservationData && (
          <ReservationInfo reservation={reservationData} />
        )}
      </div>
    </div>
  );
}

export default CheckReservation;
