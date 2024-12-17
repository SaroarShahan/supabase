import { Popover, type MenuProps } from 'antd';
import { useCallback } from 'react';

import { ReactComponent as BuildingIcon } from '~/assets/images/sidebar/building.svg';
import { ReactComponent as DashboardIcon } from '~/assets/images/sidebar/dashboard.svg';
import { ReactComponent as SettingsIcon } from '~/assets/images/sidebar/settings.svg';
import { ReactComponent as UserIcon } from '~/assets/images/sidebar/user.svg';
import { PRIVATE_ROUTES } from '~/routes/paths';

type ITEM = {
	icon: JSX.Element;
	key: string;
	label: string;
	permission?: string | string[];
	children?: Omit<ITEM, 'icon' | 'children'>[];
};

const ITEMS: ITEM[] = [
	{
		icon: <DashboardIcon />,
		key: PRIVATE_ROUTES.DASHBOARD,
		label: 'Dashboard',
	},
	{
		label: 'Users',
		icon: <UserIcon />,
		key: PRIVATE_ROUTES.SYSTEM_USERS,
	},
];

export const MenuItems = () => {
	const transform = (items: typeof ITEMS) =>
		items
			?.map((item) => ({
				...item,
				label: <Popover content={item?.label}> {item?.label}</Popover>,
			}))
			?.filter((item) => item !== undefined) as MenuProps['items'];

	return transform(ITEMS);
};
