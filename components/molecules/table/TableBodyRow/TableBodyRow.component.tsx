import styled from '@emotion/styled'
import { Row as RowT, ColumnInstance as ColumnInstanceT } from 'react-table'
import { Box } from 'theme-ui'
import { TableBodyCell } from '../../../atoms/table/TableBodyCell'

export const Skeleton = styled(Box)`
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`

const Row = styled.tr<{ isLoading?: boolean }>`
  & td {
    transition: all ease 0.2s;
  }

  &:nth-child(even) td {
    background-color: ${({ theme }) => theme.colors.palette.gray['100']};
  }

  &:nth-child(even) td:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:nth-child(even) td:last-child {
    border-radius: 0 10px 10px 0;
  }

  ${({ isLoading, theme }) =>
    !isLoading &&
    `&:hover td {
        background-color: ${theme.colors.palette.gray['500']};
    }
    &:hover td:first-child {
        border-radius: 10px 0 0 10px;
    }

    &:hover td:last-child {
        border-radius: 0 10px 10px 0;
    }
  `}
`

type TableBodyRowPropsT<T extends object> = {
  row: RowT<T>
}

type TableBodyRowSkeletonPropsT<T extends object> = {
  allColumns: ColumnInstanceT<T>[]
  fullWidth: boolean
}

export const TableBodyRowSkeleton: <T extends object>(
  props: TableBodyRowSkeletonPropsT<T>
) => React.ReactElement = ({ allColumns, fullWidth }) => (
  <Row isLoading>
    {allColumns.map((cell) => (
      <TableBodyCell key={cell.id}>
        <Skeleton
          sx={{
            height: 12,
            width: fullWidth ? '25%' : '50%',
          }}
        />
      </TableBodyCell>
    ))}
  </Row>
)

export const TableBodyRow: <T extends object>(
  props: TableBodyRowPropsT<T>
) => React.ReactElement = ({ row }) => (
  <Row {...row.getRowProps()}>
    {row.cells.map((cell) => (
      <TableBodyCell {...cell.getCellProps()}>
        {cell.render('Cell')}
      </TableBodyCell>
    ))}
  </Row>
)
