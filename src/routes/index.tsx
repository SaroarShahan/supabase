import nProgress from 'nprogress';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Spin } from '~/components/atoms';
import { useStoreSelector } from '~/store';
import { PRIVATE_ROUTES } from './paths';
import { privateRoutes } from './privateRoutes';
import { DashboardLayout } from '~/layouts';

const NotFound = lazy(() => import('~/features/not-found'));

export const BaseRoutes = () => {
	const { routeChange } = useStoreSelector((state) => state.app);

	useEffect(() => {
		if (routeChange === 'start') {
			nProgress.start();
		} else {
			nProgress.done();
		}
	}, [routeChange]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<DashboardLayout />}>
					{privateRoutes.map(({ path, Component }, i) => (
						<Route
							key={i}
							path={path}
							index={path === PRIVATE_ROUTES.DASHBOARD}
							element={
								<Suspense fallback={<Spin type='content-centre' size='large' />}>
									<Component />
								</Suspense>
							}
						/>
					))}
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
