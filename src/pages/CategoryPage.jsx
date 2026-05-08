import React, { useState } from 'react';
import Item from '../components/Item';
import { categoryData } from '../data/mockData';

function CategoryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("카테고리 선택");

  const categories = ["의류", "전자기기", "화장품", "식품"];
  const handleCategoryClick = (categoryName) => {
    console.log(`${categoryName} 카테고리 클릭`);
    setSelected(categoryName);
    setIsOpen(false);
  };

  return (
    <div style={pageWrapperStyle}>
      
      {/* 카테고리 선택 */}
      <div style={topControlStyle}>
        <div style={dropdownContainerStyle}>
          <div 
            style={{...selectStyle, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected}
            <span style={{ fontSize: '12px', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }}>▼</span>
          </div>

          {isOpen && (
            <ul style={dropdownListStyle}>
              {categories.map((cat) => (
                <li 
                  key={cat} 
                  style={dropdownItemStyle}
                  onClick={() => handleCategoryClick(cat)}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#d1d1d1'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e1e1e1'}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 내 구매 내역 */}
      <div style={historyLinkWrapperStyle}>
        <span style={historyLinkStyle}>내 구매 내역</span>
      </div>

      {/* 상품 리스트 */}
      <div style={itemListStyle}>
        {categoryData.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </div>

    </div>
  );
}

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
  maxWidth: '800px', // 전체적인 가로폭 제한
  marginBottom: '70px',
  display: "flex",
  justifyContent: "flex-start"
};

const selectStyle = {
  fontSize: '16px',
  padding: '10px 15px',
  border: '1px solid #aaaaaa',
  borderRadius: '8px',
  width: '200px',
  color: '#8b8a8a',
  outline: 'none',
  appearance: 'none',
  WebkitAppearance: 'none', 
  MozAppearance: 'none',
};

const historyLinkWrapperStyle = {
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  justifyContent: 'flex-end', // 오른쪽 끝으로
  marginBottom: '10px',
};

const historyLinkStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  borderBottom: '2px solid #000000',
  paddingBottom: '1px',
  display: 'inline-block',
};

const itemListStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '800px',
  gap: '10px', // 아이템 카드 사이의 간격
};

const dropdownContainerStyle = {
  position: 'relative',
  width: '200px',
  border: '2px solid #000000',
  borderRadius: '8px',
};

const dropdownListStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  padding: 0,
  margin: '5px 0 0 0',
  listStyle: 'none',
  border: '1px solid #aaaaaa',
  backgroundColor: 'transparent',
  zIndex: 10,
};

const dropdownItemStyle = {
  padding: '10px 15px',
  cursor: 'pointer',
  color: '#000000',
  fontSize: '15px',
  backgroundColor: '#e1e1e1',
  border: '1px solid #aaaaaa',
  borderRadius: '8px',
  transition: 'background-color 0.2s',
  textAlign: 'left',
};





export default CategoryPage;