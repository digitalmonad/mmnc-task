import { screen } from '@testing-library/react'
import { render } from '../test-utils'
import Home from './index.page'

test('renders response from query', async () => {
  render(<Home />)

  await screen.findByText('Rate')
})
