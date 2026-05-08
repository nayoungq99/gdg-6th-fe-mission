import React, { use, useState } from 'react';

function Item({ item }) {
  const [count, setCount] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  const handleCountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]+$/.test(value)) {
      setCount(value);
    }
  }
  
  const handleCartClick = () => {
    if (!count || parseInt(count) <= 0) {
      alert("수량을 입력해주세요.");
      return;
    }
    setIsAdded(true);
    console.log(`${item.itemName} ${count}개가 장바구니에 담겼습니다.`);
  };

  return (
    <div style={itemCardStyle}>
      {/* 상품 정보 */}
      <div style={infoAreaStyle}>
        <div style={NameStyle}>{item.itemName}</div>
        <div style={priceAreaStyle}>
          <span style={priceStyle}>{item.price} 원</span>
          <span style={quantityStyle}>남은 수량: {item.quantity}개</span>
        </div>
      </div>

      {/* 입력 및 버튼 */}
      <div style={actionAreaStyle}>
        <input 
          type="text" 
          placeholder="개수 입력..." 
          value={count}
          onChange={handleCountChange}
          style={countInputStyle}
          disabled={isAdded}
        />
        <button 
          onClick={handleCartClick}
          disabled={isAdded}
          style={{
            ...cartButtonStyle,
            backgroundColor: isAdded ? '#d1d1d1' : '#0085FF',
            cursor: isAdded ? 'default' : 'pointer'
          }}
        >
          {isAdded ? '담기 완료' : '장바구니'}
        </button>
      </div>
    </div>
  );
}


const itemCardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '800px',
  padding: '30px 40px',
  marginBottom: '25px',
  border: '1px solid #aaaaaa',
  borderRadius: '8px',
  backgroundColor: '#fff',
};

const infoAreaStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  textAlign: 'left', // 텍스트를 왼쪽으로 정렬
};

const NameStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: 2,
  color: '#000000',
  marginBottom: '10px'
};

const priceAreaStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  color: '#888',
  fontSize: '14px'
};

const priceStyle = {
  fontSize: '18px',
  fontWeight: '500',
  color: '#333',
};

const quantityStyle = {
  marginLeft:'5px',
  fontSize: '14px',
  color: '#A0A0A0',
};

const actionAreaStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const countInputStyle = {
  width: '250px',
  padding: '9px',
  border: '1px solid #A0A0A0',
  borderRadius: '8px',
  outline: 'none',
  fontSize: '14px',
  textAlign:'center',
};

const cartButtonStyle = {
  padding: '9px 40px',
  backgroundColor: '#0085FF', // 파란색 버튼
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontSize: '14px',
  cursor: 'pointer',
};

export default Item;