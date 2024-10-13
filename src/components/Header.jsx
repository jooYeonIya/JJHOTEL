import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from "./About";
import Rooms from "./Rooms";
import Reservation from "./Reservation";
import Facilities from "./Facilities";

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
              <Route path="/about" element={<About />}/>
              <Route path="/rooms" element={<Rooms isFiltered={false}/>}/>
              <Route path="/reservation" element={<Reservation />}/>
              <Route path="/facilities" element={<Facilities />}/>
            </Routes>
          </BrowserRouter>
          
      </div>
    </>
  );
}

export default Header;