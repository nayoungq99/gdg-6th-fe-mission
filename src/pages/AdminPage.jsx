import { useState, useEffect, useCallback } from "react";
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

  const [registerForm, setRegisterForm] = useState({
    name: "",
    price: "0",
    stock: "0",
    category: "",
  });

  const [addForm, setAddForm] = useState({ name: "", quantity: "0" });
  const [deleteName, setDeleteName] = useState("");

  const [setProducts] = useState([]);
  const [isFetchLoading, setIsFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // 1. useCallback으로 함수 참조 고정 (린트 경고 해결)
  const fetchProducts = useCallback(async () => {
    try {
      setIsFetchLoading(true);
      setFetchError(null);
      const result = await getProductList();

      if (result && typeof result === "object" && "success" in result) {
        if (result.success && Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          throw new Error(result.message || "데이터를 불러올 수 없습니다.");
        }
      } else if (Array.isArray(result)) {
        setProducts(result);
      } else {
        throw new Error("데이터 형식이 올바르지 않습니다.");
      }
    } catch (error) {
      setFetchError(error.message || "목록 호출 실패");
    } finally {
      setIsFetchLoading(false);
    }
  }, []);

  // 2. 이제 경고 없이 안전하게 호출
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, [fetchProducts]);

  // --- 핸들러 함수들 ---
  const handleRegister = async () => {
    const { name, price, stock, category } = registerForm;
    if (!name || !price || !stock || !category) {
      return window.alert("모든 정보를 입력해주세요.");
    }
    try {
      await registerProduct({
        itemName: name,
        price,
        quantity: stock,
        category,
      });
      window.alert("등록 완료!");
      setRegisterForm({ name: "", price: "0", stock: "0", category: "" });
      await fetchProducts();
    } catch {
      window.alert("등록 실패");
    }
  };

  const handleAddStock = async () => {
    if (!addForm.name || !addForm.quantity) {
      return window.alert("상품명과 수량을 입력해주세요.");
    }
    try {
      await addStock(addForm.name, addForm.quantity);
      window.alert("재고 추가 완료!");
      setAddForm({ name: "", quantity: "0" });
      await fetchProducts();
    } catch {
      window.alert("재고 추가 실패");
    }
  };

  const handleDelete = async () => {
    if (!deleteName) return window.alert("삭제할 상품명을 입력해주세요.");
    try {
      await deleteProduct(deleteName);
      window.alert("삭제 완료!");
      setDeleteName("");
      await fetchProducts();
    } catch {
      window.alert("삭제 실패");
    }
  };

  return (
    <div style={adminWrapperStyle}>
      {fetchError && (
        <div style={errorBannerStyle}>
          🚨 {fetchError} <button onClick={fetchProducts}>재시도</button>
        </div>
      )}

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
          <Button
            varients="primary"
            style={adminButtonStyle}
            onClick={handleRegister}
            disabled={isFetchLoading}
          >
            등록
          </Button>
        </div>
      </section>

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
            disabled={isFetchLoading}
          >
            추가
          </Button>
        </div>
      </section>

      <section style={sectionContainerStyle}>
        <h3 style={sectionTitleStyle}>상품 삭제</h3>
        <div style={adminCardStyle}>
          <div style={deleteRowStyle}>
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
          <Button
            style={deleteButtonStyle}
            onClick={handleDelete}
            disabled={isFetchLoading}
          >
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
const errorBannerStyle = {
  width: "100%",
  maxWidth: "750px",
  padding: "15px",
  backgroundColor: "#FFEBEB",
  border: "1px solid #FFC1C1",
  borderRadius: "8px",
  color: "#D8000C",
  marginBottom: "20px",
};
const sectionContainerStyle = { width: "100%", maxWidth: "750px" };
const sectionTitleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const adminCardStyle = {
  width: "100%",
  backgroundColor: "#fff",
  border: "1px solid #E0E0E0",
  borderRadius: "12px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
const rowStyle = { display: "flex", gap: "20px" };
const deleteRowStyle = { display: "flex", width: "50%" };
const fieldStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
const labelStyle = { fontWeight: "bold", minWidth: "60px" };
const inputInCardStyle = {
  flex: 1,
  height: "40px",
  padding: "0 10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};
const selectStyle = {
  flex: 1,
  height: "40px",
  padding: "0 10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};
const adminButtonStyle = {
  alignSelf: "flex-end",
  width: "120px",
  height: "40px",
  backgroundColor: "#0085FF",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
const deleteButtonStyle = { ...adminButtonStyle, backgroundColor: "#FF0000" };
