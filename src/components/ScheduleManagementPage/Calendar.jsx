import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
    
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
                
                events={[
                    { title: '프로젝트 시작', date: '2024-02-01' },
                    { title: '수건수량 분석', date: '2024-02-02' }
                ]}
                />
        </div>
    )
}

export default Calendar