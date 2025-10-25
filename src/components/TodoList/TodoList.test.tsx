import { TodoList } from '~/components/TodoList/TodoList'
import { render, screen } from '@testing-library/react'

/**
 * Việc có tồn tại dòng Uncovered line là bình thường và chấp nhận được. Vì có nhiều dòng code không cần phải test hết như log, debug, catch error, ...
 * Quan trọng là các tính năng chính, logic nghiệp vụ, luồng người dùng quan trọng đều được test 
 * Thực tế trong dự án, đều đặt target ~ 7-90% chứ không phải 100% hoàn hảo
 */

const mockTodos = [
  { id: 1, todo: 'Hwink dev 01', completed: true, userId: 1 },
  { id: 2, todo: 'Hwink dev 02', completed: false, userId: 2 },
]

describe('<TodoList />', () => {
  it('fetches and displays todos', async () => {
    // globalThis: biến toàn cục chuẩn từ ES2020, chạy trên mọi môi trường browser (window), nodejs (global), webworker (self)
    // jest.spyOn: tạo mock function thay thế cho hàm gốc, có thể restore lại hàm gốc sau khi test xong
    // https://jestjs.io/docs/api#1-testeachtablename-fn-timeout
    // mockResolvedValueOnce: mock 1 lần trả về Promise resolved với giá trị truyền vào
    jest.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      json: async () => ({ todos: mockTodos })
    } as any)

    render(<TodoList />)

    // getByText: chạy đồng bộ (synchronous) dùng khi chắc chắn element sẽ có trong DOM
    // kiểm tra chữ loading phải có trong document
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()


    // findByText: chạy bất đồng bộ (asynchronous) trả về Promise, dùng khi element có thể mất thời gian mới xuất hiện trong DOM, dùng với async/await hoặc .then()
    // Kiểm tra tất cả các todo của mock được hiển thị trong document
    for (const t of mockTodos) {
      expect(await screen.findByText(t.todo)).toBeInTheDocument()
    }
  })

  it('displays No result! when there are no todos', async () => {
    jest.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network Error'))
    render(<TodoList />)
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    // Sau khi fetch bị lỗi, sẽ hiển thị "No result!"
    expect(await screen.findByText(/no result/i)).toBeInTheDocument()
  })
})
