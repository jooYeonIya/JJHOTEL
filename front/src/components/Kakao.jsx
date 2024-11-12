import React, { useEffect } from "react"
import '../css/About.css'
const { kakao } = window

//Kakao 지도 API
function Kakao() {
  useEffect(() => {
    const container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.3389178, 127.1091677), //지도의 중심좌표.
      draggable: false,   //지도 이동 및 확대축소 방지
      level: 3 //지도의 레벨(확대, 축소 정도)
    }
  
    const map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
    
    const markerPosition = new kakao.maps.LatLng(37.3389178, 127.1091677)  // 마커가 표시될 위치
    const marker = new kakao.maps.Marker({  // 마커 생성
        position: markerPosition
    })
    marker.setMap(map)  // 마커가 지도 위에 표시되도록 설정

    const iwContent = '<div className="text" style="padding:5px; width:140px;">JJ HOTEL</div>' // 인포윈도우에 표출될 내용
    const iwPosition = new kakao.maps.LatLng(37.3389178, 127.1091677) //인포윈도우 표시 위치

    // 인포윈도우 생성
    const infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    })
      
    // 마커 위에 인포윈도우를 표시. 
    // 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 바로 표시됨
    infowindow.open(map, marker)
  }, [])

  return (
    <>
      <div id="map" style={{
        width:'100vw',
        height:'100vh'
      }}></div>
    </>
  )
}

export default Kakao