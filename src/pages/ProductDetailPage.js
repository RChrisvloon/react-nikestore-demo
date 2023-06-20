// React (Redux) imports
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

// Component imports
import DetailedProduct from '../components/ProductDetailPage/DetailedProduct';
import BackNavigation from '../components/common/BackNavigation/BackNavigation';

const ProductDetailPage = () => {
	const params = useParams();

	// Get product based on parameters
	const productId = params.productId;

	return (
		<Fragment>
			<BackNavigation relativeToPath={true} />
			<div className="content-inner">
				<DetailedProduct productId={productId} />
			</div>
		</Fragment>
	);
};

export default ProductDetailPage;
