import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from "date-fns"
import { ko } from 'date-fns/locale'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function ReservationCalendar() {

    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
        key: 'selection'
    }])

    return (
        <>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                months={2}
                direction="horizontal"
                showDateDisplay={false}
                showMonthAndYearPickers={false}
                locale={ko} 
                monthDisplayFormat="MM월"
                minDate={new Date()}
            />
        </>
    )
}
