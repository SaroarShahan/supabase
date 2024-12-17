import { Result } from 'antd';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import useIsAllowedPermission from '~/hooks/useIsAllowedPermission';
import SectionLayoutHeader from './SectionLayoutHeader';

const SectionLayout = ({ routes, redirectTo, permissions, ...restProps }: LayoutProps) => {
	const { isAllowedPermission } = useIsAllowedPermission();

	if (permissions && !isAllowedPermission(permissions)) {
		return (
			<Result
				status='403'
				title='403'
				subTitle='Sorry, you are not authorized to access this page.'
			/>
		);
	}

	return (
		<Routes>
			<Route path='' element={<SectionLayoutHeader {...restProps} />}>
				<>
					<Route index element={<Navigate to={redirectTo} />} />

					{routes.map(({ path, Component }, idx) => (
						<Route
							key={idx}
							path={path}
							element={
								<Suspense fallback={null}>
									<Component />
								</Suspense>
							}
						/>
					))}
				</>
			</Route>
		</Routes>
	);
};

export default SectionLayout;
