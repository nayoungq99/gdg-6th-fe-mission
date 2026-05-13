import React from 'react';
import Button from './Button';
import Input from './Input';

export default function Content() {
  return (
    <main style={mainContainerStyle}>
      <div style={centeredContainerStyle}>
        
        <div style={searchBoxGroupStyle}>
          <Input type="text" placeholder="상품 검색..." style={inputStyle} />
          <Button
            varients='primary'
            style={searchButtonStyle}
            onClick={() => console.log("검색 실행")}>
              검색
          </Button>
        </div>

        {/* 문구 영역 */}
        <div style={backgroundLogoGroupStyle}>
          <img 
            src="gdg-logo.svg"  
            style={backgroundLogoImageStyle} 
          />
          <p style={emptyMessageStyle}>검색 결과가 없습니다.</p>
        </div>

      </div>
    </main>
  );
}


const mainContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  minHeight: '70vh',
  backgroundColor: '#ffffff'
};

const centeredContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
  gap: '30px' // 이미지와 검색창 사이 간격 조절
};

const searchBoxGroupStyle = {
  display: 'flex',
  gap: '15px',
  width: '110%',
  padding: '10px 20px'
};

const inputStyle = {
  flex: 1,
  padding: '5px 10px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  fontSize: '16px',
  outline: 'none'
};

const searchButtonStyle = {
  padding: '0 60px',
  backgroundColor: '#0085FF',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  cursor: 'pointer'
};

const backgroundLogoGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center'
};

const backgroundLogoImageStyle = {
  width: '320px',
  height: 'auto',
  marginBottom: '-60px',
  opacity: 0.2  // 투명도
};

const emptyMessageStyle = {
  fontSize: '18px',
  color: '#999',
  fontWeight: '500',
  opacity: 1
};