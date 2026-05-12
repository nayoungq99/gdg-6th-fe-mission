//  상품 등록
export const registerProduct = async (productData) => {
  const { itemName, quantity, price, category } = productData;
  
  console.log(`${itemName} ${quantity} ${price} ${category} 가 등록되었습니다.`);
  
  const formattedData = {
    id: Date.now(),
    itemName: itemName,
    price: Number(price),
    quantity: Number(quantity)
  };
  
  console.log("생성된 객체 데이터:", formattedData);
  return { success: true };
};

// 2. 재고 추가
export const addStock = async (itemName, quantity) => {
  // 예시 : "원피스 5 가 추가되었습니다."
  console.log(`${itemName} ${quantity} 가 추가되었습니다.`);
  return { success: true };
};

// 3. 상품 삭제
export const deleteProduct = async (itemName) => {
  // 예시 : "청바지 가 삭제되었습니다."
  console.log(`${itemName} 가 삭제되었습니다.`);
  return { success: true };
};