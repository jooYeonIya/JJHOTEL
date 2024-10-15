import { useState } from "react"
import { addDays } from "date-fns"

import CustomButton from "./CustomButton"
import ReservationCalendar from "./ReservationCalendar"
import Counter from "./Counter"

export default function ReservaionInputContainer() {
    const [checkInDate, setCheckIndate] = useState(new Date())
    const [checkOutDate, setCheckOutdate] = useState(addDays(new Date(), 1))
    const [customerCount, setCustomerCount] = useState(2)
    const [roomCount, setRoomCount] = useState(1)
    const [isVisible, setIsVisible] = useState(false)

    const updateCustomCount = (count) => {
        setCustomerCount(count)
    }

    const updateRoomCount = (count) => {
        setRoomCount(count)
    }

    const updateDate = (checkIn, checkOut) => {
        setCheckIndate(checkIn)
        setCheckOutdate(checkOut)
    }

    const toggleRservationCalendar = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <div className={isVisible ? "reservationCalendarIsVisible" : "reservationCalendar"} >
                <div className="leftSide">
                    <ReservationCalendar onChangeDate={updateDate} />
                </div>
                <div className="rightSide">
                    <Counter title="인원" onChangeCounter={updateCustomCount} />
                    <Counter title="객실" onChangeCounter={updateRoomCount} />
                </div>
            </div>

            <div className="inputContainer" onClick={toggleRservationCalendar}>
                <div className="checkIn">
                    <p className="smallFont">체크인</p>
                    <p className="largeFont">{checkInDate.toLocaleDateString()}</p>
                </div>

                <div className="checkOut">
                    <p className="smallFont">체크아웃</p>
                    <p className="largeFont">{checkOutDate.toLocaleDateString()}</p>
                </div>

                <div className="customerCount">
                    <p className="smallFont">인원</p>
                    <p className="largeFont">{customerCount}</p>
                </div>

                <div className="roomCount">
                    <p className="smallFont">객실</p>
                    <p className="largeFont">{roomCount}</p>
                </div>

                <div className="button">
                    <CustomButton title="예약하기"></CustomButton>
                </div>
            </div>
        </>
    )
}