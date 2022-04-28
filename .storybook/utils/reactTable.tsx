import { useMemo } from 'react'
import { useTable, TableInstance, useSortBy, Column } from 'react-table'

export const useMockReactTableData = ({
  columns,
  currencies,
}: {
  columns: any
  currencies: any
}) => {
  const tableColumns = useMemo(() => columns, [columns])

  const tableData = useMemo(() => currencies ?? [], [currencies])

  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    useSortBy
  )

  return tableInstance
}
