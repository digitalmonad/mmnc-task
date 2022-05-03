import { Flex, Heading, Box } from 'theme-ui'
import styled from '@emotion/styled'

const Root = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.gray['500']};
  font-weight: 900;
`

export const Header = () => {
  return (
    <Root>
      <Flex py={2} px={3}>
        <Heading>Xchange.io</Heading>
      </Flex>
    </Root>
  )
}
