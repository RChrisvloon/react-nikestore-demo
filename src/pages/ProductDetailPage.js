// React (Redux) imports
import { Fragment } from 'react';
import { json, useLoaderData } from 'react-router-dom';

// Component imports
import DetailedProduct from '../components/ProductDetailPage/DetailedProduct';
import BackNavigation from '../components/common/BackNavigation/BackNavigation';

const ProductDetailPage = () => {
	const product = useLoaderData();

	return (
		<Fragment>
			<BackNavigation relativeToPath={true} />
			<div className="content-inner">
				<DetailedProduct product={product} />
			</div>
		</Fragment>
	);
};

export default ProductDetailPage;

// Loader function for fetching product
export async function loader({ request, params }) {
	const id = params.productId - 1; // Firebase starts items at 0 & this only works properly if Firebase stores the products with id's starting at the lowest first (We don't have a proper database for this project)
	const url = `https://react-http-b7d1c-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`;

	const fetchProduct = async () => {
		// Fetch product from firebase
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Could not fetch products.');
		}

		const data = await response.json();

		return data;
	};

  // Try-catch for proper error handling (Otherwise the fetch might throw an error and we can never throw our custom error response)
	try {
		const product = await fetchProduct();

		if (!product) {
			return null;
		}

		// Return fetched products
		return product;
	} catch (error) {
		// Request - FAILED
		throw json({ message: 'Could not fetch details for selected product.' }, { status: 500 });
	}
}
