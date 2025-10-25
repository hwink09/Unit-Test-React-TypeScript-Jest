import { Button } from '~/components/Button/Button'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<Button />', () => {
  it('should render and click to button', async () => {
    // Tạo một cái user instance
    const user = userEvent.setup()
    // Tạo mock function onClick bằng Jest
    const onClick = jest.fn()
    // Mount component <Button /> vào DOM ảo trong môi trường test
    render(<Button content="Click Me" onClick={onClick} />)

    // Dùng object screen để truy vấn DOM global tìm cái button.
    // getByRole: tìm button với role="button" và name=/click me/i (regular expression, i: ignore case), name chính là nội dung hiện thị trong button
    const button = screen.getByRole('button', { name: /click me/i })

    // Mô phỏng một cái click vào button
    await user.click(button)
    // await user.click(button)

    // Kiểm tra xem button vẫn đang nằm trong document (không bị unmount)
    expect(button).toBeInTheDocument()
    // Kiểm tra mock onClick có được gọi đúng 1 lần sau khi click hay chưa
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})