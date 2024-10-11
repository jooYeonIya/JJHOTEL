import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ReservationCalendar({ date, dateChange }) {
    return (
        <>
            <Calendar
                onChange={dateChange}
                defaultValue={date} 
                showNeighboringMonth={false}
                selectRange={true}
            />
        </>
    )
}

