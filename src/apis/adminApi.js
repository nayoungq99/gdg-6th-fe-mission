const BASE_URL = "http://192.168.180.182:8080";

// 1. 상품 등록 (POST 요청)
export const registerProduct = async (productData) => {
  const { itemName, quantity, price, category } = productData;

  const formattedData = {
    name: itemName,
    price: Number(price),
    stock: Number(quantity),
    category,
  };
  console.log(formattedData);

  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });
    console.log(response);

    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.log(error.message);
  }
};

// 2. 재고 추가 (PUT 또는 PATCH 요청)
export const addStock = async (itemName, quantity) => {
  try {
    const requestBody = {
      name: itemName,
      quantity: Number(quantity),
    };

    const response = await fetch(`${BASE_URL}/products/stock`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }

    const data = await response.json();
    console.log("재고 추가 성공 응답:", data);
    return { success: true, data };
  } catch (error) {
    console.log(error.message);
  }
};

// 3. 상품 삭제 (DELETE 요청)
export const deleteProduct = async (itemName) => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: itemName }),
    });

    if (!response.ok) {
      throw new Error(`서버 에러 발생: ${response.status}`);
    }

    const data = response.status !== 204 ? await response.json() : null;
    console.log("삭제 성공 응답:", data);
    return { success: true };
  } catch (error) {
    console.log(error.message);
  }
};

// 4. 상품 목록 조회 (GET 요청)
export const getProductList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`서버 에러: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.log(error.message);
  }
};
