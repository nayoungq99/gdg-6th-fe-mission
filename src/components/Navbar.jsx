import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); 

  const isAdminPage = location.pathname.includes('/admin');

  const isActive = (path) => location.pathname === path;

  return (
    // flex: 가로정렬, justify-between: 양끝배치, px-10 py -10: 좌우 여백, border-b: 하단 테두리
    <nav className="flex items-center justify-between px-15 py-1 border-b border-gray-101 shadow-sm">
      <div className="flex items-center gap-10">
        <img 
          src="/gdg-logo.svg"  
          className="w-20 h-10 cursor-pointer" 
          onClick={() => navigate('/')} 
        />
        
        {!isAdminPage && (
          <div className="px-25 hidden md:flex gap-10 text-sm text-gray-500 font-medium">
            <span 
              className={`cursor-pointer ${isActive('/category') ? 'text-[#0085FF] font-bold' : 'text-gray-500'}`}
              onClick={() => navigate('/category')}
          >
            카테고리 필터링
          </span>
          
          <span 
            className={`cursor-pointer ${isActive('/price') ? 'text-[#0085FF] font-bold' : 'text-gray-500'}`}
            onClick={() => navigate('/price')}
          >
            가격 범위 필터링
          </span>
          
          <span 
            className={`cursor-pointer ${isActive('/sort') ? 'text-[#0085FF]font-bold' : 'text-gray-500'}`}
            onClick={() => navigate('/sort')}
          >
            상품 정렬
          </span>
        </div>
        )}
      </div>
      
      <button 
        className="px-2 py-2 text-[#0085FF] border border-[#0085FF] rounded-lg text-sm hover:bg-blue-50 transition-colors"
        onClick={() => navigate(isAdminPage ? '/' : '/admin')}>
        {isAdminPage ? '소비자' : '관리자'}
      </button>
    </nav>
  );
}