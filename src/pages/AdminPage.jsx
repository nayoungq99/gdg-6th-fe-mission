import React, { useState } from 'react';
import { registerProduct, addStock, deleteProduct } from '../apis/adminApi';
import Button from '../components/Button';
import Input from '../components/Input';

function AdminPage() {
    const categoryOptions = ["의류", "전자기기", "화장품", "식품"];

    // 1. 상품 등록 상태
    const [registerForm, setRegisterForm] = useState({ 
        itemName: '', price: '0', quantity: '0', category: '' 
    });   
    // 2. 재고 추가 상태
    const [addForm, setAddForm] = useState({ itemName: '', quantity: '0' });
    // 3. 상품 삭제 상태
    const [deleteName, setDeleteName] = useState('');

    // --- 핸들러 함수들 ---
    const handleRegister = async () => {
        const { itemName, price, quantity, category } = registerForm;
        if (!itemName || !price || !quantity || !category) return alert("모든 정보를 입력해주세요.");
        await registerProduct(registerForm);
        setRegisterForm({ itemName: '', price: '', quantity: '', category: '의류' });
    };

    const handleAddStock = async () => {
        if (!addForm.itemName || !addForm.quantity) return alert("상품명과 수량을 입력해주세요.");
        await addStock(addForm.itemName, addForm.quantity);
        setAddForm({ itemName: '', quantity: '' });
    };

    const handleDelete = async () => {
        if (!deleteName) return alert("삭제할 상품명을 입력해주세요.");
        await deleteProduct(deleteName);
        setDeleteName('');
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
                                value={registerForm.itemName} 
                                onChange={(e) => setRegisterForm({...registerForm, itemName: e.target.value})} 
                                style={inputInCardStyle}
                            />
                        </div>
                        <div style={fieldStyle}>
                            <span style={labelStyle}>수량</span>
                            <Input 
                                type="number" 
                                value={registerForm.quantity} 
                                onChange={(e) => setRegisterForm({...registerForm, quantity: e.target.value})} 
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
                                onChange={(e) => setRegisterForm({...registerForm, price: e.target.value})} 
                                style={inputInCardStyle}
                            />
                        </div>
                        <div style={fieldStyle}>
                            <span style={labelStyle}>카테고리</span>
                            <select 
                                style={selectStyle}
                                value={registerForm.category}
                                onChange={(e) => setRegisterForm({...registerForm, category: e.target.value})}
                            >
                                <option value='' disabled hidden>카테고리 선택</option>
                                {categoryOptions.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <p style={helperTextStyle}>* 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용해주세요.</p>

                    <Button varients='primary' style={adminButtonStyle} onClick={handleRegister}>
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
                                value={addForm.itemName} 
                                onChange={(e) => setAddForm({...addForm, itemName: e.target.value})} 
                                style={inputInCardStyle}
                            />
                        </div>
                        <div style={fieldStyle}>
                            <span style={labelStyle}>수량</span>
                            <Input 
                                type="number" 
                                value={addForm.quantity} 
                                onChange={(e) => setAddForm({...addForm, quantity: e.target.value})} 
                                style={inputInCardStyle}
                            />
                        </div>
                    </div>
                    <Button varients='primary' style={adminButtonStyle} onClick={handleAddStock}>
                        추가
                    </Button>
                </div>
            </section>

            {/* --- 상품 삭제 섹션 --- */}
            <section style={sectionContainerStyle}>
                <h3 style={sectionTitleStyle}>상품 삭제</h3>
                <div style={adminCardStyle}>
                    <div style={{...rowStyle, width: '50%'}}>
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 페이지 중앙 정렬
    padding: '80px 20px',
    gap: '60px',
    backgroundColor: '#fff',
    minHeight: '100vh'
};

const sectionContainerStyle = {
    width: '100%',
    maxWidth: '750px', // 사진상의 적절한 박스 너비
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start' // ✅ 제목과 박스를 왼쪽으로 정렬
};

const sectionTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '20px',
    textAlign: 'left'
};

const adminCardStyle = {
    width: '100%',
    maxWidth:'800px',
    backgroundColor: '#fff',
    border: '1px solid #E0E0E0',
    borderRadius: '12px',
    padding: '30px 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    boxSizing: 'border-box'
};

const rowStyle = {
    display: 'flex',
    gap: '30px',
    width: '100%',
    justifyContent: 'space-between'
};

const fieldStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
};

const labelStyle = {
    fontWeight: 'bold',
    fontSize: '15px',
    color: '#333',
    minWidth: '50px'
};

const inputInCardStyle = {
    flex: 1,
    height: '42px',
    border: '1px solid #8c8a8a',
    borderRadius: '8px',
    padding: '0 12px',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box'
};

const selectStyle = {
    flex: 1,
    height: '42px',
    border: '1px solid #8c8a8a',
    borderRadius: '8px',
    padding: '0 10px',
    backgroundColor: 'white',
    fontSize: '14px',
    color: '#b9b7b7',
    outline: 'none',
    cursor: 'pointer'
};

const helperTextStyle = {
    fontSize: '13px',
    color: '#B0B0B0',
    marginTop: '-5px',
    textAlign:'left',
};

const adminButtonStyle = {
    alignSelf: 'flex-end',
    width: '160px',
    height: '40px',
    fontSize: '15px',
    fontWeight: 'bold', 
    backgroundColor: '#0085FF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
};

const deleteButtonStyle = {
    ...adminButtonStyle,
    backgroundColor: '#FF0000', // 삭제 버튼은 빨간색
};