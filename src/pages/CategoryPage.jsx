import { useEffect, useState } from "react";
import Item from "../components/Item";
import { fetchCategoryData } from "../apis/categoryApi";
import Button from "../components/Button";

function CategoryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("카테고리 선택");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["의류", "전자기기", "화장품", "식품"];

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCategoryData();
        setProducts(data);
      } catch {
        console.error("데이터를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

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
          <Button
            varients="primary"
            className="w-full flex justify-between items-center text-gray-500 border-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected}
            <span
              style={{
                fontSize: "12px",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.2s",
              }}
            >
              ▼
            </span>
          </Button>

          {isOpen && (
            <ul style={dropdownListStyle}>
              {categories.map((cat) => (
                <li
                  key={cat}
                  style={dropdownItemStyle}
                  onClick={() => handleCategoryClick(cat)}
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
        <Button
          varients="primary"
          className="border-none p-0 text-black border-b-2 border-black rounded-none hover:bg-transparent"
        >
          내 구매 내역
        </Button>
      </div>

      {/* 상품 리스트 */}
      <div style={itemListStyle}>
        {isLoading ? (
          <div>로딩 중...</div>
        ) : (
          products.map((product) => <Item key={product.id} item={product} />)
        )}
      </div>
    </div>
  );
}

export default CategoryPage;

const pageWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  minHeight: "80vh",
  padding: "40px 20px",
  backgroundColor: "#ffffff",
};

const topControlStyle = {
  width: "100%",
  maxWidth: "800px",
  marginBottom: "60px",
  display: "flex",
  justifyContent: "flex-start",
};

const historyLinkWrapperStyle = {
  width: "100%",
  maxWidth: "800px",
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "10px",
};

const itemListStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "800px",
  gap: "10px",
};

const dropdownContainerStyle = {
  position: "relative",
  width: "200px",
  border: "2px solid #000000",
  borderRadius: "8px",
};

const dropdownListStyle = {
  position: "absolute",
  top: "100%",
  left: 0,
  width: "100%",
  padding: 0,
  margin: "5px 0 0 0",
  listStyle: "none",
  border: "1px solid #aaaaaa",
  backgroundColor: "transparent",
  zIndex: 10,
};

const dropdownItemStyle = {
  padding: "10px 15px",
  cursor: "pointer",
  color: "#000000",
  fontSize: "15px",
  backgroundColor: "#e1e1e1",
  border: "1px solid #aaaaaa",
  borderRadius: "8px",
  transition: "background-color 0.2s",
  textAlign: "left",
};
