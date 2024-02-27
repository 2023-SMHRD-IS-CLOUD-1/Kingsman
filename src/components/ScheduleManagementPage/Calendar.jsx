import React, { useContext, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ScheduleContext } from '../../context/ScheduleContext';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const Calendar = () => {
    const { scheduleInput, selectedDate, setSelectedDate, setScheduleDate, setScheduleInput } = useContext(ScheduleContext);
    const [selectedEvent, setSelectedEvent] = useState(null); // 클릭된 이벤트 정보를 저장할 상태
    const [showModal, setShowModal] = useState(false); // 모달 창 표시 여부를 관리하는 상태

    // FullCalendar의 날짜 셀 클래스를 지정하는 함수
    const dayCellClassNames = (arg) => {
        if (selectedDate === arg.dateStr) {
            return 'highlighted-date';
        }
        return '';
    };

    // 이벤트 클릭 시 해당 이벤트 정보를 저장하고 모달 창을 열기
    const handleEventClick = (clickInfo) => {
        setSelectedEvent(clickInfo.event); // 클릭된 이벤트 정보 저장
        setShowModal(true); // 모달 창 열기
    };

    // 완료 버튼 클릭 시 이벤트 텍스트에 줄 추가
    const handleCompleteButtonClick = () => {
        const eventId = selectedEvent._def.publicId; // 클릭된 이벤트의 id 가져오기
        setScheduleInput(scheduleInput.map(event => {
            if (event.id === eventId) {
                return {
                    ...event,
                    extendedProps: {
                        ...event.extendedProps,
                        completed: 1 // completed 속성을 true로 변경
                    }
                };
            }
            return event;
        }));

        const changeCompletedInfo = {
            s_INDEX: eventId,
            s_COMPLETED: 1
        }
        axios.post('http://43.201.66.47:8085/kingsman/changeCompleted', changeCompletedInfo, { withCredentials: true })
            .then(response => {
                window.location.reload(); // 완료 후 새로고침
            })
            .catch(error => {
            });



        setShowModal(false); // 모달 창 닫기
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
                dateClick={(arg) => { setSelectedDate(arg.dateStr); setScheduleDate(arg.dateStr) }} // 날짜 클릭 이벤트 핸들러 설정
                dayCellClassNames={dayCellClassNames} // 날짜의 셀 클래스 이름을 변경하는 함수 설정
                eventDisplay='auto' // 이벤트의 디스플레이 방식을 설정
                eventClick={handleEventClick} // 이벤트 클릭 핸들러 설정
                eventContent={(arg) => {
                    const isCompleted = arg.event.extendedProps.completed;
                    const eventContent = document.createElement('div');
                    eventContent.innerText = arg.event.title;
                    if (isCompleted) {
                        eventContent.style.textDecoration = 'line-through';
                        eventContent.style.color = 'black';
                    }
                    return { domNodes: [eventContent] };
                }}
            />
            {/* 모달 창 */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>이벤트 완료</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {selectedEvent && `${selectedEvent.startStr}`}<br />
                        {selectedEvent && `${selectedEvent._def.title}`}<br />
                        이벤트를 완료하시겠습니까?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        취소
                    </Button>
                    <Button variant="primary" onClick={handleCompleteButtonClick}>
                        완료
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Calendar;
