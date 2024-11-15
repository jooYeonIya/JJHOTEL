import { useState, useEffect } from "react"
import axios from "axios"
import CustomButton from "../components/CustomButton"
import Header from "../components/Header"
import '../css/CreateGuest.css'
import { useNavigate } from "react-router-dom"

function CreateGuest() {
  const [guestId, setGuestId] = useState("")
  const [password, setPassword] = useState("")
  const [guestName, setGuestName] = useState("")
  const [guestEmail, setGuestEmail] = useState("")
  const [guestData, setGuestData] = useState(null)
  const navigate = useNavigate()

  const createGuest = (e) => {
    e.preventDefault()

    if(!guestId) {
      return alert("아이디를 입력해주세요.")
    } else if(!password){
      return alert("비밀번호를 입력해주세요.")
    } else if(!guestName){
      return alert("성함을 입력해주세요.")
    } else if(!guestEmail){
      return alert("이메일을 입력해주세요.")
    }
  
    const guestCreateDto = {
      guestId: guestId,
      password: password,
      guestName: guestName,
      guestEmail: guestEmail
    }

     axios.post("http://localhost:8080/guest/add", guestCreateDto).then((json) => {
      if(Object.keys(json.data).length > 0){   
        let guest = json.data
        setGuestData(guest)
        alert("회원가입이 완료되었습니다.")
        navigate("/login")
      } else {
        setGuestData(null)
        alert("회원가입을 실패했습니다. 다시 시도해주세요.")
      }
    }).catch((error) => {
      console.error("ERROR: ", error)
      alert("다시 입력해주세요.")
    })
  }

  useEffect(() => {
    console.log("예약 데이터가 업데이트됨:", guestData)
  }, [guestData])

  return(
    <div>
      <Header isEvent={true}/>
      <div className="createguest_container">
        <h2>회원 가입</h2>
        <div className="input_container">
          <div className="createguest_container_left">
            <div className="input_row">
              <label className="input_label">아이디</label>
              <input className="input_guestId" type="text" value={guestId} onChange={(e) => setGuestId(e.target.value)} /><br />
            </div>
            <div className="input_row">
              <label className="input_label">비밀번호</label>
              <input className="input_password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            </div>
            <div className="input_row">
              <label className="input_label">성명</label>
              <input className="input_guestName" type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} /><br />
            </div>
            <div className="input_row">
              <label className="input_label">이메일</label>
              <input className="input_guestEmail" type="email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} /><br />
            </div>
          </div>
          <div className="createguest_container_right">
            <CustomButton title="가입하기" onClicked={createGuest}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGuest