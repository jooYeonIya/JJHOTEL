import CustomButton from "./CustomButton"
import { useState } from "react";

export default function CustomInfo({ onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const saveRservation = () => {
    const customerInfo = { name, email }

    if (!customerInfo.name || !customerInfo.email) {
      alert("성함 또는 이메일을 입력해 주세요")
    } else {
      onSave(customerInfo)
    }
  }

  return (
    <>
      <p>고객 정보</p>
      성명 <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      이메일 <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      *입력하신 이메일로 예약번호가 전송됩니다
      <CustomButton title="입력완료" onClicked={saveRservation} />
    </>
  )
}