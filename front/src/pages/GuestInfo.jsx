import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import CustomButton from "../components/CustomButton"
import Header from "../components/Header"
import '../css/CreateGuest.css'

function GuestInfo({ guest }) {
  const [guestId, setGuestId] = useState("")
  const [guestName, setGuestName] = useState("")
  const [guestEmail, setGuestEmail] = useState("")
  const [guestInfo, setGuestInfo] = useState(null)
  // 수정하기 버튼 눌렀는지 확인
  const [isUpdate, setIsUpdate] = useState(false)
  const location = useLocation()
  guest = location.state?.guestInfo

  console.log(guest)

  const updateInfo = (e) => {
    e.preventDefault()
    setIsUpdate(!isUpdate)

    console.log(guest.guestId)
    console.log(guest.guestName)
    console.log(guest.guestEmail)

    if(!guest.guestName){
      return alert("성함을 입력해주세요.")
    } else if(!guest.guestEmail){
      return alert("이메일을 입력해주세요.")
    }
  
    const guestInfoDto = {
      guestId: guest.guestId,
      guestName: guest.guestName,
      guestEmail: guest.guestEmail
    }

     axios.put("http://localhost:8080/guest/update", guestInfoDto).then((json) => {
      console.log("PUT: ", json.data)
      console.log("guestInfoDto: ", guestInfoDto)
      if(Object.keys(json.data).length > 0){   
        console.log("IF PUT: ", json.data)
        setGuestInfo(json.data)
      } else {
        setGuestInfo(null)
        alert("다시 시도해주세요.")
      }
    }).catch((error) => {
      console.error("ERROR: ", error)
      alert("다시 입력해주세요.")
    })
  }

  useEffect(() => {
    console.log("데이터가 업데이트됨:", guestInfo)
  }, [guestInfo])

  return(
    <div>
      <Header isEvent={true}/>
      <div className="createguest_container">
        <h2>개인 정보</h2>
        <div className="input_container">
          <div className="createguest_container_left">
            <div className="input_row">
              <label className="input_label">아이디</label>
              <input className="input_guestId" type="text" value={guest.guestId} readOnly/><br />
            </div>
            <div className="input_row">
              <label className="input_label">성명</label>
              <input className="input_guestName" type="text" value={guest.guestName} onChange={(e) => setGuestName(e.target.value)} readOnly={!isUpdate}/><br />
            </div>
            <div className="input_row">
              <label className="input_label">이메일</label>
              <input className="input_guestEmail" type="email" value={guest.guestEmail} onChange={(e) => setGuestEmail(e.target.value)} readOnly={!isUpdate}/><br />
            </div>
          </div>
          <div className="createguest_container_right">
            <CustomButton title={isUpdate ? "저장하기" : "수정하기"} onClicked={updateInfo}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestInfo