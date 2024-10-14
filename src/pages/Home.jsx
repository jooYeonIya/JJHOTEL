import React, { useState } from 'react';
import '../css/Home.css';

function Home() {
  // 배경 이미지 상태 관리
  const [backgroundImage, setBackgroundImage] = useState("src/images/home_about.jpg");

  // 마우스 오버 시 배경 이미지 변경 함수
  const handleMouseEnter = (imageSrc) => {
    setBackgroundImage(imageSrc);
  };

  // 마우스가 떠났을 때 기본 배경으로 돌아가기
  const handleMouseLeave = () => {
    setBackgroundImage("src/images/home_about.jpg");
  };

  return (
    <>
      <div>        
        <img src={"src/images/hotel_main.jpg"} alt="home_main" width="100%" height="100%"/>
      </div>
      <h1>Welcome to JJ HOTEL</h1>

      {/* 한 개의 배경화면 */}
      <div className="main_image_container">
        {/* 변경되는 배경화면 */}
        <img src={backgroundImage} alt="background" className="background_image" />

        {/* 네 개의 구역 위에 텍스트 링크 */}
        <div className="overlay_grid">
          <div className="grid_section"
               onMouseEnter={() => handleMouseEnter("src/images/home_about.jpg")}
               onMouseLeave={handleMouseLeave}>
            <a href="/about">About</a>
          </div>

          <div className="grid_section"
               onMouseEnter={() => handleMouseEnter("src/images/home_rooms.jpg")}
               onMouseLeave={handleMouseLeave}>
            <a href="/rooms">Rooms</a>
          </div>

          <div className="grid_section"
               onMouseEnter={() => handleMouseEnter("src/images/home_reservation.jpg")}
               onMouseLeave={handleMouseLeave}>
            <a href="/doreservation">Reservation</a>
          </div>

          <div className="grid_section"
               onMouseEnter={() => handleMouseEnter("src/images/home_facilities.jpg")}
               onMouseLeave={handleMouseLeave}>
            <a href="/facilities">Facilities</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
