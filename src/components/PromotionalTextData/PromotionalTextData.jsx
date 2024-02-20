import './PromotionalTextData.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminHome/AdminHeader.tsx';
import AdminFooter from '../AdminHome/AdminFooter';

const PromotionalTextData = () => {
    const [list, setList] = useState(null);
    useEffect(() => {
        axios.post('http://localhost:8085/kingsman/PromotionalTextData', 
        null,
      { withCredentials: true,
        headers: {'Content-type': 'application/json'},
       
      })
        .then(response => {
          setList(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error searching users:', error);
        });
      }, []);
    
  return (
    <div>
       <AdminHeader />
        <div className="message-container">
            <div className='chatRoom'>
            {list && list.map((item, index) => (
                 <div  key={index}>
                 {index === 0 || item.pr_DATE.slice(0,10) !== list[index - 1].pr_DATE.slice(0,10) ? (
                   <p>{item.pr_DATE.slice(0,10)}</p>
                 ) : null}
                    <div className='message'>
                        <div className='balloon2'>{item.pr_QUESTION}</div>
                        <div><p>{item.pr_DATE.slice(11,16)}</p></div>
                        <div className='balloon'>{item.pr_TEXT}</div>
                        <div><p>{item.pr_DATE.slice(11,16)}</p></div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <AdminFooter />
    </div>
  )
}

export default PromotionalTextData