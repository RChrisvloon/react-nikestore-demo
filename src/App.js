// Page imports
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage';
import ErrorPage from './pages/ErrorPage';
import AuthPage from './pages/Auth/AuthPage';
import ProfilePage from './pages/Profile/ProfilePage';
import ProductDetailPage, { loader as productLoader } from './pages/ProductDetailPage';

// Component imports
import RootLayout from './pages/Layouts/RootLayout';
import AuthLayout from './pages/Layouts/AuthLayout';

// React (Redux) imports
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
					path: 'products',
					children: [
						{ index: true, element: <ProductsPage /> },
						{ path: ':productId', element: <ProductDetailPage />, loader: productLoader },
					],
				},
				{ path: '/profile', element: <ProfilePage /> },
			],
		},
		{ path: '/auth', element: <AuthLayout />, children: [{ index: true, element: <AuthPage /> }] },
	]);

	return <RouterProvider router={router} />;
}

export default App;
