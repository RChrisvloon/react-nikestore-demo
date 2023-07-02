// Page imports
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage';
import ErrorPage from './pages/ErrorPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import RootLayout from './pages/RootLayout';
import ProductDetailPage, { loader as productLoader } from './pages/ProductDetailPage';

// Component imports

// Other imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: (
				<RootLayout>
					<ErrorPage />
				</RootLayout>
			),
			
			children: [
				{ index: true, element: <HomePage /> },
				{
					path: '/products',
					element: <ProductsPage />,
				},
				{ path: '/products/:productId', element: <ProductDetailPage />, loader: productLoader },
				{ path: '/auth', element: <AuthPage /> },
				{ path: '/profile', element: <ProfilePage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
