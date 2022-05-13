import { screen } from '@testing-library/react'
import { render } from '../test-utils'
import Dashboard from './index.page'

test('renders response from query', async () => {
  render(<Dashboard />)

  await screen.findByText('Rate')
})
