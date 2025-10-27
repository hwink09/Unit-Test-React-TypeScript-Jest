import { DebounceSearch } from '~/components/DebounceSearch/DebounceSearch'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<DebounceSearch />', () => {
  it('should fetch user after debounce', async () => {
    // Mock call api với query cụ thể hoặc không có query
    // mockImplementation: gán cùng một logic mock cho tất cả các mock fetch
    jest.spyOn(globalThis, 'fetch').mockImplementation(async (url: any) => {
      if (url.includes('hwinkdev')) {
        return {
          json: async () => [{ id: 1, name: 'hwinkdev - a developẻ' }]
        } as Response
      }
      return { json: async () => [] } as Response
    })
    render(<DebounceSearch />)
    // Lần đầu gọi fetch khi mount component với query rỗng
    expect(globalThis.fetch).toHaveBeenCalledTimes(1)
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/users?q=')
    )
    // Tìm ô input có chứa placeholder "Search", sau đó giả lập người dùng gõ từng kí tự 'hwinkdev' vào ô input
    await userEvent.type(screen.getByPlaceholderText(/search/i), 'hwinkdev')
    // Lúc này debounce chưa xong => fetch chưa được gọi thêm
    expect(globalThis.fetch).toHaveBeenCalledTimes(1)
    // await findByText sẽ đợi debounce chạy và check kết quả render ra UI
    expect(await screen.findByText(/hwinkdev - a developẻ/i)).toBeInTheDocument()
    // Kiểm tra fetch được gọi thêm lần nữa (tổng 2 lần) và lúc này query đúng là 'hwinkdev'
    expect(globalThis.fetch).toHaveBeenCalledTimes(2)
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/users?q=hwinkdev')
    )
  })

  it('should show no result when fetch error:', async () => {
    jest.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network Error'))
    render(<DebounceSearch />)
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    // Sau khi fetch bị lỗi, sẽ hiển thị "No result!"
    expect(await screen.findByText(/no result/i)).toBeInTheDocument()
  })
})