import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import "../css/CreateGuest.css";

function GuestInfo({ guest }) {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestInfo, setGuestInfo] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  guest = location.state?.guestInfo;

  const getInfo = (e) => {
    e.preventDefault();
    setIsUpdate(true);
  };

  const saveInfo = (e) => {
    e.preventDefault();
    setIsUpdate(false);

    const guestInfoDto = {
      guestId: guest.guestId,
      guestName: guestName,
      guestEmail: guestEmail,
    };

    if (!guestName) {
      setIsUpdate(true);
      return alert("성명을 입력해주세요.");
    } else if (!guestEmail) {
      setIsUpdate(true);
      return alert("이메일을 입력해주세요.");
    } else if (!validateEmail(guestEmail)) {
      setIsUpdate(true);
      return alert("이메일을 형식을 지켜주세요.");
    }

    if(!guestName){
      setIsUpdate(true)
      return alert("성명을 입력해주세요.")
    } else if(!guestEmail){
      setIsUpdate(true)
      return alert("이메일을 입력해주세요.")
    } else if(!validateEmail(guestEmail)){
      setIsUpdate(true)
      return alert("이메일을 형식을 지켜주세요.")
    }

    axios.put("http://3.35.14.52:8080/guest/update", guestInfoDto).then((json) => {
      if(json.data !== null){   
        setGuestInfo({
          guestId: guest.guestId,
          guestName: guestName,
          guestEmail: guestEmail})
        alert("정보가 수정되었습니다.")
        navigate('/mypage')
      } else {
        setGuestInfo(null)
        alert("다시 시도해주세요.")
      }
    }).catch((error) => {
      console.error("ERROR: ", error)
      alert("다시 입력해주세요.")
    })

  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <Header isEvent={true} />
      <div className="createguest_container">
        <h2>개인 정보</h2>
        <div className="input_container">
          <div className="createguest_container_left">
            <div className="input_row">
              <label className="input_label">아이디</label>
              <input
                className="input_guestId"
                type="text"
                name="guestId"
                value={guest.guestId}
                readOnly
              />
              <br />
            </div>
            <div className="input_row">
              <label className="input_label">성명</label>
              <input
                className="input_guestName"
                type="text"
                placeholder={guest.guestName}
                value={isUpdate ? guestName : guest.guestName}
                onChange={(e) => setGuestName(e.target.value)}
                readOnly={!isUpdate}
              />
              <br />
            </div>
            <div className="input_row">
              <label className="input_label">이메일</label>
              <input
                className="input_guestEmail"
                type="email"
                placeholder={guest.guestEmail}
                value={isUpdate ? guestEmail : guest.guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                readOnly={!isUpdate}
              />
              <br />
            </div>
          </div>
          <div className="createguest_container_right">
            <CustomButton
              title={isUpdate ? "저장하기" : "수정하기"}
              onClicked={isUpdate ? saveInfo : getInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuestInfo;
