import React, { useState } from 'react';
import { registerProduct, addStock, deleteProduct } from '../apis/adminApi';
import Button from '../components/Button';
import Input from '../components/Input';

function AdminPage() {
    const categoryOptions = ["의류", "전자기기", "화장품", "식품"];

    // 상품 등록
    const [registerForm, setRegisterForm] = useState({ 
        itemName: '', 
        price: '', 
        quantity: '', 
        category: '의류' 
    });   
    // 재고 추가 
    const [addForm, setAddForm] = useState({ itemName: '', quantity: '' });
    // 상품 삭제 
    const [deleteName, setDeleteName] = useState('');

    // 등록
    const handleRegister = async () => {
        const { itemName, price, quantity, category } = registerForm;
        if (!itemName || !price || !quantity || !category) return alert("모든 정보를 입력해주세요.");
        await registerProduct(registerForm);
        setRegisterForm({ itemName: '', price: '', quantity: '', category: '' }); // 초기화
    };

    // 재고 추가
    const handleAddStock = async () => {
        if (!addForm.itemName || !addForm.quantity) return alert("상품명과 수량을 입력해주세요.");
        await addStock(addForm.itemName, addForm.quantity);
        setAddForm({ itemName: '', quantity: '' });
    };

    // 삭제
    const handleDelete = async () => {
        if (!deleteName) return alert("삭제할 상품명을 입력해주세요.");
        await deleteProduct(deleteName);
        setDeleteName('');
    };

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-10 bg-white gap-10">
      
      {/* --- 상품 등록 섹션 --- */}
      <section className="w-full max-w-2xl">
        <h3 className="text-lg font-bold mb-4 text-[#000000]">상품 등록</h3>
        <div className="bg-[#FFFFFF] border border-gray-200 rounded-xl p-8 flex flex-col gap-4 ">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="w-16 text-sm font-medium">상품명</span>
              <input className="flex-1" placeholder="상품명 입력..."
                value={registerForm.itemName} 
                onChange={(e) => setRegisterForm({...registerForm, itemName: e.target.value})} 
              />
              <span className="w-12 text-sm font-medium">수량</span>
              <input 
                className="flex-1" 
                type="number" 
                value={registerForm.quantity} 
                onChange={(e) => setRegisterForm({...registerForm, quantity: e.target.value})} 
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-16 text-sm font-medium">가격</span>
              <input 
                className="flex-1" 
                type="number" 
                value={registerForm.price} 
                onChange={(e) => setRegisterForm({...registerForm, price: e.target.value})} 
              />
              <span className="w-12 text-sm font-medium">카테고리</span>
              <select 
                className="flex-1 border border-gray-300 rounded-lg p-2 text-sm bg-white outline-none focus:border-blue-500 cursor-pointer"
                value={registerForm.category}
                onChange={(e) => setRegisterForm({...registerForm, category: e.target.value})}
              >
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">* 추가 기능을 카테고리로 설정한 경우에만 카테고리를 이용해주세요.</p>

          <Button varients='secondary'
            className="self-end mt-2 px-12 py-2 text-sm"
            onClick={handleRegister}
          >
            등록
          </Button>
        </div>
      </section>

      {/* --- 재고 추가 섹션 --- */}
      <section className="w-full max-w-2xl">
        <h3 className="text-lg font-bold mb-4 text-[#000000]">재고 추가</h3>
        <div className="bg-[#f9f9f9] border border-gray-200 rounded-xl p-8 flex flex-col gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="w-16 text-sm font-medium">상품명</span>
            <input 
              className='flex-1'
              placeholder="상품명 입력..." 
              value={addForm.itemName} 
              onChange={(e) => setAddForm({...addForm, itemName: e.target.value})} 
            />
            <span className="w-12 text-sm font-medium">수량</span>
            <input 
              className="flex-1" 
              type="number" 
              value={addForm.quantity} 
              onChange={(e) => setAddForm({...addForm, quantity: e.target.value})} 
            />
          </div>
          <Button varients='secondary' className='self-end mt-2 px-12 py-2 text-sm'
          onClick={handleAddStock}>
            추가
          </Button>
        </div>
      </section>

      {/* --- 상품 삭제 섹션 --- */}
      <section className="w-full max-w-2xl">
        <h3 className="text-lg font-bold mb-4 text-[#000000]">상품 삭제</h3>
        <div className="bg-[#f9f9f9] border border-gray-200 rounded-xl p-8 flex flex-col gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="w-16 text-sm font-medium">상품명</span>
            <input 
              className="w-[45%]" 
              placeholder="상품명 입력..." 
              value={deleteName} 
              onChange={(e) => setDeleteName(e.target.value)} 
            />
          </div>
          <Button 
            className="self-end mt-2 bg-red-500 border-none text-white px-12 py-2 text-sm hover:bg-red-600" 
            onClick={handleDelete}>
            삭제
          </Button>
        </div>
      </section>

    </div>
  );
}

export default AdminPage;