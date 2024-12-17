import { ColumnsType } from 'antd/lib/table';
import dayjs from 'dayjs';
import { useAccessContext } from 'react-access-boundary';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import { StatusColumn } from '~/components/StatusColumn';
import config from '~/config';
import { readableText } from '~/utils/helpers';

const utils = () => {
	const { t } = useTranslation();
	const { isAllowedTo } = useAccessContext();
	const queryClient = useQueryClient();

	const columns: ColumnsType<User> = [
		{
			title: t('Name'),
			dataIndex: 'first_name',
			render: (_, record) => {
				const fullName = `${record.first_name} ${record.last_name}`;

				if (isAllowedTo('CHANGE_USER')) {
					return <Link to={`edit/${record.id}`}>{fullName}</Link>;
				}

				return fullName;
			},
		},
		{ title: t('Email'), dataIndex: 'email' },
		{
			width: '180px',
			title: t('Role'),
			dataIndex: 'groups_details',
			render: (groups_details: User['groups_details']) => {
				return groups_details.map(({ name }) => readableText(name)).join(', ');
			},
		},
		{
			title: t('Last Login'),
			dataIndex: 'last_login',
			render: (last_login) => {
				if (last_login) {
					return dayjs(last_login).format(config.dateFormat);
				}

				return '-';
			},
		},
		{
			title: t('Status'),
			dataIndex: 'is_active',
			render: (is_active, { id }) => (
				<StatusColumn
					status={is_active}
					id={id}
					endpoint='users'
					successMessage='Profile has been updated!'
					onSuccessFn={() => queryClient.invalidateQueries(['getLanguages'])}
				/>
			),
		},
	];

	return {
		columns,
	};
};

export default utils;
