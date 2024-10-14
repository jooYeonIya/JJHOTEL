import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import Reservation from "../pages/Reservation";
import Facilities from "../pages/Facilities";
import RoomDescription from "../pages/RoomDescription";
import ReservationInputCustomInfo from "../pages/ReservationInputCustomInfo";
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
        <BrowserRouter>
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
                  <Link to="/reservation/doreservation">{category[0]}</Link>
                  <Link to="/reservation/check">{category[1]}</Link>
                </div>
              )}
            </div>
            <Link className="navbarMenu" to="/facilities">Facilities</Link> 
            <Link to={{pathname: "/roomDescription", state: {roomId: ""}}}/> <br />
            <Link to={{pathname: "/inputCustomInfo", state: {roomId: "", reservationInfo: ""}}}/> <br />
          </div>
          
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/rooms" element={<Rooms />}/>
            <Route path="/reservation/doreservation" element={<Reservation />}/>
            <Route path="/facilities" element={<Facilities />}/>
            <Route path="/roomDescription" element={<RoomDescription />}/>
            <Route path="/inputCustomInfo" element={<ReservationInputCustomInfo />}/>

          </Routes>
        </BrowserRouter>
        
    </div>
    </>
  );
}

export default Header;
