import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TitleLabel from "../components/TitleLabel";
import HeaderWhite from "../components/HeaderWhite"
import axios from "axios";

import "../css/RoomDescription.css";

export default function RoomDescription() {
  const location = useLocation();
  const roomId = location.state?.roomId;
  const [room, setRoom] = useState();
  const [mainImage, setMainImage] = useState();
  const [subImages, setSubImages] = useState([]);

  useEffect(() => {
    getRoomInfo(roomId);
  }, [roomId]);

  async function getRoomInfo(roomId) {
    axios.get(`http://3.35.14.52:8080/room/detail/${roomId}`)
      .then(res => {
        let room = res.data
        setRoom(room)
        setMainImage(room.imageURL1)
        setSubImages([room.imageURL1, room.imageURL2, room.imageURL3, room.imageURL4])
      })
  }

  const changeMainImage = (imageURL) => {
    setMainImage(imageURL);
  };

  if (!room) return <p>Loading...</p>;

  return (
    <>
      <HeaderWhite isEvent={true} />

      <div className="container">
        <TitleLabel title={room.roomName} subTitle={room.description} />

        <div className="mainImage">
          <img src={mainImage} />
        </div>
        <div className="subImages">
          {subImages.map((image) => (
            <img
              src={image}
              alt=""
              onClick={() => changeMainImage(image)}
              className={image === mainImage ? "selectedImage" : ""}
            />
          ))}
        </div>

        <div className="infomaitonBox">
          <div className="infomaitonLeft">
            <p>객실 정보</p>
          </div>

          <div className="infomaitonRigth">
            <ul>
              <li>
                <strong>Size</strong>
                <p>{room.roomSize}㎡</p>
              </li>
              <li>
                <strong>Bed type</strong>
                <p>더블 or 트윈</p>
              </li>
              <li>
                <strong>Room Features</strong>
                <p>베드룸1, 베스룸1</p>
              </li>
              <li>
                <strong>Price</strong>
                <p>{room.roomPrice.toLocaleString()}원</p>
              </li>
              <li>
                <strong>최대 수용 인원</strong>
                <p>{room.maxGuests}명</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="serviceBox">
          <div className="infomaitonLeft">
            <p>객실 서비스</p>
          </div>

          <div className="servieRigth">
            <ul>
              <li>미니바</li>
              <li>커피/티 메이커</li>
              <li>미니 냉장고</li>
              <li>에어컨</li>
              <li>Wi-Fi</li>
              <li>스마트 TV</li>
              <li>어메니티</li>
              <li>브러시</li>
              <li>헤어 드라이기</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
