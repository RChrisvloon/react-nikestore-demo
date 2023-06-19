import DUMMY_PRODUCTS from '../data/DummyProducts';

const useGetProduct = (productId) => {
  // Find product based on id
	const [product] = DUMMY_PRODUCTS.filter((item) => item.id === +productId);
  
  return product;
}

export default useGetProduct;