import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	border-bottom: 1px solid #d0d5dd;
	padding-bottom: 1rem;

	display: flex;
	align-items: center;
	gap: 1rem;

	.external-link {
		color: #344054;
		font-size: 0.875rem;
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background-color: ${({ theme }) => theme.colorBgBase};
		border: 1px solid ${({ theme }) => theme.colorBorderBg};
		padding: 0.25rem 0.5rem;
		border-radius: 8px;

		& .anticon-arrow-up {
			transform: rotate(45deg);
		}
	}
`;

const SectionBody = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
	return <Wrapper>{children}</Wrapper>;
};

export default SectionBody;
