import { App, Button, Col, Form, Input, Row } from 'antd';
import { useMutation } from 'react-query';
import { Link, Location, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '~/components/atoms';
import { authAPI } from '~/libs/api';
import { authService } from '~/libs/auth';

const SignIn = () => {
	const navigate = useNavigate();
	const { state } = useLocation() as Location & { state: Location };
	const { message } = App.useApp();

	const { mutate: handleSubmit, isLoading } = useMutation(
		(values: LoginPayload) => authAPI.login(values),
		{
			onSuccess: ({ auth_token }) => {
				navigate({ pathname: state?.pathname || 'dashboard', search: state?.search });
				authService.setToken(auth_token);
				message.success('You have successfully signed in!');
			},
			onError: (error: Error) => {
				message.error(error.message);
			},
		}
	);

	return (
		<Form
			className='extraSpace'
			name='signIn'
			layout='vertical'
			onFinish={handleSubmit}
			autoComplete='off'
			size='large'
		>
			<FormHeader>
				
				<Typography.Title level={3} type='primary' noMargin>
					Sign in
				</Typography.Title>
				<Typography.Text>It's so nice to see you</Typography.Text>
			</FormHeader>

			<Form.Item
				label='Email'
				name='email'
				rules={[
					{ required: true, message: 'Email address is required!' },
					{ type: 'email', message: 'Email address is invalid!' },
				]}
			>
				<Input placeholder='Email Address' />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				rules={[{ required: true, message: 'Password is required!' }]}
			>
				<Input.Password placeholder='Password' />
			</Form.Item>

			<Row gutter={[24, 24]} align='middle'>
				<Col xs={12}>
					<Link to='forgot-password'>Forgot password?</Link>
				</Col>
				<Col xs={12}>
					<Button htmlType='submit' block type='primary' loading={isLoading}>
						Sign in
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export const FormHeader = styled.div`
	width: 100%;
	display: block;
	text-align: center;
	margin-bottom: 2rem;

	& > h3.ant-typography {
		margin-top: 1rem;
	}

	& > span.ant-typography {
		font-size: 1.125rem;
	}
`;

export default SignIn;
