import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { routeNavigate } from '~/routes/utils';

const NotFound: FC = () => {
	const navigate = useNavigate();

	return (
		<Result
			status='404'
			title='404'
			subTitle='Sorry, the page you visited does not exist.'
			extra={
				<Button type='primary' onClick={() => navigate(routeNavigate('DASHBOARD'))}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotFound;
