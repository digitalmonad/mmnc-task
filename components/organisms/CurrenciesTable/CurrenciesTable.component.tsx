import { CurrencyT } from '../../../types'
import { FC, useMemo, memo } from 'react'
import { useTable, TableInstance, useSortBy } from 'react-table'
import styled from '@emotion/styled'

import { TableHeadRow } from '../../molecules/table/TableHeadRow'

import {
  TableBodyRow,
  TableBodyRowSkeleton,
} from '../../molecules/table/TableBodyRow'

export type CurrenciesTablePropsT = {
  isLoading?: boolean
  error?: string
  currencies?: CurrencyT[]
}

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
`

export const TableBody = styled.tbody``

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`

export const ScrollableWrapper = styled.div`
  overflow: scroll;
  max-height: 500px;
`

export const Wrapper = styled.div`
  box-shadow: 0px 2px 5px #dbdbdb;
  border-radius: 10px;
  padding: 10px;
`

type TableLayoutPropsT<T extends object> = {
  error?: string
  isLoading?: boolean
} & TableInstance<T>

export const TableLayout: <T extends object>(
  props: TableLayoutPropsT<T>
) => React.ReactElement = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  error,
  allColumns,
  isLoading,
}) => {
  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableHeadRow
            {...headerGroup.getHeaderGroupProps()}
            headerGroup={headerGroup}
          />
        ))}
      </TableHead>

      {error ? (
        <div>Error</div>
      ) : (
        <TableBody {...getTableBodyProps()}>
          {isLoading
            ? Array(5)
                .fill({})
                .map((_row, index) => (
                  <TableBodyRowSkeleton
                    {...{ isLoading, allColumns }}
                    fullWidth={index % 2 === 0}
                  />
                ))
            : rows.map((row) => {
                prepareRow(row)
                return <TableBodyRow row={row} />
              })}
        </TableBody>
      )}
    </Table>
  )
}

export const CurrenciesTable: FC<CurrenciesTablePropsT> = memo(
  ({ isLoading, error, currencies }) => {
    const columns = useMemo(
      () => [
        {
          Header: 'Rate',
          accessor: 'rate',
        },
        {
          Header: 'Code',
          accessor: 'code',
        },
        {
          Header: 'Amount',
          accessor: 'amount',
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Country',
          accessor: 'country',
        },
      ],
      []
    )

    const tableColumns = useMemo(() => columns, [columns])

    const tableData = useMemo(() => currencies ?? [], [currencies])

    const tableInstance = useTable(
      {
        //@ts-ignore
        columns: tableColumns,

        data: tableData,
      },
      useSortBy
    )

    return (
      <Wrapper>
        <ScrollableWrapper>
          <TableLayout<CurrencyT>
            {...tableInstance}
            {...{ error, isLoading }}
          />
        </ScrollableWrapper>
      </Wrapper>
    )
  }
)

CurrenciesTable.displayName = 'CurrenciesTable'
