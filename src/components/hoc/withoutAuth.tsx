import { ConfigProvider } from 'antd';
import { ComponentType, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '~/libs/auth';
import { useStoreSelector } from '~/store';

export const withoutAuth = <T extends object>(WrappedComponent: ComponentType<T>) => {
	return (props: T) => {
		const { isAuthenticated } = useAuth();
		const { primaryColor } = useStoreSelector((state) => state.app);

		useEffect(() => {
			if (primaryColor) {
				ConfigProvider.config({
					holderRender: (children) => (
						<ConfigProvider theme={{ token: { colorPrimary: primaryColor } }}>
							{children}
						</ConfigProvider>
					),
				});
			}
		}, [primaryColor]);

		// if (isAuthenticated) {
		// 	return <Navigate to='/dashboard' />;
		// }

		// return <WrappedComponent {...props} />;

		return <Navigate to='/dashboard' />;
	};
};
