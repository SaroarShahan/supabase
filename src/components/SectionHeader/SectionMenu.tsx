import { Skeleton } from 'antd';
import { darken, lighten } from 'polished';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export interface SectionMenuItem {
	title: string;
	to: string;
}

interface ExtraProps {
	isVertical?: boolean;
	noBg?: boolean;
	marginBottom?: boolean;
	sticky?: boolean;
	isLoading?: boolean;
}

export interface MenuProps extends ExtraProps {
	items: SectionMenuItem[];
}

const SectionMenu = ({
	items,
	isVertical = false,
	marginBottom = true,
	isLoading = false,
	...restProps
}: MenuProps) => {
	

	return (
		<Wrapper
			{...restProps}
			isLoading={isLoading}
			isVertical={isVertical}
			marginBottom={marginBottom}
		>
			{items.map(({ title, ...item }) => {
			
				if (isLoading) return <Skeleton.Button key={title} active />;

				return (
					<StyledLink key={title} {...item} $isVertical={isVertical}>
						{title}
					</StyledLink>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div<ExtraProps>`
	display: flex;
	flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
	background-color: ${({ theme, noBg }) => (noBg ? 'transparent' : theme.colorBgBase)};
	border-radius: 8px;
	margin-bottom: ${({ marginBottom }) => (marginBottom ? '-1.5rem' : '0')};

	${({ sticky = true }) => sticky && `position: sticky; top: -1.5rem; z-index: 10;`}

	${({ isLoading }) => isLoading && 'gap: 0.5rem;'}
`;

const StyledLink = styled(NavLink)<{ $isVertical: boolean }>`
	color: ${({ theme }) => theme.colorTextBase};
	text-decoration: none;
	padding: 0.5rem 1rem;
	font-weight: 500;
	transition: all 0.3s ease-in-out;

	${({ $isVertical }) =>
		$isVertical ? 'border-left: 2px solid transparent;' : 'border-bottom: 2px solid transparent;'}

	&:hover {
		color: ${({ theme }) => theme.colorPrimary};
	}

	&.active {
		color: ${({ theme }) => theme.colorPrimary};
		background-color: ${({ theme }) =>
			theme.mode === 'light'
				? lighten(0.55, theme.colorPrimary)
				: darken(0.28, theme.colorPrimary)};
		border-color: ${({ theme }) => theme.colorPrimary};
	}
`;

export default SectionMenu;
