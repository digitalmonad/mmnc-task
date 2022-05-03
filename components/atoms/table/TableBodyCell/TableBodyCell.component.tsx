import styled from '@emotion/styled'

export const TableBodyCell = styled('td')`
  text-align: left;
  vertical-align: center;
  height: ${({ theme }) => theme.space.triple};
  padding-left: ${({ theme }) => theme.space.base};
`
