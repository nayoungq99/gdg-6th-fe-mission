import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Footer() {
  return (
    <footer style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
      <Link to="/cart" style={{ width: '60%' }}>
        <Button 
          varients='primary'
          style={{
          width: '100%',
          padding: '6px',
          fontSize: '15px'
        }}>
          장바구니 구매하기
        </Button>
      </Link>
    </footer>
  );
}
