import DUMMY_PRODUCTS from '../data/DummyProducts';

const useGetProduct = (productId) => {
  // Find product based on id
	const [product] = DUMMY_PRODUCTS.filter((item) => item.id === productId);
  
	// const { id, title, description, price, img_url: image, sub_images, discount } = product;
  return product;
}

export default useGetProduct;