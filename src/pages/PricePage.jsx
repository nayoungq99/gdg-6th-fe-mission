import React, { useState, useEffect } from 'react';
import Item from '../components/Item';
import { priceSelectedData } from '../data/mockData';

function PricePage() {
  const productList = priceSelectedData?.items || [];

  const [minInput, setMinInput] = useState('0');
  const [maxInput, setMaxInput] = useState('0');
  
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setDisplayData([...productList]);
  }, []);

  const handleSearch = () => {
    const min = Number(minInput);
    const max = Number(maxInput);

    const result = productList.filter((item) => {
        const Price = Number(item.price);

        if (max === 0) return Price >= min; 
        return Price >= min && Price <= max;
    });

    setDisplayData(result);
  };

  return (
    <div style={pageWrapperStyle}>
      
      {/* 상단 검색 영역 */}
      <div style={topControlStyle}>
        <div style={inputGroupStyle}>
          <input
            type="number"
            value={minInput}
            onChange={(e) => setMinInput(e.target.value)}
            style={minpriceInputStyle}
          />
          <input
            type="number"
            value={maxInput}
            onChange={(e) => setMaxInput(e.target.value)}
            style={maxpriceInputStyle}
          />
          <button style={searchButtonStyle} onClick={handleSearch}>
            검색
          </button>
        </div>
      </div>

      {/* 내 구매 내역 */}
      <div style={historyLinkWrapperStyle}>
        <span style={historyLinkStyle}>내 구매 내역</span>
      </div>

      {/* 상품 리스트 */}
      <div style={itemListStyle}>
          {displayData.map((product) => (
            <Item key={product.id} item={product} />
          ))}
      </div>

    </div>
  );
}

export default PricePage;


const pageWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '80vh',
    padding: '40px 20px',
    backgroundColor: '#ffffff',
};

const topControlStyle = {
    width: '100%',
    maxWidth: '800px',
    marginBottom: '60px',
    display: "flex",
    justifyContent: "center"
};

const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '20px', // 입력창과 버튼 사이 간격
};

const minpriceInputStyle = {
    flex:1,
    padding: '8px 10px',
    border: '1px solid #aaaaaa',
    borderRadius: '8px',
    outline: 'none',
    fontSize: '16px',
};

const maxpriceInputStyle = {
    flex: 1,
    padding: '8px 10px',
    border: '1px solid #aaaaaa',
    borderRadius: '8px',
    outline: 'none',
    fontSize: '16px',
};

const searchButtonStyle = {
    width: '150px',
    padding: '8px 0', // 가로로 긴 검색 버튼
    backgroundColor: '#0085FF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
};

const historyLinkWrapperStyle = {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '10px',
};

const historyLinkStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderBottom: '2px solid #333',
    paddingBottom: '1px',
};

const itemListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
    gap: '10px',
};
