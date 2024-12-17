import { Children, PropsWithChildren, cloneElement, isValidElement } from 'react';
import styled from 'styled-components';

import BackButton from './BackButton';
import CancelButton from './CancelButton';
import SectionBody from './SectionBody';
import SectionButton from './SectionButton';
import SectionMenu from './SectionMenu';
import SectionSubTitle from './SectionSubTitle';
import SectionTitle from './SectionTitle';

interface ExtraProps {
	between?: boolean;
	sticky?: boolean;
	marginBottom?: boolean;
	noBg?: boolean;
	noPadding?: boolean;
	noMargin?: boolean;
	fullWidth?: boolean;
	isBorderless?: boolean;
}

interface HeaderProps extends ExtraProps {
	className?: string;
}

const Container = styled.div<ExtraProps>`
	background-color: ${({ noBg, theme }) => (noBg ? 'transparent' : theme.colorBgBase)};
	padding: ${({ noPadding }) => (noPadding ? '0' : '1.5rem')};
	margin: ${({ noMargin }) => (noMargin ? '0' : '-1.5rem -1.5rem 0 -1.5rem')};
	margin-bottom: ${({ marginBottom }) => (marginBottom ? `1.5rem` : `0.5rem`)};
	border-bottom: 1px solid
		${({ theme, isBorderless }) => (!isBorderless ? theme.colorBorder : 'transparent')};

	${({ between }) =>
		between &&
		`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

	${({ sticky = true }) => sticky && `position: sticky; top: -1.5rem; z-index: 10;`}
`;

const SectionHeader = ({
	children,
	fullWidth = true,
	...restProps
}: PropsWithChildren<HeaderProps>) => {
	return (
		<Container {...restProps} fullWidth={fullWidth}>
			{Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child);
				}

				return child;
			})}
		</Container>
	);
};

SectionHeader.Title = SectionTitle;
SectionHeader.SubTitle = SectionSubTitle;
SectionHeader.Back = BackButton;
SectionHeader.Cancel = CancelButton;
SectionHeader.Button = SectionButton;
SectionHeader.Menu = SectionMenu;
SectionHeader.Body = SectionBody;
SectionHeader.Actions = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
	return <div>{children}</div>;
};

export default SectionHeader;
