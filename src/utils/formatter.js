export const formatPrice = (price) => {
  if (price === undefined || price === null || isNaN(Number(price))) {
    return "0원";
  }
  return `${Number(price).toLocaleString()}원`;
};
