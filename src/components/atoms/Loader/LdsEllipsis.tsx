import { FC, HTMLAttributes } from 'react';
import { LdsEllipsisWrapper } from './styles';

type Props = HTMLAttributes<HTMLDivElement> & {
	fwdRef?: React.Ref<HTMLDivElement>;
};

export const LdsEllipsis: FC<Props> = ({ fwdRef, ...rest }) => (
	<LdsEllipsisWrapper ref={fwdRef} {...rest}>
		<div />
		<div />
		<div />
		<div />
	</LdsEllipsisWrapper>
);
