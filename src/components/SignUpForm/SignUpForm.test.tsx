import { SignUpForm } from '~/components/SignUpForm/SignUpForm'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<SignUpForm />', () => {
  it('should fill input with default values initially', () => {
    const mockOnSubmit = jest.fn()
    render(
      <SignUpForm
        onSubmit={mockOnSubmit}
        defaultValues={{
          email: 'hwink.dev@gmail.com',
          password: 'password@123',
        }}
      />
    )
    // Kiểm tra defaultValue của email đã được đặt ở input
    expect(screen.getByPlaceholderText(/enter email/i)).toHaveValue('hwink.dev@gmail.com')
    // Kiểm tra defaultValue của password đã được đặt ở input
    expect(screen.getByPlaceholderText(/enter password/i)).toHaveValue('password@123')

  })

  it('should show required error messages when submitting empty form', async () => {
    const mockOnSubmit = jest.fn()
    render(<SignUpForm onSubmit={mockOnSubmit} />)
    // User nhấn vào button submit
    await userEvent.click(screen.getByText(/submit/i))
    // Kiểm tra xem có hiển thị message lỗi required cho email
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument()
    // Kiểm tra xem có hiển thị message lỗi required cho password
    expect(await screen.findByText(/password is required/i)).toBeInTheDocument()
    // Kiểm tra mockSubmit chưa được gọi vì đang gặp lỗi validation
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it('should show error if email is invalid', async () => {
    const mockOnSubmit = jest.fn()
    render(<SignUpForm onSubmit={mockOnSubmit} />)

    // Hành động user gõ nội dung KHÔNG HỢP LỆ vào input email
    await userEvent.type(
      screen.getByPlaceholderText(/enter email/i),
      'This is not a valid email'
    )
    // Hành động user gõ nội dung HỢP LỆ vào input password
    await userEvent.type(
      screen.getByPlaceholderText(/enter password/i),
      'password@123'
    )
    // User nhấn vào button submit
    await userEvent.click(screen.getByText(/submit/i))
    // Kiểm tra xem có hiển thị message lỗi invalid cho email
    expect(await screen.findByText(/email is not valid/i)).toBeInTheDocument()
    // Kiểm tra mockSubmit chưa được gọi vì đang gặp lỗi validation
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it('should show error if password is less than 6 characters', async () => {
    const mockOnSubmit = jest.fn()
    render(<SignUpForm onSubmit={mockOnSubmit} />)

    // Hành động user gõ nội dung HỢP LỆ vào input email
    await userEvent.type(
      screen.getByPlaceholderText(/enter email/i),
      'hwink.dev@gmail.com'
    )
    // Hành động user gõ nội dung KHÔNG HỢP LỆ vào input password
    await userEvent.type(
      screen.getByPlaceholderText(/enter password/i),
      '123' // quá ngắn, không đủ 6 ký tự
    )
    // User nhấn vào button submit
    await userEvent.click(screen.getByText(/submit/i))
    // Kiểm tra xem error message cho password
    expect(await screen.findByText(/password must be at least 6 characters/i)).toBeInTheDocument()
    // Kiểm tra mockSubmit chưa được gọi vì đang gặp lỗi validation
    expect(mockOnSubmit).not.toHaveBeenCalled()
  })

  it('should submit form with correct values', async () => {
    const mockOnSubmit = jest.fn()
    render(<SignUpForm onSubmit={mockOnSubmit} />)
    // Hành động user gõ nội dung HỢP LỆ vào input email
    await userEvent.type(
      screen.getByPlaceholderText(/enter email/i),
      'hwink.dev@gmail.com'
    )
    // Hành động user gõ nội dung HỢP LỆ vào input password
    await userEvent.type(
      screen.getByPlaceholderText(/enter password/i),
      'password@123'
    )
    // User nhấn vào button submit
    await userEvent.click(screen.getByText(/submit/i))
    // Kiểm tra mockSubmit được gọi 1 lần
    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    // Kiểm tra mockSubmit được gọi với đúng đối số
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'hwink.dev@gmail.com',
      password: 'password@123'
    })
    // Reset form sau khi submit thành công
    expect(screen.getByPlaceholderText(/enter email/i)).toHaveValue('')
    expect(screen.getByPlaceholderText(/enter password/i)).toHaveValue('')
  })
})