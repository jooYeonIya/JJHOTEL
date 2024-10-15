import { useState, useEffect } from "react"
import axios from "axios"
import ReservationInfo from "../components/ReservationInfo"
import CustomButton from "../components/CustomButton"
import Header from "../components/Header"
import '../css/CheckReservation.css'

function CheckReservation() {
  const [name, setName] = useState("")
  const [reservationId, setReservationId] = useState("")
  const [reservationData, setReservationData] = useState({})
  const [isClicked, setIsClicked] = useState(false)

  const checkReservation = (e) => {
    e.preventDefault()
  
     axios.get(`http://localhost:3003/checkreservation?name=${name}&reservationId=${reservationId}`).then((json) => {
      if(json.data.length > 0){   
        setReservationData(json.data[0])
        console.log(json.data.length)
        console.log(reservationData)
        setIsClicked(true)
      } else {
        setReservationData(null)
        alert("예약 정보를 찾을 수 없습니다.")
      }
    })
  }

  useEffect(() => {
    console.log("예약 데이터가 업데이트됨:", reservationData)
  }, [reservationData])
  
  return(
    <div>
      <Header isEvent={true}/>
      <div className="container">
      <p>고객 정보</p>
      성명 <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      예약번호 <input type="text" value={reservationId} onChange={(e) => setReservationId(e.target.value)} /><br />
      <CustomButton title="예약 조회" onClicked={checkReservation}/>
      {isClicked && reservationData && <ReservationInfo reservation={reservationData}/>}
      </div>
    </div>
  )
}

export default CheckReservation