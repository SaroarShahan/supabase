import styled, { keyframes } from 'styled-components';

const Ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const Ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

const Ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const LdsEllipsisWrapper = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 33px;
	div {
		position: absolute;
		top: 10px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #404040;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
		&:nth-child(1) {
			left: 8px;
			animation: ${Ellipsis1} 0.6s infinite;
		}
		&:nth-child(2) {
			left: 8px;
			animation: ${Ellipsis2} 0.6s infinite;
		}
		&:nth-child(3) {
			left: 32px;
			animation: ${Ellipsis2} 0.6s infinite;
		}
		&:nth-child(4) {
			left: 56px;
			animation: ${Ellipsis3} 0.6s infinite;
		}
	}
`;
