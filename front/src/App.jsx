import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Reservation from "./pages/Reservation";
import CheckReservation from "./pages/CheckReservation";
import Facilities from "./pages/Facilities";
import RoomDescription from "./pages/RoomDescription";
import ReservationInputCustomInfo from "./pages/ReservationInputCustomInfo";
import GuestInfo from './pages/GuestInfo';


// css
import './css/App.css';

//components
import Footer from './components/Footer';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import { AuthProvider } from './components/AuthContext'
import CreateGuest from './pages/CreateGuest';

// App.jsx는 전체 구조 와 라우팅 및 페이지 전환 관리
function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <BrowserRouter>
          <div className="wrapper">
            <div className="contentWrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/doreservation" element={<Reservation />} />
                <Route path="/checkreservation" element={<CheckReservation />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/room/detail" element={<RoomDescription />} />
                <Route path="/inputCustomInfo" element={<ReservationInputCustomInfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/myinfo" element={<GuestInfo />} />
                <Route path="/createguest" element={<CreateGuest />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<App />)
