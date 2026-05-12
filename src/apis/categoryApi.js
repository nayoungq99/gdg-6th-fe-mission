// 실제 url 자리
const BASE_URL = 'https://api.example.com';

export const fetchCategoryData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    // HTTP 상태 코드가 200-299 범위가 아닐 경우 에러 처리
    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 발생했습니다.');
    }

    const data = await response.json(); 
    return data; 
  } catch (error) {
    console.error("데이터 로딩 실패:", error);
    throw error;
  }
};