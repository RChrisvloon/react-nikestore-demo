// React (Redux) imports
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

// Component imports
import DetailedProduct from '../components/ProductDetailPage/DetailedProduct';

const ProductDetailPage = () => {
	const params = useParams();

	// Get product based on parameters
	const productId = params.productId;

	return (
		<Fragment>
			<div className="content-inner">
				<DetailedProduct productId={productId} />
			</div>
		</Fragment>
	);
};

export default ProductDetailPage;
