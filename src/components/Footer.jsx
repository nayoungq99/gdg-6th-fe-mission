import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
      <Link to="/cart" style={{ width: '60%' }}>
        <button style={{
          width: '100%',
          padding: '6px',
          backgroundColor: 'white',
          border: '2px solid #0085FF',
          color: '#0085FF',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '15px'
        }}>
          장바구니 구매하기
        </button>
      </Link>
    </footer>
  );
}
