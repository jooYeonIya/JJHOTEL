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
    imageURL4: "src/images/facilities_dining.jpg" }
  return mockRoom
}