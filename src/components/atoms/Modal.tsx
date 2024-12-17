import { Modal as AntdModal } from 'antd';
import styled from 'styled-components';

export const Modal = styled(AntdModal)`
	.ant-modal {
		&-content {
			padding: 0;
		}

		&-close {
			top: 13px;
			inset-inline-end: 13px;
		}

		&-header {
			border-bottom: 1px solid ${({ theme }) => theme.colorBorder};
			margin-bottom: 0;
		}

		&-body {
			overflow-y: auto;
			max-height: calc(100vh - 200px);
			padding: 1rem 1.5rem;
		}

		&-footer {
			display: ${({ footer }) => (footer ? 'flex' : 'none')};
			justify-content: flex-end;
			align-items: center;
			gap: 0.5rem;
			border-top: 1px solid ${({ theme }) => theme.colorBorder};
			margin-top: 0;
		}

		&-header,
		&-footer {
			padding: 1rem 1.5rem;
		}
	}
`;
