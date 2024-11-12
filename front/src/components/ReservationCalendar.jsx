import { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from "date-fns"
import { ko } from 'date-fns/locale'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function ReservationCalendar( { onChangeDate }) {
    const [isWidth, setIsWidth] = useState(window.innerWidth <= 800)

    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
        key: 'selection'
    }])

    const changeDateRange = (item) => {
        const newDateRange = item.selection;
        setDate([newDateRange]);
        onChangeDate(newDateRange.startDate, newDateRange.endDate);
    }

    useEffect(() => {
        const changeCalendarSize = () => {
            setIsWidth(window.innerWidth <= 800)
        }

        window.addEventListener('resize', changeCalendarSize)

        return () => {
            window.removeEventListener('resize', changeCalendarSize)
        }
    }, [])

    return (
        <>
            <DateRange
                editableDateInputs={true}
                onChange={changeDateRange}
                moveRangeOnFirstSelection={false}
                ranges={date}
                months={isWidth ? 1 : 2}
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

