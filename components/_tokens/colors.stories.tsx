// @ts-nocheck //

import React from 'react'
import { palette, colors } from '../../styles/tokens'
import { Box, Flex } from 'theme-ui'

const Template = () => (
  <>
    {Object.keys(palette).map((color) => {
      return (
        <Box>
          <h5>{color}</h5>
          <Flex>
            {Object.keys(palette[color]).map((colorScale) => {
              return (
                <Flex sx={{ alignItems: 'center', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      margin: 10,
                      height: 50,
                      width: 50,
                      background: palette[color][colorScale],
                      borderRadius: 5,
                    }}
                  />
                  <p>{colorScale}</p>
                </Flex>
              )
            })}
          </Flex>
        </Box>
      )
    })}
  </>
)

export const Colors = Template.bind({})

export default {
  title: 'Tokens',
  component: Colors,
}
