import useCartStore from "../store/useCartStore";
import Button from "./Button";
import { formatPrice } from "../utils/formatter";

export default function Item({ item }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div style={itemCardStyle}>
      <div style={itemInfoStyle}>
        {/* 상품명 유연하게 처리 */}
        <span style={itemNameStyle}>{item.name || item.itemName}</span>
        {/* 👈 중복되던 toLocaleString() 코드를 공통 함수로 깔끔하게 대체 */}
        <span style={itemPriceStyle}>{formatPrice(item.price)}</span>
      </div>

      <Button
        varients="primary"
        style={addToCartButtonStyle}
        onClick={() => addToCart(item)}
      >
        담기
      </Button>
    </div>
  );
}

const itemCardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "15px 20px",
  border: "1px solid #e1e1e1",
  borderRadius: "8px",
  backgroundColor: "#fff",
  boxSizing: "border-box",
};

const itemInfoStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

const itemNameStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333",
};

const itemPriceStyle = {
  fontSize: "14px",
  color: "#0085FF",
  fontWeight: "600",
};

const addToCartButtonStyle = {
  padding: "6px 12px",
  fontSize: "13px",
  backgroundColor: "#0085FF",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
