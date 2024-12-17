import { CompressOutlined, ExpandOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Dropdown, MenuProps, Space, Switch, message } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { useCallback, useMemo } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { usersAPI } from '~/libs/api';
import { authService } from '~/libs/auth';
import { useStoreSelector } from '~/store';
import { appActions } from '~/store/actions';

export const HeaderUserNav = () => {
	const dispatch = useDispatch();
	const { darkMode, compactMode } = useStoreSelector((state) => state.app);

	const { mutate: handleLogout } = useMutation(() => usersAPI.logout(), {
		onSuccess: () => {
			authService.removeTokens();
			window.location.href = '/';
		},
		onError: (error: Error) => {
			message.error(error.message);
		},
	});

	const toggleDarkMode = useCallback(
		(checked: boolean) => dispatch(appActions.updateDarkMode(checked)),
		[dispatch]
	);

	const toggleCompactMode = useCallback(
		(checked: boolean) => dispatch(appActions.updateCompactMode(checked)),
		[dispatch]
	);

	const menuItems: MenuProps = useMemo(() => {
		return {
			items: [
				{
					key: 'sign-out',
					label: 'Sign out',
				},
				{
					key: 'divider',
					label: <Divider style={{ margin: 0 }} />,
				},
				{
					key: 'view-mode',
					label: (
						<Space>
							<Switch
								size='default'
								checkedChildren={<MdOutlineLightMode />}
								unCheckedChildren={<MdOutlineDarkMode />}
								checked={darkMode}
								onChange={toggleDarkMode}
							/>
							<Switch
								checkedChildren={<ExpandOutlined />}
								unCheckedChildren={<CompressOutlined />}
								checked={compactMode}
								onChange={toggleCompactMode}
							/>
						</Space>
					),
				},
			],
			onClick: (info: MenuInfo) => {
				if (info?.key === 'sign-out') {
					handleLogout();
				}
			},
		};
	}, [handleLogout, darkMode, toggleDarkMode, toggleCompactMode, compactMode]);

	return (
		<Dropdown menu={menuItems} trigger={['click']} placement='bottomRight'>
			<a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
				<Avatar size='large' icon={<UserOutlined />} />
			</a>
		</Dropdown>
	);
};
