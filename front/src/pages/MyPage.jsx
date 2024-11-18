import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import TitleLabel from "../components/TitleLabel";
import ReservationInfo from "../components/ReservationInfo";
// import GuestInfo from "./GuestInfo"

export default function MyPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [noData, setNoData] = useState(false);
  const [reservationList, setReservationList] = useState([]);
  const [isGuest, setIsGuest] = useState(false);
  const [guestInfo, setGuestInfo] = useState([]);
  const [reservationState, setReservationState] = useState({
    isClicked: false,
    hasData: false,
    isCanceledCheck: false,
    reservationList: [],
  });
  const { doLogout } = useAuth();
  const navigate = useNavigate();

  const checkReservation = (isCanceled) => {
    axios
      .get(`http://3.35.14.52:8080/guest/reservation/check/${isCanceled}`, { withCredentials: true })
      .then((response) => {
        setReservationState({
          isClicked: true,
          hasData: response.data.length > 0,
          isCanceledCheck: isCanceled,
          reservationList: response.data,
        });
      });
  };

  const getMyInfo = () => {
    axios.get("http://3.35.14.52:8080/guest/myinfo", { withCredentials: true }).then((response) => {
      if (Object.keys(response.data).length > 0) {
        setIsGuest(true);
        setGuestInfo(response.data);
        navigate("/myinfo", { state: { guestInfo: response.data } });
      } else {
        setIsGuest(false);
      }
    });
  };

  const logout = () => {
    axios.get("http://3.35.14.52:8080/guest/logout", { withCredentials: true }).then(() => {
      doLogout();
      navigate("/");
    });
  };

  const useConfirm = () => {
    if (window.confirm("탈퇴하시겠습니까?")) {
      deleteGuest();
    }
  };

  const deleteGuest = async () => {
    const isCanceled = false;
    const checkResponse = await axios.get(
      `http://3.35.14.52:8080/guest/reservation/check/${isCanceled}`, { withCredentials: true })
    if (checkResponse.data.length > 0) {
      alert("예약 내역이 남아 있어 탈퇴할 수 없습니다");
    } else {
      const deleteResponse = await axios.patch(
        "http://3.35.14.52:8080/guest/delete",
        null, { withCredentials: true }
      );
      if (deleteResponse.status === 200) {
        alert("탈퇴가 완료되었습니다");
        doLogout();
        navigate("/");
      } else {
        alert("문제가 발생했습니다");
      }
    }
  };

  return (
    <>
      <Header isEvent={true} />
      <div className="container">
        <CustomButton
          title="예약 내역 확인"
          onClicked={() => checkReservation(false)}
        />
        <br />
        <CustomButton
          title="취소 내역 확인"
          onClicked={() => checkReservation(true)}
        />
        <br />
        <CustomButton title="개인정보 확인" onClicked={getMyInfo} />
        <br />
        <CustomButton title="로그아웃" onClicked={logout} />
        <br />
        <CustomButton title="탈퇴하기" onClicked={useConfirm} />
        <br />
        {reservationState.isClicked && reservationState.hasData
          ? reservationState.reservationList.map((data, index) => (
              <ReservationInfo
                key={index}
                reservation={data}
                isCanceld={reservationState.isCanceledCheck}
              />
            ))
          : reservationState.isClicked && (
              <TitleLabel title="" subTitle="이력이 없습니다" />
            )}
      </div>
    </>
  );
}
