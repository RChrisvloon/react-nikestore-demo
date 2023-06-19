// Page imports
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage';
import ErrorPage from './pages/ErrorPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import RootLayout from './pages/RootLayout';

// Other imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <HomePage /> },
			{
				path: '/products',
				element: <ProductsPage />,
			},
			{ path: '/products/:productId', element: <ProductDetailPage /> },
			{ path: '/auth', element: <AuthPage /> },
			{ path: '/profile', element: <ProfilePage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
