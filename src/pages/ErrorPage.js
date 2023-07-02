// React (Redux) imports
import { Fragment } from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Component imports

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error, '1');

	let title = `An error has occurred! (${error.status})`;
	let message = 'Something went wrong!';

	switch (error.status) {
		case 500:
			message = error.data.message;
			break;
		case 404:
			message = 'Could not find page!';
			break;
		default:
			break;
	}

	return (
		<Fragment>
			<main className="errorContent">
				<div>
					<h1>{title}</h1>
					<h2>{message}</h2>
					<p>
						Go back to <Link to={'/'}>the home page.</Link>
					</p>
				</div>
			</main>
		</Fragment>
	);
};

export default ErrorPage;
