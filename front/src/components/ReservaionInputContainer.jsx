import { useState } from "react"
import { addDays } from "date-fns"
import { useNavigate } from "react-router-dom"

import CustomButton from "./CustomButton"
import ReservationCalendar from "./ReservationCalendar"
import Counter from "./Counter"

export default function ReservaionInputContainer() {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false)
    const [reservationInfo, setReservationInfo] = useState({
        customCount: 2,
        roomCount: 1,
        checkInDate: new Date(),
        checkOutDate: addDays(new Date(), 1),
        reservationDate: new Date()
    })

    const updateCustomCount = (count) => {
        setReservationInfo(prevState => ({
            ...prevState,
            customCount: count
        }))
    }

    const updateRoomCount = (count) => {
        setReservationInfo(prevState => ({
            ...prevState,
            roomCount: count
        }))
    }

    const updateDate = (checkIn, checkOut) => {
        setReservationInfo(prevState => ({
            ...prevState,
            checkInDate: checkIn,
            checkOutDate: checkOut
        }))
    }

    const toggleRservationCalendar = () => {
        setIsVisible(!isVisible)
    }

    const moveToRoomsPage = () => {
        navigate('/rooms', { state: { isFiltered: true, reservationInfo } })
    }

    return (
        <>
            <div className={isVisible ? "reservationCalendarIsVisible" : "reservationCalendar"} >
                <div className="leftSide">
                    <ReservationCalendar onChangeDate={updateDate} />
                </div>
                <div className="rightSide">
                    <Counter title="인원" onChangeCounter={updateCustomCount} initCount="2" />
                    <Counter title="객실" onChangeCounter={updateRoomCount} initCount="1" />
                </div>
            </div>

            <div className="inputContainer">
                <div className="checkIn" onClick={toggleRservationCalendar}>
                    <p className="smallFont">체크인</p>
                    <p className="largeFont">{reservationInfo.checkInDate.toLocaleDateString()}</p>
                </div>

                <div className="checkOut" onClick={toggleRservationCalendar}>
                    <p className="smallFont">체크아웃</p>
                    <p className="largeFont">{reservationInfo.checkOutDate.toLocaleDateString()}</p>
                </div>

                <div className="customerCount" onClick={toggleRservationCalendar}>
                    <p className="smallFont">인원</p>
                    <p className="largeFont">{reservationInfo.customCount}</p>
                </div>

                <div className="roomCount" onClick={toggleRservationCalendar}>
                    <p className="smallFont">객실</p>
                    <p className="largeFont">{reservationInfo.roomCount}</p>
                </div>

                <div className="button">
                    <CustomButton title="예약하기" onClicked={moveToRoomsPage} />
                </div>
            </div>
        </>
    )
}