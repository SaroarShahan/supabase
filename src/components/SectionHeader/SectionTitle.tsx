import { Skeleton } from 'antd';
import React from 'react';
import styled from 'styled-components';

const TabTitle = styled.h2`
	font-size: 1.125rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colorTextBase};
	margin-top: 0;
	margin-bottom: 0.5rem;
	line-height: 1.5;

	&:last-child {
		margin-bottom: 0;
	}
`;

export interface Props {
	children: React.ReactNode;
	loading?: boolean;
}

const SectionTitle = ({ children, loading }: Props) => {
	return loading ? <Skeleton.Input active /> : <TabTitle>{children}</TabTitle>;
};

export default SectionTitle;
