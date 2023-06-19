// React (Redux) imports
import { Fragment } from 'react';

// Component imports
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<Fragment>
			<Header />
			<main className="errorContent">
				<div>
					<h1>We can't find the page you are looking for.</h1>
					<h2>Sorry for the inconvenience</h2>
					<p>
						Go back to <Link>home page.</Link>
					</p>
				</div>
			</main>
			<Footer />
		</Fragment>
	);
};

export default ErrorPage;
