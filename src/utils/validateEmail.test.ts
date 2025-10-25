import { validateEmail } from '~/utils/validateEmail'

describe('Unit tests: validateEmail:', () => {
  const cases: any[] = [
    ['caotranhoangminh2003@gmail.com', true],
    ['caotranhoangminh@', false],
    ['@hwink.com', false],
    // [{ email: 'caotranhoangminh2003@gmail.com' }, true], // test hiển thị placeholder %p cho object lúc test fail
  ]

  // Dùng each để lặp qua các case và test cho từng case, giúp viết test ngắn gọn khi có nhiều bộ dữ liệu test lặp lại cùng một logic
  // %p là placeholder kiểu pretty-format để in ra giá trị của tham số trong mỗi case, giúp đễ debug khi test bị fail
  // https://jestjs.io/docs/api#1-testeachtablename-fn-timeout
  it.each(cases)('%p => %p', (email, expected) => {
    expect(validateEmail(email)).toBe(expected)
  })
})
