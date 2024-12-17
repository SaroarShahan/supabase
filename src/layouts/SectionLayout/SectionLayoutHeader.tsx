import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import SectionHeader from '~/components/SectionHeader';

const SectionLayoutHeader = ({
	isBack = false,
	isCancel = false,
	isLoading = false,
	isBorderless = false,
	badgeText,
	noMargin,
	backPath = '',
	title,
	items,
}: SectionLayoutHeader) => {
	return (
		<>
			<SectionHeader marginBottom noMargin={noMargin} isBorderless={isBorderless}>
				<HeaderTopWrapper>
					<div>
						{isBack && <SectionHeader.Back backPath={backPath} />}
						<SectionHeader.Title loading={isLoading}>
							{title}
							{!!badgeText && <SectionHeader.Badge>{badgeText}</SectionHeader.Badge>}
						</SectionHeader.Title>
					</div>

					{isCancel && <SectionHeader.Cancel backPath={backPath} />}
				</HeaderTopWrapper>

				<SectionHeader.Menu items={items} isLoading={isLoading} />
			</SectionHeader>

			<Outlet />
		</>
	);
};

const HeaderTopWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > div {
		margin-bottom: 0.5rem;
	}
`;

export default SectionLayoutHeader;
