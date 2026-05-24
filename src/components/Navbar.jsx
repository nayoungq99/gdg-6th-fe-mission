import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import useCartStore from "../store/useCartStore";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = useCartStore((state) => state.cart);
  const isAdminPage = location.pathname.includes("/admin");
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex items-center justify-between px-15 py-1 border-b border-gray-101 shadow-sm">
      <div className="flex items-center gap-10">
        <img
          src="/gdg-logo.svg"
          className="w-20 h-10 cursor-pointer"
          onClick={() => navigate("/")}
          alt="logo"
        />

        {!isAdminPage && (
          <div className="px-25 hidden md:flex gap-10 text-sm text-gray-500 font-medium">
            <span
              className={`cursor-pointer ${isActive("/category") ? "text-[#0085FF] font-bold" : "text-gray-500"}`}
              onClick={() => navigate("/category")}
            >
              카테고리 필터링
            </span>

            <span
              className={`cursor-pointer ${isActive("/price") ? "text-[#0085FF] font-bold" : "text-gray-500"}`}
              onClick={() => navigate("/price")}
            >
              가격 범위 필터링
            </span>

            <span
              className={`cursor-pointer ${isActive("/sort") ? "text-[#0085FF] font-bold" : "text-gray-500"}`}
              onClick={() => navigate("/sort")}
            >
              상품 정렬
            </span>
          </div>
        )}
      </div>

      {/* 👈 3. 우측 버튼 옆에 실시간 장바구니 개수 노출 (소비자 페이지일 때만 보이게 설정) */}
      <div className="flex items-center gap-4">
        {!isAdminPage && (
          <div className="text-sm font-semibold bg-gray-100 px-3 py-2 rounded-lg text-gray-700">
            🛒 장바구니 <span className="text-[#0085FF]">{cart.length}</span>
          </div>
        )}
        <Button
          varients="primary"
          className="px-2 py-2 text-sm transition-colors"
          onClick={() => navigate(isAdminPage ? "/" : "/admin")}
        >
          {isAdminPage ? "소비자" : "관리자"}
        </Button>
      </div>
    </nav>
  );
}
