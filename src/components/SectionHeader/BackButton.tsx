import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ArrowLeft from '~/assets/images/icons/arrow-left.svg';
import { Typography } from '../atoms';

const BackButtonWrapper = styled.div<{ noBg?: boolean }>`
	margin-bottom: 6px;
	background-color: ${({ noBg, theme }) => (noBg ? 'transparent' : theme.colorBgBase)};

	.back-container {
		display: flex;
		align-items: center;
		column-gap: 6px;
		text-align: center;
		cursor: pointer;
		width: fit-content;
		padding: 0 8px 0 0;
	}
`;

export interface BackButtonProps {
	backPath?: string;
	noBg?: boolean;
}

const BackButton = ({ backPath, noBg }: BackButtonProps) => {
	const navigate = useNavigate();

	return (
		<BackButtonWrapper noBg={noBg}>
			<div
				className='back-container'
				onClick={() => (backPath ? navigate(backPath) : navigate(-1))}
			>
				<img src={ArrowLeft} alt='ArrowLeft' />

				<Typography.Text className='title'>Back</Typography.Text>
			</div>
		</BackButtonWrapper>
	);
};

export default BackButton;
