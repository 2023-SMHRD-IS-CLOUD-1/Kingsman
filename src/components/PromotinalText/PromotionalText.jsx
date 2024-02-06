import React, { useState } from 'react'
import axios from 'axios';
import './PromotionalText.css'
import AdminHeader from '../AdminHome/AdminHeader';
import AdminFooter from '../AdminHome/AdminFooter';
const PromotionalText = () => {
    const [product, setProduct] = useState(null);
    const [name, setName] = useState(null);
    const [feel, setFeel] = useState(null);
    const [material, setMaterial] = useState(null);
    const [color, setColor] = useState(null);
    const [text, setText] = useState(null);
    const productlist = ["손수건", "타올"]
    const namelist1 = ["손수건1", "손수건2", "손수건3", "손수건4"]
    const namelist2 = ["타올1", "타올2", "타올3", "타올4"]
    const [selectedFeel, setSelectedFeel] = useState(null);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const lastlist = [{ product, name, feel, material, color, text }]
    const [promotionalText, setPromotionalText] = useState();
    const feelbtn1 = () => {
        setFeel("질감1");
        setSelectedFeel("질감1");
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 질감1, 소재는 ${material ?? 'xxx'}, 색깔은 ${color ?? 'xxx'}입니다.`);
    };
    const feelbtn2 = () => {
        setFeel("질감2");
        setSelectedFeel("질감2");
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 질감1, 소재는 ${material ?? 'xxx'}, 색깔은 ${color ?? 'xxx'}입니다.`);
    };
    const feelbtn3 = () => {
        setFeel("질감3");
        setSelectedFeel("질감3");
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 질감1, 소재는 ${material ?? 'xxx'}, 색깔은 ${color ?? 'xxx'}입니다.`);
    };
    const feelbtn4 = () => {
        setFeel("질감4");
        setSelectedFeel("질감4");
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 질감1, 소재는 ${material ?? 'xxx'}, 색깔은 ${color ?? 'xxx'}입니다.`);
    };


    const matbtn1 = () => {
        setMaterial("소재1");
        setSelectedMaterial("소재1");
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 소재1, 색깔은 ${color ?? 'xxx'}입니다.`);
    };
    const matbtn2 = () => {
        setMaterial("소재2");
        setSelectedMaterial("소재2");
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 소재2, 색깔은 ${color ?? 'xxx'}입니다.`);
    };
    const matbtn3 = () => {
        setMaterial("소재3");
        setSelectedMaterial("소재3");
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 소재3, 색깔은 ${color ?? 'xxx'}입니다.`);
    };
    const matbtn4 = () => {
        setMaterial("소재4");
        setSelectedMaterial("소재4");
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 소재4, 색깔은 ${color ?? 'xxx'}입니다.`);
    };


    const colorbtn1 = () => {
        setColor("색깔1");
        setSelectedColor("색깔1")
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 ${material ?? 'xxx'}, 색깔은 색깔1입니다.`);
    };
    const colorbtn2 = () => {
        setColor("색깔2");
        setSelectedColor("색깔2")
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 ${material ?? 'xxx'}, 색깔은 색깔2입니다.`);
    };
    const colorbtn3 = () => {
        setColor("색깔3");
        setSelectedColor("색깔3")
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 ${material ?? 'xxx'}, 색깔은 색깔3입니다.`);
    };
    const colorbtn4 = () => {
        setColor("색깔4");
        setSelectedColor("색깔4")
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 ${material ?? 'xxx'}, 색깔은 색깔4입니다.`);
    };

    const PromotionalBtn = () => {
        if (product === null || name === null || feel === null || material === null || color === null) {
            alert('제대로 입력해라');
            return;
        }
        else {
            sendPromotionalData();


        }
    };
    const sendPromotionalData = () => {

        if (product === null || name === null || feel === null || material === null || color === null) {
            alert('제대로 입력해라');
            return;
        }


       
        const payload2 = {
                promotionalText: promotionalText,
                product: product,
                name: name
        };
        console.log('payload2 값 확인:', payload2);
        axios.post('http://localhost:8088/SpringBoot/MemberPromotional', payload2, { withCredentials: true })
   .then(response => {
       console.log('데이터 전송 성공:', response.data);
   })
   .catch(error => {
       console.error('데이터 전송 중 오류:', error);
   });
    };
    const handleProductChange = (selectedProduct) => {
        setProduct(selectedProduct);
        setPromotionalText(`제품군은 ${selectedProduct ?? 'xxx'}이고, 제품명은 ${name ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 ${material ?? 'xxx'}, 색깔은 ${color ?? 'xxx'}입니다.`);
    };
    const handleNameChange = (selectedName) => {
        setName(selectedName);
        setPromotionalText(`제품군은 ${product ?? 'xxx'}이고, 제품명은 ${selectedName ?? 'xxx'}이며, 질감은 ${feel ?? 'xxx'}, 소재는 ${material ?? 'xxx'}, 색깔은 ${color ?? 'xxx'}입니다.`);
    };

    


    return (

        <div className="PromotionalText">
            <AdminHeader />
            <div style={{ textAlign: 'center' }}>
                제품군　:　<select onChange={(e) => handleProductChange(e.target.value)}>
                    <option value="" disabled selected>
                        선택하세요
                    </option>
                    {productlist.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>　　제품명　:
                <select onChange={(e) => handleNameChange(e.target.value)}>
                    <option value="" disabled selected>
                        선택하세요
                    </option>
                    {product === "손수건"
                        ? namelist1.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))
                        : product === "타올"
                            ? namelist2.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))
                            : null}
                </select>
            </div>
            <div style={{ textAlign: 'center' }}>
                질감　:
                <button onClick={feelbtn1} style={selectedFeel === '질감1' ? { background: '#3498db' } : null} className='selectbtn'>
                    질감1
                </button>
                <button onClick={feelbtn2} style={selectedFeel === '질감2' ? { background: '#3498db' } : null} className='selectbtn'>
                    질감2
                </button>
                <button onClick={feelbtn3} style={selectedFeel === '질감3' ? { background: '#3498db' } : null} className='selectbtn'>
                    질감3
                </button>
                <button onClick={feelbtn4} style={selectedFeel === '질감4' ? { background: '#3498db' } : null} className='selectbtn'>
                    질감4
                </button>
            </div>
            <div style={{ textAlign: 'center' }}>소재　:
                <button onClick={matbtn1} style={selectedMaterial === '소재1' ? { background: '#3498db' } : null} className='selectbtn'>
                    소재1
                </button>
                <button onClick={matbtn2} style={selectedMaterial === '소재2' ? { background: '#3498db' } : null} className='selectbtn'>
                    소재2
                </button>
                <button onClick={matbtn3} style={selectedMaterial === '소재3' ? { background: '#3498db' } : null} className='selectbtn'>
                    소재3
                </button>
                <button onClick={matbtn4} style={selectedMaterial === '소재4' ? { background: '#3498db' } : null} className='selectbtn'>
                    소재4
                </button>
            </div>
            <div style={{ textAlign: 'center' }}>
                색깔　:
                <button onClick={colorbtn1} style={selectedColor === '색깔1' ? { background: '#3498db' } : null} className='selectbtn'>
                    색깔1
                </button>
                <button onClick={colorbtn2} style={selectedColor === '색깔2' ? { background: '#3498db' } : null} className='selectbtn'>
                    색깔2
                </button>
                <button onClick={colorbtn3} style={selectedColor === '색깔3' ? { background: '#3498db' } : null} className='selectbtn'>
                    색깔3
                </button>
                <button onClick={colorbtn4} style={selectedColor === '색깔4' ? { background: '#3498db' } : null} className='selectbtn'>
                    색깔4
                </button>


            </div>
            <div style={{ textAlign: 'center' }}>
                <textarea
                    value={promotionalText}
                    onChange={(e) => setPromotionalText(e.target.value)}
                    className='PTT'
                />
            </div>
            <div style={{ textAlign: 'right' }}><button type="submit" onClick={PromotionalBtn} className='submit'>홍보 문구 생성</button></div>

            <div style={{ textAlign: 'center' }}>

            </div>
            <h3 style={{ color: 'limegreen', textAlign: 'center', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>홍보문구</h3>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#555' }}>



                </p>
            </div>
            <AdminFooter />
        </div>
    )
}

export default PromotionalText