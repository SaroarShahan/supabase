import { Navigate } from 'react-router-dom';

export const withAuth = () => {
	return () => {
		return <Navigate to='/dashboard' />;
	};
};
