import { Flex, Heading, Box } from 'theme-ui'
import styled from '@emotion/styled'
import { useTranslation } from 'next-i18next'

const Root = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.palette.gray['500']};
  padding: ${({ theme }) => theme.space.half};
  font-weight: 900;
`

export const Header = () => {
  const { t } = useTranslation()
  return (
    <Root>
      <Flex py={2} px={3}>
        <Heading>{t('logo')}</Heading>
      </Flex>
    </Root>
  )
}
