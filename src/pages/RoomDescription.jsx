import { useLocation } from "react-router-dom"
import TitleLabel from "../components/TitleLabel"
import { useEffect, useState } from "react"
import axios from "axios"

export default function RoomDescription() {
  const location = useLocation()
  const roomId = location.state?.roomId
  const [room, setRoom] = useState()
  const [mainImage, setMainImage] = useState()
  const [subImages, setSubImages] = useState([])

  useEffect(() => {
    getRoomInfo(roomId)
  }, [roomId])

  async function getRoomInfo(roomId) {
    axios.post("http://localhost:3003/roomDescription", { roomId })
    .then(res => {
      console.log(res.data)
      let room = res.data[0]
      setRoom(room)
      setMainImage(room.imageURL1)
      setSubImages([room.imageURL1,room.imageURL2, room.imageURL3, room.imageURL4])
    })
  }

  const changeMainImage = (imageURL) => {
    setMainImage(imageURL)
  }

  if (!room) return <p>Loading...</p>

  return(
    <>
      <TitleLabel title={room.roomName} subTitle={room.description} />

      <div id="mainImage">
        <img src={mainImage} alt="" width={400} height={300}/>
      </div>
      <div id="subImages">
        {subImages.map((image) => 
          <img 
            src={image} 
            alt="" 
            onClick={ () => changeMainImage(image) }
            width={100} 
            height={100}/>
        )}
      </div>
      <div id="infomaiton">
        <p>객실 정보</p>
        size: {room.size}m
        Bed type: 더블 or 트윈
        Room Features: 베드룸1, 베스룸1
        price: {room.price}원
        최대 수용 인원: {room.maxNumberOfPeople}명
      </div>
      <div id="service">
        <p>객실 서비스</p>
        <li>미니바</li>
        <li>커피/티 메이커</li>
        <li>미니 냉장고</li>
        <li>에어컨</li>
        <li>Wi-Fi</li>
        <li>스마트 TV</li>
        <li>어메니티</li>
        <li>브러시</li>
        <li>헤어 드라이기</li>
      </div>
    </>
  )
}