import { CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export interface CancelButtonProps {
	backPath?: string;
}

const CancelButton = ({ backPath }: CancelButtonProps) => {
	const navigate = useNavigate();

	const handleCancel = () => {
		backPath ? navigate(backPath) : navigate(-1);
	};

	return (
		<Button type='default' onClick={handleCancel}>
			<CloseOutlined />
			Cancel
		</Button>
	);
};

export default CancelButton;
