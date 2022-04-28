import styled from '@emotion/styled'
import { HeaderGroup as HeaderGroupT } from 'react-table'

import { TableHeadCell } from '../../../atoms/table/TableHeadCell'

const Wrapper = styled('tr')`
  padding: 0 10px;
  & th:first-child {
    border-radius: 10px 0 0 10px;
  }

  & th:last-child {
    border-radius: 0 10px 10px 0;
  }
`
type TableHeadRowPropsT<T extends object> = {
  headerGroup: HeaderGroupT<T>
}

export const TableHeadRow: <T extends object>(
  props: TableHeadRowPropsT<T>
) => React.ReactElement = ({ headerGroup }) => (
  <Wrapper {...headerGroup.getHeaderGroupProps()}>
    {headerGroup.headers.map((column) => (
      <TableHeadCell
        {...column.getHeaderProps(column.getSortByToggleProps())}
        isSorted={column.isSorted}
        isSortedDesc={column.isSortedDesc}
      >
        {column.render('Header')}
      </TableHeadCell>
    ))}
  </Wrapper>
)
