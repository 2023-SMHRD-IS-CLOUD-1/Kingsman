import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useContext } from 'react'
import { ScheduleContext } from '../../context/ScheduleContext'

const Calendar = () => {

    const {scheduleInput} = useContext(ScheduleContext);
    
    return (
        <div className='calendarContainer'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                titleFormat={{
                    year:'numeric',
                    month:'short',
                    // day:'2-digit'
                }}
                headerToolbar ={{
                    start:'title',
                    center:'',
                    end:'prevYear,prev,today,next,nextYear',
                }}
                locale='ko'
                
                events={scheduleInput}
                />
        </div>
    )
}

export default Calendar