import React, { useState } from 'react'
import axios from 'axios';
import './PromotionalText.css'
import AdminHeader from '../AdminHome/AdminHeader';
import AdminFooter from '../AdminHome/AdminFooter';
import { useEffect } from 'react';
import ChatGPTImage from '../../image/ChatGPT.jpg';




const PromotionalText = () => {
    const [product, setProduct] = useState(null);
    const [name, setName] = useState(null);
    const [material, setMaterial] = useState(null);
    const [color, setColor] = useState(null);
    const productlist = ["손수건", "타올"]
    const colorlist = ["화이트", "베이지", "그레이", "블루", "블랙"]
    const materiallist = ["면", "대나무", "리넨 ", "바스티크 ", "폴리에스테르 "]
    const [namelist1, setNamelist1] = useState([]);
    const [namelist2, setNamelist2] = useState([]);
    const [text, setText] = useState();
    const date = new Date();
    const [temp, setTemp] = useState('');
    const [city, setCity] = useState('');
    const [dd, setDd] = useState('');
    const [img, setImg] = useState('')
    const [humidity,setHumidity]=useState('')
    const [isLoading, setIsLoading] = useState(false);
    useEffect(function () {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.564214&lon=127.001699&appid=b3bb290e3cf3e3f29e55972f489fe79a&units=metric')
            .then((res) => {
                console.log(res)
                return res.json();
            })
            .then((res) => {
                console.log("s", res)
                setCity(res.name)
                setTemp(res.main.temp)
                setDd(date.toLocaleDateString());
                setImg(res.weather[0].icon)
                setHumidity(res.main.humidity)
                console.log(humidity)
            })
    })
    

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

    const fixedQuestion = "홍보문구를 생성해줘 제품특징은 " + text + "고 글자수는 50자 미만으로 해줘";

    const [chatHistory, setChatHistory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: fixedQuestion }],
                },
                { headers }
            );
            const chatResponse = response.data.choices[0].message.content;
            setChatHistory(chatResponse);
            console.log(chatResponse + "dddddddddddddddddd")
            sendPromotionalData();
        } catch (error) {
            console.error('Error:', error);
        }
        finally {
            setIsLoading(false); // 로딩 종료
        }
    };
    const sendPromotionalData = () => {
        console.log("--------------------" + chatHistory)
        if (product === null || name === null || material === null || color === null) {
            alert('제대로 입력해라');
            return;
        } else {
            const payload2 = {
                pr_QUESTION: fixedQuestion,
                pr_PRODUCT: product,
                pr_NAME: name,
                pr_TEXT: chatHistory
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

                <div style={{ textAlign: 'right' }}></div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>

                <div className="bubble-container" style={{ height: "120px", textAlign: "left" }}>
    {isLoading ? (
        <div className="bubble">홍보문구 생성 중...</div>
    ) : (
        <>
            {chatHistory ? (
                <div className="bubble">{chatHistory}</div>
            ) : (
                <div className='chatgptimg'><img src={ChatGPTImage} alt="No chat history available" className='chatimg' /></div>
            )}
        </>
    )}
</div>

                </div>
                <br/>
                <hr />

                <div style={{ textAlign: 'center', padding: "2px" }}>
                    <select onChange={(e) => setProduct(e.target.value)}>
                        <option value="" disabled selected>
                            제품군
                        </option>
                        {productlist.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <select onChange={(e) => setName(e.target.value)}>
                        <option value="" disabled selected>
                            제품명
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
                <div style={{ textAlign: 'center', padding: "2px" }}>
                    <div style={{ textAlign: 'center' }}><select onChange={(e) => setColor(e.target.value)}>
                        <option value="" disabled selected>
                            색상
                        </option>
                        {colorlist.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                        <select onChange={(e) => setMaterial(e.target.value)}>
                            <option value="" disabled selected>
                                소재
                            </option>
                            {materiallist.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select></div>
                </div>
              <div style={{ textAlign: "center", margin: "10px;", height:"40px"}}><img src={`https://openweathermap.org/img/wn/${img}.png`}></img>
                     {temp}°C　습도:{humidity}%</div>
                <div style={{ textAlign: 'center' }}><button onClick={apply} className='submit'>적용</button><button type="submit" onClick={reset} className='submit'>초기화</button><button type="submit" onClick={handleSubmit} className='submit'>홍보문구생성</button></div>
                <div style={{ textAlign: 'center', padding: "8PX" }}>
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