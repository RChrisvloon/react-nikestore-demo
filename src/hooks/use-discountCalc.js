const useDiscountCalc = (price, discount) => {
  if (discount === 0 || !discount) {
    return false;
  }

  const newPrice = (price * (100 - discount)) / 100;
  return newPrice;
}

export default useDiscountCalc;