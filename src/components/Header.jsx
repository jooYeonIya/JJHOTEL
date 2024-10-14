import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Rooms from "../pages/Rooms";
import Reservation from "../pages/Reservation";
import Facilities from "../pages/Facilities";

function Header() {
  return (
    <>
      <img src="src\images\logo.png" alt="logo" width="20px" height="20px" />
      <div>
        <BrowserRouter>
          <Link to="/">JJ HOTEL</Link> <br />
          <Link to="/about">About</Link> <br />
          <Link to="/rooms">Rooms</Link> <br />
          <Link to="/reservation">Reservation</Link> <br />
          <Link to="/facilities">Facilities</Link> <br />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/facilities" element={<Facilities />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Header;
