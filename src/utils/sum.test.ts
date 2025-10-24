import { sum } from '~/utils/sum'

// Jest rumtime đã cung cấp describe, it, expect dưới dạng global fn rồi nên có thể dùng luôn 
/**
 * describe: nhóm các test case liên quan đến nhau
 * it: định nghĩa 1 test case
 * expect: dùng để assert (kiểm tra) kết quả trả về có đúng như mong đợi hay không
 */
describe('Unit test: sum():', () => {
  it('should return correct sum of two numbers', () => {
    expect(sum(2, 6)).toBe(8)
  })
})