import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface ActionWrapperProps {
	between?: boolean;
}

const Wrapper = styled.div<ActionWrapperProps>`
	display: flex;

	${({ between }) =>
		between &&
		`
    justify-content: space-between;
    align-items: center;
  `}
`;

const ActionWrapper = ({ children, between }: PropsWithChildren<ActionWrapperProps>) => (
	<Wrapper between={between}>{children}</Wrapper>
);

export default ActionWrapper;
