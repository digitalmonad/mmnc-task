// @ts-nocheck //
import React from 'react'
import { space } from '../../styles/tokens'
import { Box, Flex } from 'theme-ui'

const Template = () => (
  <Flex sx={{ flexDirection: 'row', alignItems: 'end' }}>
    {Object.keys(space).map((value) => (
      <Box sx={{ padding: 10 }}>
        <Box
          sx={{
            width: space[value],
            height: space[value],
            background: '#dbdbdb',
          }}
        />
        <p>{value}</p>
      </Box>
    ))}
  </Flex>
)

export const Space = Template.bind({})

export default {
  title: 'Tokens',
  component: Space,
}
