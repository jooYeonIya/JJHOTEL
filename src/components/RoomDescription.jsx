import { useLocation } from "react-router-dom"
import TitleLabel from "./TitleLabel"
import { useEffect, useState } from "react"

export default function RoomDescription() {
  const location = useLocation()
  const roomId = location.state?.roomId
  const [room, setRoom] = useState()
  const [mainImage, setMainImage] = useState()
  const [subImages, setSubImages] = useState([])

  useEffect(() => {
    getRoomInfo(roomId).then((data) => {
      setRoom(data)
      setMainImage(data.imageURL1)
      setSubImages([data.imageURL1, data.imageURL2, data.imageURL3, data.imageURL4])
    })
  }, [roomId])

  const changeMainImage = (imageURL) => {
    setMainImage(imageURL)
  }

  if (!room) return <p>Loading...</p>

  return(
    <>
      <TitleLabel title={room.name} subTitle={room.description} />
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
        size: {room.size}
        Bed type: {room.bedType}
        Room Features: {room.features}
        price: {room.price}
      </div>
      <div id="service">
        <p>객실 서비스</p>
        {room.service.split(",").map((data) => <li>{data.trim()}</li>)}
      </div>
    </>
  )
}

async function getRoomInfo(roomId) {
  const mockRoom = { 
    id: 1, 
    name: "Deluxe", 
    description: "도시의 전경이 어쩌구~",
    imageURL1: "src/images/facilities_dining.jpg",
    imageURL2: "src/images/about_information.jpg",
    imageURL3: "src/images/facilities_pool.jpg",
    imageURL4: "src/images/facilities_dining.jpg",
    size: "37m",
    bedType: "더블 or 트윈",
    features: "베드룸1, 베스룸1", 
    price: "80,000",
    service: "에어컨, 미니바, 와이파이, 미니냉장고"
  }
  return mockRoom
}