import { useEffect, useState } from "react";
import axios from "axios";

export default function RoomInfo({
  roomId,
  reservationInfo,
  onChangeTotalPrice,
}) {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    getRoomInfo(roomId);
  }, [roomId]);

  async function getRoomInfo(roomId) {
    axios.post(`http://3.35.14.52:8080/room/detail/${roomId}`).then((res) => {
      let room = res.data[0];
      setRoom(room);
    });
  }

  const getTotalNights = (checkInDate, checkOutDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const checkInTime = checkInDate.getTime();
    const checkOutTime = checkOutDate.getTime();

    const nights = Math.round((checkOutTime - checkInTime) / oneDay);

    return nights;
  };

  const getTotalPrice = () => {
    if (room && reservationInfo) {
      const roomPrice = Number(room.price);
      const roomCount = Number(reservationInfo.roomCount);
      const nights = getTotalNights(
        reservationInfo.checkInDate,
        reservationInfo.checkOutDate
      );
      const totalPrice = roomPrice * roomCount * nights;
      onChangeTotalPrice(totalPrice);
      return totalPrice;
    }
    return 0;
  };

  if (!room) return <p></p>;

  return (
    <>
      <div className="roomInfo">
        <p>객실 정보</p>
      </div>

      <div className="infoSection">
        <div className="infoRow">
          <div className="infoLabel">이용 날짜</div>
          <div className="infoValue">
            {reservationInfo.checkInDate.toLocaleDateString()} ~{" "}
            {reservationInfo.checkOutDate.toLocaleDateString()}(
            {getTotalNights(
              reservationInfo.checkInDate,
              reservationInfo.checkOutDate
            )}
            박)
          </div>
        </div>

        <div className="infoRow">
          <div className="infoLabel">객실 타입</div>
          <div className="infoValue">{room.roomName}</div>
        </div>

        <div className="infoRow">
          <div className="infoLabel">객실 갯수</div>
          <div className="infoValue">{reservationInfo.roomCount} 개</div>
        </div>

        <div className="infoRow">
          <div className="infoLabel">예약 인원</div>
          <div className="infoValue">{reservationInfo.customCount} 명</div>
        </div>

        <div className="infoRow">
          <div className="infoLabel">결제 금액</div>
          <div className="infoValue">{getTotalPrice().toLocaleString()} 원</div>
        </div>
      </div>
    </>
  );
}
