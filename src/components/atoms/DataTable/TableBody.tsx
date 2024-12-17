import { Table, TableProps } from 'antd';
import { AntTableContainer } from './styles';

export interface TableBodyProps extends TableProps {
	count?: number;
	noRowHover?: boolean;
}

const TableBody = ({ count = 0, noRowHover = false, ...restProps }: TableBodyProps) => {
	return (
		<AntTableContainer count={count} noRowHover={noRowHover}>
			<Table {...restProps} />
		</AntTableContainer>
	);
};

export default TableBody;
