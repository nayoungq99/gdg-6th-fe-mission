import React, { useState, useEffect } from 'react';
import Item from '../components/Item';
import { sortedData } from '../data/mockData';
import Button from '../components/Button';
import Input from '../components/Input';

function SortPage() {
  const productList = sortedData || [];
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("정렬 기준 선택");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (productList.length > 0) {
        setDisplayData([...productList]);
    }
  }, [productList]);

  const sortOptions = ["이름", "가격 낮은 순", "가격 높은 순"];

  const handleSort = (option) => {
    setSelectedSort(option);
    setIsOpen(false);

    let sortedArray = [...productList];

    if (option === "이름") {
      sortedArray.sort((a, b) => (a.itemName || "").localeCompare(b.itemName || ""));
    } else if (option === "가격 낮은 순") {
      sortedArray.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    } else if (option === "가격 높은 순") {
      sortedArray.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    }

    setDisplayData(sortedArray);
  };

  return (
    <div style={pageWrapperStyle}>
      {/* 상단 정렬 드롭다운 영역 */}
      <div style={topControlStyle}>
        <div style={dropdownContainerStyle}>
          <div 
            style={{...selectStyle, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedSort}
            <span style={{ fontSize: '12px', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }}>▼</span>
          </div>

          {isOpen && (
            <ul style={dropdownListStyle}>
              {sortOptions.map((opt) => (
                <li 
                  key={opt} 
                  style={dropdownItemStyle}
                  onClick={() => handleSort(opt)}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#d1d1d1'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e1e1e1'}
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div style={historyLinkWrapperStyle}>
        <span style={historyLinkStyle}>내 구매 내역</span>
      </div>

      {/* 정렬된 상품 리스트 */}
      <div style={itemListStyle}>
        {displayData.length > 0 ? (
            displayData.map((product, index) => (
          <Item key={`${product.id}-${index}`} item={product} />
        ))
    ) : (
        <p>데이터를 불러오는 중입니다...</p>
    )}
      </div>
    </div>
  );
}

export default SortPage;


const pageWrapperStyle = { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '100%', 
    minHeight: '80vh', 
    padding: '40px 20px' };

const topControlStyle = { 
    width: '100%',
    maxWidth: '800px', 
    marginBottom: '70px',
    display: "flex", 
    justifyContent: "flex-start" };

const selectStyle = { 
    fontSize: '16px', 
    padding: '10px 15px', 
    border: '1px solid #aaaaaa', 
    borderRadius: '8px', 
    width: '200px', 
    color: '#8b8a8a', 
    backgroundColor: 'white' };

const dropdownContainerStyle = { 
    position: 'relative', 
    width: '200px' };

const dropdownListStyle = { 
    position: 'absolute', 
    top: '100%', 
    left: 0, 
    width: '100%', 
    padding: 0, 
    listStyle: 'none', 
    zIndex: 10 };

const dropdownItemStyle = { 
    padding: '10px 15px', 
    cursor: 'pointer', 
    color: '#333', 
    fontSize: '15px', 
    backgroundColor: '#e1e1e1', 
    border: '1px solid #aaaaaa', 
    borderRadius: '8px', 
 };

const historyLinkWrapperStyle = { 
    width: '100%', 
    maxWidth: '800px', 
    display: 'flex', 
    justifyContent: 'flex-end', 
    marginBottom: '10px' };

const historyLinkStyle = { 
    fontSize: '14px', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    borderBottom: '2px solid #333', 
    paddingBottom: '1px' };

const itemListStyle = { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '100%', 
    maxWidth: '800px', 
    gap: '10px' };

// const bottomPurchaseButtonStyle = { 
//     width: '100%', 
//     maxWidth: '800px', 
//     marginTop: '50px',
//     padding: '15px 0', 
//     backgroundColor: '#fff', 
//     color: '#0085FF', 
//     border: '2px solid #0085FF', 
//     borderRadius: '8px', 
//     fontSize: '18px', 
//     fontWeight: 'bold', 
//     cursor: 'pointer' };