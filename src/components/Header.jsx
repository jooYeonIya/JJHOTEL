import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Header.css"

function Header() {
  const category = ["예약하기", "예약확인"]
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
          <div className="navbar">
            <img src="src\images\logo.png" alt="logo" width="20px" height="20px" />
            <Link className="navbarMenu" to="/">JJ HOTEL</Link> <br />
            <Link className="navbarMenu" to="/about">About</Link> 
            <Link className="navbarMenu" to={{pathname: "/rooms", state: {isFiltered: false, reservationInfo: ""}}}>Rooms</Link> 
            <div
              className="navbarMenu reservationMenu"
              onMouseEnter={() => mouseEvent(true)}  
              onMouseLeave={() => mouseEvent(false)}  
            >
              <span className="navbarMenu" to="/reservation">Reservation</span> 
              {hide.showDropdown && (
                <div className="dropdown">
                  <Link to="/doreservation">{category[0]}</Link>
                  <Link to="/checkreservation">{category[1]}</Link>
                </div>
              )}
            </div>
            <Link className="navbarMenu" to="/facilities">Facilities</Link> 
            <Link to={{pathname: "/roomDescription", state: {roomId: ""}}}/> <br />
            <Link to={{pathname: "/inputCustomInfo", state: {roomId: "", reservationInfo: ""}}}/> <br />
          </div>
          

        
    </div>
    </>
  );
}

export default Header;
