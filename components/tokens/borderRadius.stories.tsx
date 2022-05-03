// @ts-nocheck //
import React from 'react'
import { radii } from '../../styles/tokens'
import { Box, Flex } from 'theme-ui'

const Template = () => (
  <Flex sx={{ flexDirection: 'row', alignItems: 'end' }}>
    {radii.map((_, index) => (
      <Box sx={{ padding: 10 }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            background: '#dbdbdb',
            borderRadius: radii[index],
          }}
        />
      </Box>
    ))}
  </Flex>
)

export const BorderRadius = Template.bind({})

export default {
  title: 'Tokens',
  component: BorderRadius,
}
