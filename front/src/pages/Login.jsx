import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import "../css/ReservationInputCustomInfo.css";

export default function Login() {
  const navigate = useNavigate();
  const { checkLogin } = useAuth();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (!id.trim() || !pw.trim()) {
      return alert("아이디 또는 비밀번호를 입력해 주세요");
    }

    const guestCreateDto = {
      guestId: id,
      password: pw,
    };

    axios
      .post("http://3.35.14.52:8080/guest/login", guestCreateDto, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          checkLogin();
          navigate("/mypage");
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data);
        }
      });
  };
  return (
    <>
      <Header isEvent={true} />
      <div className="container">
        <div className="customInfoContainer">
          <p>Login</p>
          <pre>
            아직 회원이 아니세요?{" "}<Link to="/createguest">SignIn</Link>
          </pre>
          <div className="customInfoSection">
            <div className="infoSectionLeft">
              <div className="infoRow">
                <label className="customInfoLabel">ID</label>
                <input
                  className="customInfoValue"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>

              <div className="infoRow">
                <label className="customInfoLabel">PW</label>
                <input
                  className="customInfoValue"
                  type="password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />
              </div>
            </div>

            <div className="infoSectionRight">
              <CustomButton title="로그인" onClicked={login} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
