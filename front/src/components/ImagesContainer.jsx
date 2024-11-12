import React, { useState } from 'react';

export default function ImagesContainer() {
  // 배경 이미지 상태 관리
  const [backgroundImage, setBackgroundImage] = useState("src/images/home_about.jpg")
  //마지막으로 오버된 이미지 저장
  const [lastImage, setLastImage] = useState("src/images/home_about.jpg")

  //배경 이미지 변경 함수
  const handleMouseEnter = (imageSrc) => {
    setBackgroundImage(imageSrc)
    setLastImage(imageSrc) // 오버될 때 마지막 이미지 저장
  }

  const handleMouseLeave = () => {
    setBackgroundImage(lastImage) // 마우스가 떠나면 마지막으로 오버된 이미지로 유지
  }

  const sections = [
    { name: "About", link: "/about", image: "src/images/home_about.jpg" },
    { name: "Rooms", link: "/rooms", image: "src/images/home_rooms.jpg" },
    { name: "Reservation", link: "/doreservation", image: "src/images/home_reservation.jpg" },
    { name: "Facilities", link: "/facilities", image: "src/images/home_facilities.jpg" }
  ]

  return (
    <>
      <h1>Welcome to JJ HOTEL</h1>
      {/* 한 개의 배경화면 */}
      <div className="main_image_container">
        {/* 변경되는 배경화면 */}
        <img src={backgroundImage} alt="background" className="background_image" />

        <div className="overlay_grid">
          {sections.map((section, index) => (
            <div
              key={index}
              className="grid_section"
              onMouseEnter={() => handleMouseEnter(section.image)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={section.link}>{section.name}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}