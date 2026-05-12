const BASE_URL = 'https://api.example.com'; 

export const fetchPriceListData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/prices`);
    
    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.status}`);
    }

    const data = await response.json();
    
    return data.items || []; 
  } catch (error) {
    console.error("가격 데이터 로드 중 오류:", error);
    throw error;
  }
};