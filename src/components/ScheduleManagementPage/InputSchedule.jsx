import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ScheduleContext } from '../../context/ScheduleContext';

const InputSchedule = () => {
  const {
    selectedDate,
    setSelectedDate,
    setScheduleDate,
    setQuantity,
    setStore,
    setScheduleColor
  } = useContext(ScheduleContext);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setScheduleDate(e.target.value);
  };

  return (
    <div className='InputSchedule'>
      <div>
        <input
          type='date'
          value={selectedDate}
          onChange={handleDateChange}
          style={{
            height: "40px",
            width: "100%",
            margin: "0",
            appearance: "none",
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "10px",
            color: "gray"
          }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Form.Select
          aria-label="Default select example"
          style={{ color: "gray" }}
          onChange={(e) => setQuantity(e.target.value)}
        >
          <option>수량</option>
          <option value="50">50개</option>
          <option value="100">100개</option>
          <option value="200">200개</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          style={{ color: "gray" }}
          onChange={(e) => {
            setStore(e.target.value); 
            if (e.target.value === '출고') setScheduleColor("red");
            if (e.target.value === '입고') setScheduleColor("blue");
          }}
        >
          <option value="입고">입고</option>
          <option value="출고">출고</option>
        </Form.Select>
      </div>
      <div>
        <InputGroup>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder='특이사항을 입력해주세요'
            style={{ height: "83px" }}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default InputSchedule;
