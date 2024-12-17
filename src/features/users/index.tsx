import { ColumnsType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import { Empty } from '~/components/atoms';

import DataTable from '~/components/atoms/DataTable';
import usePageParams from '~/hooks/usePageParams';
import supabase from '~/libs/supabaseClient';

const { Header, HeaderTop, Title, MenuOptions, Body } = DataTable;

const Users = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(false);
	const totalCount = users.length || 0;

	const { current, pageSize, handlePageChange } = usePageParams();

	useEffect(() => {
		setLoading(true);
		(async () => {
			const { data, error } = await supabase.from('users').select('*');
			if (!error) {
				setUsers(data);
				console.log(data);
			}
		})();
		setLoading(false);
	}, []);

	const columns: ColumnsType<User> = [
		{
			title: 'First Name',
			dataIndex: 'first_name',
			render: (value) => value || '-',
		},
		{
			title: 'Last Name',
			dataIndex: 'last_name',
			render: (value) => value || '-',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Status',
			dataIndex: 'is_active',
			key: 'is_active',
			render: (isActive: boolean) => (isActive ? 'Yes' : 'No'),
		},
	];

	return (
		<>
			<DataTable>
				<Header>
					<HeaderTop>
						<Title>{`Users (${totalCount})`}</Title>
					</HeaderTop>
					<MenuOptions />
				</Header>
				<Body
					count={totalCount}
					locale={{
						emptyText: <Empty />,
					}}
					dataSource={users}
					columns={columns}
					rowKey='id'
					scroll={{ y: '100%', x: 1200 }}
					loading={loading}
					pagination={{
						locale: { items_per_page: `page` },
						pageSize,
						current,
						total: totalCount,
						onChange: handlePageChange,
						showSizeChanger: true,
					}}
				/>
			</DataTable>
		</>
	);
};

export default Users;
