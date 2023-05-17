// Custom hook for calculating discounted price
const useDiscountCalc = (price, discount) => {
  // If discount is 0 or not provided, return false
  if (discount === 0 || !discount) {
    return false;
  }

  // Calculate the new price after applying the discount
  const newPrice = (price * (100 - discount)) / 100;

  // Return the new price
  return +newPrice.toFixed(2);
}

export default useDiscountCalc;