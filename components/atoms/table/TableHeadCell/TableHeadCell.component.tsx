import React, { FC } from 'react'
import styled from '@emotion/styled'

export const SortColumnArrows = styled('span')`
  position: absolute;
  right: ${({ theme }) => theme.space.none};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  padding-right: ${({ theme }) => theme.space.base};
`

export const TableHeadCellStyled = styled('th')`
  text-align: center;
  color: white;
  text-align: left;
  height: ${({ theme }) => theme.space.triple};
  padding: 0 ${({ theme }) => theme.space.base};
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  user-select: none;
`

type TableHeadCell = {
  isSorted: boolean
  isSortedDesc: boolean | undefined
  children: React.ReactNode
}
export const TableHeadCell: FC<TableHeadCell> = ({
  children,
  isSorted,
  isSortedDesc,
  ...props
}) => (
  <TableHeadCellStyled {...props}>
    {children}
    <SortColumnArrows>
      {isSorted ? (isSortedDesc ? '▼' : '▲') : '▲▼'}
    </SortColumnArrows>
  </TableHeadCellStyled>
)
