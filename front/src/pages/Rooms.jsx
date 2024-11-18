import { useEffect, useState } from "react";
import { titles } from "../text/titles";
import { useLocation, useNavigate } from "react-router-dom";

import HeaderWhite from "../components/HeaderWhite"
import TitleLabel from "../components/TitleLabel";
import CustomButton from "../components/CustomButton";
import axios from "axios";

import "../css/Rooms.css";

function Rooms() {
  const location = useLocation();
  const navigate = useNavigate();
  const isFiltered = location.state?.isFiltered;
  const reservationInfo = location.state?.reservationInfo;
  const [title, setTitle] = useState({ title: "", subTitle: "" });
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Reservation 예약하기 버튼을 클릭했을 때 화면 이동
    if (isFiltered) {
      setTitle(titles.filteredRooms);
      getFilteredRooms();

      // Header의 Rooms를 클릭했을 때 화면 이동
    } else {
      setTitle(titles.rooms);
      getAllRooms();
    }
  }, [isFiltered]);

  const moveToRoomDescription = (roomId) => {
    navigate('/room/detail', { state: { roomId } })
  }

  const moveToReservationInputCustomInfo = (roomId) => {
    navigate("/inputCustomInfo", { state: { roomId, reservationInfo } });
  };

  async function getAllRooms() {
    axios
      .get("http://3.35.14.52:8080/room/all")
      .then((res) => setRooms(res.data));
  }

  async function getFilteredRooms() {
    // 예약 정보에서 checkInDate와 checkOutDate를 ISO 형식으로 변환
    const formattedReservationInfo = {
      ...reservationInfo,
      checkInDate: new Date(reservationInfo.checkInDate).toISOString(),
      checkOutDate: new Date(reservationInfo.checkOutDate).toISOString(),
    };

    axios
      .post("http://3.35.14.52:8080/room/filtered", formattedReservationInfo)
      .then((res) => {
        setRooms(res.data);
      });
  }

  return (
    <>
      <HeaderWhite isEvent={true} />
      <div className="container">
        <TitleLabel title={title.title} subTitle={title.subTitle} />
        <div className="section">
          {rooms.map((room) => (
            <div key={room.roomId} className="roomItem">
              <div className="leftSection">
                <img src={room.imageURL1} alt="" className="roomImage" />
              </div>
              <div className="rightSection">
                <p>{room.roomName}</p>
                <CustomButton
                  title={"상세 보기"}
                  onClicked={() => moveToRoomDescription(room.roomId)}
                />
                {isFiltered && (
                  <CustomButton
                    title={"예약하기"}
                    onClicked={() =>
                      moveToReservationInputCustomInfo(room.roomId)
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Rooms;
