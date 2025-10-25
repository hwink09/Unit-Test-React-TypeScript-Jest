import { Counter } from '~/components/Counter/Counter'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<Counter />', () => {
  it('Increase, decrease couter value except not below 0', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const increaseBtn = screen.getByRole('button', { name: '+' })
    const decreaseBtn = screen.getByRole('button', { name: '-' })

    // Increase counter value from 0 to 2
    await user.click(increaseBtn)
    await user.click(increaseBtn)

    // Deacrease counter value 3 times, but it should not below 0
    await user.click(decreaseBtn)
    await user.click(decreaseBtn)
    await user.click(decreaseBtn)

    // getByText: chạy đồng bộ (synchronous) dùng khi chắc chắn element sẽ có trong DOM
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument()
  })
})