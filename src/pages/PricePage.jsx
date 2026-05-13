import React, { useState, useEffect } from 'react';
import Item from '../components/Item';
import { fetchPriceListData } from '../apis/priceApi';
import Button from '../components/Button';
import Input from '../components/Input';

function PricePage() {
  const [productList, setProductList] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const [minInput, setMinInput] = useState('0');
  const [maxInput, setMaxInput] = useState('0');
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInitialData = async () => {
      try {
        setIsLoading(true);
        const items = await fetchPriceListData();
        setProductList(items);      // 원본 데이터 저장
        setDisplayData(items);    // 처음엔 전체 리스트 표시
      } catch (error) {
        console.error("데이터 초기화 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getInitialData();
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
          <Input
            type="number"
            value={minInput}
            onChange={(e) => setMinInput(e.target.value)}
          />
          <Input
            type="number"
            value={maxInput}
            onChange={(e) => setMaxInput(e.target.value)}
          />
          <Button 
            varients='primary'
            style={searchButtonStyle}
            onClick={handleSearch}
          >
            검색
          </Button>
        </div>
      </div>

      {/* 내 구매 내역 */}
      <div style={historyLinkWrapperStyle}>
        <span style={historyLinkStyle}>내 구매 내역</span>
      </div>

      {/* 상품 리스트 */}
      <div style={itemListStyle}>
        {isLoading ? (
          <div>상품을 불러오는 중...</div>
        ) : (
          displayData.length > 0 ? (
            displayData.map((product) => (
              <Item key={product.id} item={product} />
            ))
          ) : (
            <div>설정한 가격 범위에 맞는 상품이 없습니다.</div>
          )
        )}
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
    justifyContent: "center",
    marginLeft:'150px',
};

const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '20px', // 입력창과 버튼 사이 간격
};

const minpriceInputStyle = {
    width: '200px',
    padding: '8px 10px',
    border: '1px solid #aaaaaa',
    borderRadius: '8px',
    outline: 'none',
    fontSize: '16px',
};

const maxpriceInputStyle = {
    width: '200px',
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
