/* eslint-disable-next-line no-unused-vars */
const BASE_URL = "https://localhost:8080";

import { categoryData } from "../data/mockData";
export const fetchCategoryData = async () => {
  try {
    // const response = await fetch(`${BASE_URL}/products`);

    // HTTP 상태 코드가 200-299 범위가 아닐 경우 에러 처리
    // if (!response.ok) {
    //  throw new Error('네트워크 응답에 문제가 발생했습니다.');
    // }

    return categoryData;
  } catch (error) {
    console.error("데이터 로딩 실패:", error);
    return [];
  }
};
