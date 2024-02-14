import React, { useState } from 'react'
import axios from 'axios';
import './PromotionalText.css'
import AdminHeader from '../AdminHome/AdminHeader';
import AdminFooter from '../AdminHome/AdminFooter';
import { useEffect } from 'react';




const PromotionalText = () => {
    const [product, setProduct] = useState(null);
    const [name, setName] = useState(null);
    const [material, setMaterial] = useState(null);
    const [color, setColor] = useState(null);
    const productlist = ["손수건", "타올"]
    const colorlist = ["화이트", "베이지", "그레이","블루","블랙"]
    const materiallist = ["면","대나무", "리넨 ", "바스티크 ","폴리에스테르 "]
    const [namelist1, setNamelist1] = useState([]);
    const [namelist2, setNamelist2] = useState([]);
    const [text, setText] = useState();

    const apply = () => {
        setText("제품군 : " + product + " 제품명 : " + name + " 색상 : " + color + " 소재 : " + material);
    };
    const reset = () => {
        setText("")
    }


   
  



    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "http://localhost:8085/kingsman/ProductList";
                const res = await axios.get(url);
                res.data.forEach(item => {
                    if (item.p_PRODUCT === '손수건') {
                        setNamelist1(prevList => [...prevList, item.p_NAME]);
                    } else {
                        setNamelist2(prevList => [...prevList, item.p_NAME]);
                    }
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const openaiApiKey = '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';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
    };

    const fixedQuestion = "홍보문구를 생성해줘 제품특징은 "+text+"고 글자수는 50자 미만으로 해줘";
  
    const [chatHistory, setChatHistory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: fixedQuestion }], // 고정된 질문 전달
                },
                { headers }
            );
    
            const chatResponse = response.data.choices[0].message.content;
            setChatHistory(chatResponse); // 채팅 기록을 업데이트하고 이전 기록을 지웁니다.
            sendPromotionalData(); // sendPromotionalData 함수 호출
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const sendPromotionalData = () => {
        if (product === null || name === null || material === null || color === null) {
            alert('제대로 입력해라');
            return;
        } else {
            const payload2 = {
                pr_QUESTION: fixedQuestion,
                pr_PRODUCT: product,
                pr_NAME: name,
                pr_TEXT: chatHistory,
            };
            console.log('payload2 값 확인:', payload2);
            axios
                .post('http://localhost:8085/kingsman/MemberPromotional', payload2, { withCredentials: true })
                .then((response) => {
                    console.log('데이터 전송 성공:', response.data);
                })
                .catch((error) => {
                    console.error('데이터 전송 중 오류:', error);
                });
        }
    };



    return (
        <div>
            <div className="PromotionalText">
                <AdminHeader />

                <h3 style={{ color: 'limegreen', textAlign: 'center', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>홍보문구</h3>
                <div style={{ textAlign: 'right' }}></div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>

                    <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#555', height:"120px"}}>

                    {chatHistory}
        

                    </p>

                </div>
                <hr />
                <div style={{ textAlign: 'right' }}><button onClick={apply} className='submit'>적용</button><button type="submit" onClick={reset} className='submit'>초기화</button><button type="submit" onClick={handleSubmit} className='submit'>홍보문구생성</button></div>
                <div style={{ textAlign: 'left', padding:"2px"}}>
                 　   제품군　:　<select onChange={(e) => setProduct(e.target.value)}>
                        <option value="" disabled selected>
                            선택하세요
                        </option>
                        {productlist.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>　 제품명 :　
                    <select onChange={(e) => setName(e.target.value)}>
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
                <div style={{ textAlign: 'center' , padding:"2px"}}>
                    <div style={{ textAlign: 'left' }}>　 　색상　:　<select onChange={(e) => setColor(e.target.value)}>
                        <option value="" disabled selected>
                            선택하세요
                        </option>
                        {colorlist.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                     　   소재　:　<select onChange={(e) => setMaterial(e.target.value)}>
                            <option value="" disabled selected>
                                선택하세요
                            </option>
                            {materiallist.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select></div>
                  

                </div>
                <div style={{ textAlign: 'center',padding:"8PX" }}>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className='PTT'
                    />
                </div>


                <div style={{ textAlign: 'center' }}>

                </div>

                <AdminFooter />
            </div>
        </div>
    )
}

export default PromotionalText