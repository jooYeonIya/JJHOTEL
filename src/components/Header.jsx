import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import Reservation from "../pages/Reservation";
import Facilities from "../pages/Facilities";
import RoomDescription from "../pages/RoomDescription";
import ReservationInputCustomInfo from "../pages/ReservationInputCustomInfo";

function Header() {
  return (
    <>
      <img src="src\images\logo.png" alt="logo" width="20px" height="20px" />
      <div>
          <BrowserRouter>
            <Link to="/">JJ HOTEL</Link> <br />
            <Link to="/about">About</Link> <br />
            <Link to={{pathname: "/rooms", state: {isFiltered: false, reservationInfo: ""}}}>Rooms</Link> <br />
            <Link to="/reservation">Reservation</Link> <br />
            <Link to="/facilities">Facilities</Link> <br />
            <Link to={{pathname: "/roomDescription", state: {roomId: ""}}} /> <br />
            <Link to={{pathname: "/inputCustomInfo", state: {roomId: "", reservationInfo: ""}}} />
            <Routes>
              <Route path="/about" element={<About />}/>
              <Route path="/rooms" element={<Rooms isFiltered={false}/>}/>
              <Route path="/reservation" element={<Reservation />}/>
              <Route path="/facilities" element={<Facilities />}/>
              <Route path="/roomDescription" element={<RoomDescription />}/>
              <Route path="/inputCustomInfo" element={<ReservationInputCustomInfo />} />
            </Routes>
          </BrowserRouter>
          
      </div>
    </>
  );
}

export default Header;
