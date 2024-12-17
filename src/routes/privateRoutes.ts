import { lazy } from 'react';

import { PRIVATE_ROUTES } from './paths';

export const privateRoutes = [
	{
		path: PRIVATE_ROUTES.DASHBOARD,
		Component: lazy(() => import('~/features/dashboard')),
	},
	{
		path: PRIVATE_ROUTES.SYSTEM_USERS,
		Component: lazy(() => import('~/features/users')),
	},
];
