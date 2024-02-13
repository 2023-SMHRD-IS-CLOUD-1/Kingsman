import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const InputSchedule = () => {
  return (
    <div className='InputSchedule'>
      <div>
    
          <input type='date' style={{
            height:"50px",
            width:"100%",
            margin:"0",
            appearance:"none",
            padding:"10px",
            border: "1px  gray",
            borderRadius:"10px",
            color:"gray"

          }}></input>

      </div>
      <div style={{ display: "flex" }}>
        <Form.Select aria-label="Default select example" style={{color:"gray"}}>
          <option>수량</option>
          <option value="50">50개</option>
          <option value="100">100개</option>
          <option value="200">200개</option>
        </Form.Select >
        <Form.Select aria-label="Default select example" style={{color:"gray"}}>
          <option value="입고">입고</option>
          <option value="출고">출고</option>
        </Form.Select>
      </div>
      <div>
        <InputGroup>
          <Form.Control as="textarea" aria-label="With textarea" placeholder='특이사항을 입력해주세요' 
          style={{height:"98px"}}/>
        </InputGroup>
      </div>
    </div>
  )
}

export default InputSchedule