import React, { useContext, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { ScheduleContext } from '../../context/ScheduleContext'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = () => {
    const { scheduleInput, selectedDate, setSelectedDate, setScheduleDate } = useContext(ScheduleContext);

    // FullCalendar의 날짜 셀 클래스를 지정하는 함수
    const dayCellClassNames = (arg) => {
        if (selectedDate === arg.dateStr) {
            return 'highlighted-date';
        }
        return '';
    };

    return (
        <div className='calendarContainer'>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                titleFormat={{
                    year: 'numeric',
                    month: 'short',
                }}
                headerToolbar={{
                    start: 'title',
                    center: '',
                    end: 'prevYear,prev,today,next,nextYear',
                }}
                locale='ko'
                selectable={true}
                events={scheduleInput}
                dateClick={(arg) => {setSelectedDate(arg.dateStr); setScheduleDate(arg.dateStr)}} // 날짜 클릭 이벤트 핸들러 설정
                dayCellClassNames={dayCellClassNames} // 날짜의 셀 클래스 이름을 변경하는 함수 설정
            />
        </div>
    )
}

export default Calendar
