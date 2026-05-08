import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={footerWrapperStyle}>
      <Link to="/cart" style={linkStyle}>
        <button style={bottomPurchaseButtonStyle}>
          장바구니 구매하기
        </button>
      </Link>
    </footer>
  );
}

export default Footer;

const footerWrapperStyle = {
  display: 'flex',
  justifyContent: 'center', 
  width: '100%',
  padding: '0 20px 60px 20px',
};

const linkStyle = {
  width: '100%',
  maxWidth: '800px', 
  display: 'block', 
  textDecoration: 'none',
};

const bottomPurchaseButtonStyle = {
  width: '100%', 
  padding: '13px 0',
  backgroundColor: 'white',
  border: '2px solid #0085FF',
  color: '#0085FF',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: '0.2s',
};