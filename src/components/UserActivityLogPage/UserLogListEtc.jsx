import React, { useState } from 'react';

const UserLogListEtc = () => {
  const [moreBtn, setMoreBtn] = useState('더보기 ▼');
  const [isView, setIsView] = useState(false);
  const [readMoreExpression, setReadMoreExpression] = useState(null);

  const onClick = () => {
    if (moreBtn === '더보기 ▼') {
      setMoreBtn('접기 ▲');
      setIsView(true);
      setReadMoreExpression(
        <>
          <h1>범석이형 너무 떨렸어요ㅠㅠㅠ</h1>
        </>
      );
    } else {
      setMoreBtn('더보기 ▼');
      setIsView(false);
      setReadMoreExpression(null);
    }
  };

  return (
    <div className="userLogListEtc">
      <div className="readMore2">{readMoreExpression}</div>
      <span className="readMore" onClick={onClick}>
        {moreBtn}
      </span>
    </div>
  );
};

export default UserLogListEtc;