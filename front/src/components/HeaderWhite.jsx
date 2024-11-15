import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../components/AuthContext"

import "../css/Header.css"

function HeaderWhite() {
  const category = ["예약하기", "예약확인"]
  const [isScrolled, setIsScrolled] = useState(false)
  const { isLoggedIn } = useAuth()

  const [hide, setHide] = useState({
    doreserve: false,
    checkreserve: false,
    showDropdown: false   //드롭다운 메뉴의 보임 상태를 제어하기 위한 상태
  })

  const mouseEvent = (bool) => {
    setHide(prevState => ({
      ...prevState,
      showDropdown: bool
    }))
  }

  return (
    <>
      <div>
        <div className={"navbar scrolled"}>

          {/* 메뉴 첫 번째 라인 */}
          <div className="navbarFirstLine">
            <img src="https://jjhotel.s3.ap-northeast-2.amazonaws.com/images/logo.png" alt="logo" width="20px" height="20px" />
            <Link to="/">JJ HOTEL</Link>
          </div>

          {/* 메뉴 두 번째 라인 */}
          <div className="navbarSecondLine">
            <Link className="navbarMenu" to="/about">About</Link>
            <Link className="navbarMenu" to={{pathname: "/rooms", state: { isFiltered: false, reservationInfo: ""}}}>Rooms</Link>
            <div className="reservationMenu"
              onMouseEnter={() => mouseEvent(true)}
              onMouseLeave={() => mouseEvent(false)}>
              <span className="navbarMenu">Reservation</span>
              {hide.showDropdown && (
                <div className="dropdown">
                  <Link to="/doreservation">{category[0]}</Link>
                  <Link to="/checkreservation">{category[1]}</Link>
                </div>
              )}
            </div>
            <Link className="navbarMenu" to="/facilities">Facilities</Link>
            {isLoggedIn ? (<Link className="navbarMenu" to="/mypage">Mypage</Link>) 
            : (<Link className="navbarMenu" to="/login">Login</Link>)}
          </div>

          <Link to={{pathname: "/room/detail", state: {roomId: "" }}} />
          <Link to={{pathname: "/inputCustomInfo", state: {roomId: "", reservationInfo: ""}}} />
        </div>
      </div>
    </>
  )
}

export default HeaderWhite
