import React, { FC } from 'react'
import styled from '@emotion/styled'

export const SortColumnArrows = styled.span`
  position: absolute;
  font-size: 12px;
  right: 0;
  color: #ffffff;
  line-height: 24px;
  padding-right: 10px;
`

export const Wrapper = styled('th')`
  vertical-align: bottom;
  color: white;
  text-align: left;
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[2]}px;
  width: ${({ theme }) => +theme.space[1] * 20}px;
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
  <Wrapper {...props}>
    {children}
    <SortColumnArrows>
      {isSorted ? (isSortedDesc ? '▼' : '▲') : '▲▼'}
    </SortColumnArrows>
  </Wrapper>
)
