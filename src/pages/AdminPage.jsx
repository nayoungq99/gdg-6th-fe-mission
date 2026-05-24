import { useState, useEffect } from "react";
import {
  registerProduct,
  addStock,
  deleteProduct,
  getProductList,
} from "../apis/adminApi";
import Button from "../components/Button";
import Input from "../components/Input";

function AdminPage() {
  const categoryOptions = ["의류", "전자기기", "화장품", "식품"];

  // 1. 상품 등록 상태 (요청하신 대로 name, price, stock 규격을 맞췄습니다)
  const [registerForm, setRegisterForm] = useState({
    name: "",
    price: "0",
    stock: "0",
    category: "",
  });

  // 2. 재고 추가 상태 (API 이름 규격 통일)
  const [addForm, setAddForm] = useState({ name: "", quantity: "0" });

  // 3. 상품 삭제 상태
  const [deleteName, setDeleteName] = useState("");

  /* eslint-disable-next-line no-unused-vars */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProductList();
        if (result.success) {
          setProducts(result.data);
        }
      } catch (error) {
        console.error("화면 로드 중 상품 목록 호출 실패:", error);
      }
    };

    fetchProducts();
  }, []);

  // --- 핸들러 함수들 ---
  const handleRegister = async () => {
    const { name, price, stock, category } = registerForm;
    if (!name || !price || !stock || !category) {
      return alert("모든 정보를 입력해주세요.");
    }
    // adminApi.js로 보낼 데이터 포맷팅
    const productData = {
      itemName: name,
      price: price,
      quantity: stock,
      category: category,
    };

    await registerProduct(productData);
    setRegisterForm({
      name: "",
      price: "0",
      stock: "0",
      category: "",
    });
  };

  const handleAddStock = async () => {
    if (!addForm.name || !addForm.quantity) {
      return alert("상품명과 수량을 입력해주세요.");
    }
    await addStock(addForm.name, addForm.quantity);
    setAddForm({ name: "", quantity: "0" });
  };

  const handleDelete = async () => {
    if (!deleteName) return alert("삭제할 상품명을 입력해주세요.");
    await deleteProduct(deleteName);
    setDeleteName("");
  };

  return (
    <div style={adminWrapperStyle}>
      {/* --- 상품 등록 섹션 --- */}
      <section style={sectionContainerStyle}>
        <h3 style={sectionTitleStyle}>상품 등록</h3>
        <div style={adminCardStyle}>
          <div style={rowStyle}>
            <div style={fieldStyle}>
              <span style={labelStyle}>상품명</span>
              <Input
                placeholder="상품명 입력..."
                value={registerForm.name}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, name: e.target.value })
                }
                style={inputInCardStyle}
              />
            </div>
            <div style={fieldStyle}>
              <span style={labelStyle}>수량</span>
              <Input
                type="number"
                value={registerForm.stock}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, stock: e.target.value })
                }
                style={inputInCardStyle}
              />
            </div>
          </div>

          <div style={rowStyle}>
            <div style={fieldStyle}>
              <span style={labelStyle}>가격</span>
              <Input
                type="number"
                value={registerForm.price}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, price: e.target.value })
                }
                style={inputInCardStyle}
              />
            </div>
            <div style={fieldStyle}>
              <span style={labelStyle}>카테고리</span>
              <select
                style={selectStyle}
                value={registerForm.category}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, category: e.target.value })
                }
              >
                <option value="" disabled hidden>
                  카테고리 선택
                </option>
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p style={helperTextStyle}>
            * 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용해주세요.
          </p>

          <Button
            varients="primary"
            style={adminButtonStyle}
            onClick={handleRegister}
          >
            등록
          </Button>
        </div>
      </section>

      {/* --- 재고 추가 섹션 --- */}
      <section style={sectionContainerStyle}>
        <h3 style={sectionTitleStyle}>재고 추가</h3>
        <div style={adminCardStyle}>
          <div style={rowStyle}>
            <div style={fieldStyle}>
              <span style={labelStyle}>상품명</span>
              <Input
                placeholder="상품명 입력..."
                value={addForm.name}
                onChange={(e) =>
                  setAddForm({ ...addForm, name: e.target.value })
                }
                style={inputInCardStyle}
              />
            </div>
            <div style={fieldStyle}>
              <span style={labelStyle}>수량</span>
              <Input
                type="number"
                value={addForm.quantity}
                onChange={(e) =>
                  setAddForm({ ...addForm, quantity: e.target.value })
                }
                style={inputInCardStyle}
              />
            </div>
          </div>
          <Button
            varients="primary"
            style={adminButtonStyle}
            onClick={handleAddStock}
          >
            추가
          </Button>
        </div>
      </section>

      {/* --- 상품 삭제 섹션 --- */}
      <section style={sectionContainerStyle}>
        <h3 style={sectionTitleStyle}>상품 삭제</h3>
        <div style={adminCardStyle}>
          <div style={{ ...rowStyle, width: "50%" }}>
            <div style={fieldStyle}>
              <span style={labelStyle}>상품명</span>
              <Input
                placeholder="상품명 입력..."
                value={deleteName}
                onChange={(e) => setDeleteName(e.target.value)}
                style={inputInCardStyle}
              />
            </div>
          </div>
          <Button style={deleteButtonStyle} onClick={handleDelete}>
            삭제
          </Button>
        </div>
      </section>
    </div>
  );
}

export default AdminPage;

const adminWrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "80px 20px",
  gap: "60px",
  backgroundColor: "#fff",
  minHeight: "100vh",
};

const sectionContainerStyle = {
  width: "100%",
  maxWidth: "750px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const sectionTitleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#000",
  marginBottom: "20px",
  textAlign: "left",
};

const adminCardStyle = {
  width: "100%",
  maxWidth: "800px",
  backgroundColor: "#fff",
  border: "1px solid #E0E0E0",
  borderRadius: "12px",
  padding: "30px 40px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  boxSizing: "border-box",
};

const rowStyle = {
  display: "flex",
  gap: "30px",
  width: "100%",
  justifyContent: "space-between",
};

const fieldStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const labelStyle = {
  fontWeight: "bold",
  fontSize: "15px",
  color: "#333",
  minWidth: "50px",
};

const inputInCardStyle = {
  flex: 1,
  height: "42px",
  border: "1px solid #8c8a8a",
  borderRadius: "8px",
  padding: "0 12px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const selectStyle = {
  flex: 1,
  height: "42px",
  border: "1px solid #8c8a8a",
  borderRadius: "8px",
  padding: "0 10px",
  backgroundColor: "white",
  fontSize: "14px",
  color: "#b9b7b7",
  outline: "none",
  cursor: "pointer",
};

const helperTextStyle = {
  fontSize: "13px",
  color: "#B0B0B0",
  marginTop: "-5px",
  textAlign: "left",
};

const adminButtonStyle = {
  alignSelf: "flex-end",
  width: "160px",
  height: "40px",
  fontSize: "15px",
  fontWeight: "bold",
  backgroundColor: "#0085FF",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const deleteButtonStyle = {
  ...adminButtonStyle,
  backgroundColor: "#FF0000",
};
