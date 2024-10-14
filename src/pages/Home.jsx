import React, { useState } from 'react'
import '../css/Home.css'

function Home() {
  // const [isListHover, setIsListHover] = useState({
  //   abouthover: false,
  //   roomshover: false,
  //   reservationhover: false,
  //   facilitieshover: false,
  //   ishover: false
  // })
  // const mouseEvent = (bool) => {
  //   setIsListHover(prevState => ({
  //     ...prevState,
  //     ishover: bool
  //   }))
  // }

  const [hoverImage, setHoverImage] = useState("src/images/home_about.jpg")
  const handleMouseEnter = (imageSrc) => {
    setHoverImage(imageSrc)
  }
  const handleMouseLeave = () => {
    setHoverImage("src/images/home_about.jpg")
  }


  return (
    <>
      <div>        
        <img src={"src/images/hotel_main.jpg"} alt="home_main" width="100%" height="100%"/>
      </div>
      <h2>All About </h2>
      <h1>JJ HOTEL</h1>


      <div className="hover_image_container" style={{display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '20px'}}>
        <div className="item_wrapper">
            <div className="hover_section" 
              onMouseEnter={() => handleMouseEnter("src/images/home_about.jpg")} 
              onMouseLeave={handleMouseLeave}
              style={{flex: '1', textAlign: 'center', padding: '20px'}}>
          <a href="/about">
            About
          </a>
            </div>

          <a href="/rooms">
            <div className="hover_section"
              onMouseEnter={() => handleMouseEnter("src/images/home_rooms.jpg")} 
              onMouseLeave={handleMouseLeave}
              style={{flex: '1', textAlign: 'center', padding: '20px'}}>
            Rooms
            </div>
          </a>

          <a href="/doreservation">
            <div className="hover_section"
              onMouseEnter={() => handleMouseEnter("src/images/home_reservation.jpg")} 
              onMouseLeave={handleMouseLeave}
              style={{backgroundColor:'pink', flex: '1', textAlign: 'center', padding: '20px'}}>
            Reservation
            </div>
          </a>

          <a href="/facilities">
            <div className="hover_section"
              onMouseEnter={() => handleMouseEnter("src/images/home_facilities.jpg")} 
              onMouseLeave={handleMouseLeave}
              style={{backgroundColor:'orange', flex: '1', textAlign: 'center', padding: '20px'}}>
            Facilities
            </div>
          </a>

        </div>
      </div>

      <div style={{marginTop: '20px'}}>
        <img src="{hoverImage}" alt="hover_content" width="100%" height="300px"/>

      </div>
    </>
  )
}

export default Home