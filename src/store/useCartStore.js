import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [], // 장바구니에 담긴 상품 배열

  // 장바구니에 상품 추가하는 함수
  addToCart: (product) =>
    set((state) => {
      // 이미 장바구니에 있는 상품인지 확인
      const isExist = state.cart.some((item) => item.id === product.id);
      if (isExist) {
        window.alert("이미 장바구니에 담긴 상품입니다!"); // 👈 lint 에러 방지를 위해 window 명시
        return { cart: state.cart };
      }

      const productName = product.name || product.itemName || "상품";
      window.alert(`${productName}이(가) 장바구니에 담겼습니다!`); // 👈 템플릿 리터럴 가독성 및 window 명시
      return { cart: [...state.cart, product] };
    }),

  // 장바구니 완전히 비우기 함수 (필요시 사용)
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
