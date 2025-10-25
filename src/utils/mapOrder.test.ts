import { mapOrder } from "~/utils/mapOrder";

describe('Unit tests: mapOrder:', () => {
  it('should return [] if originalArray is empty', () => {
    expect(mapOrder(null as any, [1, 2, 3], 'id')).toEqual([])
  })

  it('should return [] if orderArray is empty', () => {
    expect(mapOrder([{ id: 1 }], null as any, 'id')).toEqual([])
  })

  it('should return [] if key is falsy', () => {
    expect(mapOrder([{ id: 1 }], [1, 2, 3], '')).toEqual([])
  })

  it('should sort array by given order', () => {
    const originalArray = [
      { id: 1, name: 'A' },
      { id: 3, name: 'C' },
      { id: 2, name: 'B' },
      { id: 4, name: 'D' },
    ]
    const orderArray = [1, 2, 3, 4]
    const result = mapOrder(originalArray, orderArray, 'id')
    expect(result.map(item => item.id)).toEqual([1, 2, 3, 4])
  })

  it('should push items not in orderArray to the end.', () => {
    const originalArray = [
      { id: 1, name: 'A' },
      { id: 3, name: 'C' },
      { id: 23, name: 'Y' },
      { id: 2, name: 'B' },
      { id: 15, name: 'Z' },
      { id: 4, name: 'D' },
    ]
    const orderArray = [1, 2, 3, 4]
    const result = mapOrder(originalArray, orderArray, 'id')
    //  15 và 23 không có trong orderArray nên sẽ được đẩy xuống cuối. (THEO THỨ TỰ GỐC)
    expect(result.map(item => item.id)).toEqual([1, 2, 3, 4, 23, 15])
  })

  it('should handle when all items of originalArray are not in orderArray', () => {
    const originalArray = [
      { id: 10 },
      { id: 20 },
      { id: 30 }
    ]
    const orderArray: number[] = []
    const result = mapOrder(originalArray, orderArray, 'id')
    // Tất cả items trong originalArray không có trong orderArray nên giữ nguyên thứ tự gốc
    expect(result.map(item => item.id)).toEqual([10, 20, 30])
  })

  it('should work with custom key', () => {
    const originalArray = [
      { code: 'A', name: 'Minh' },
      { code: 'C', name: 'Ngan' },
      { code: 'D', name: 'Uyen' },
      { code: 'B', name: 'Nguyet' },
    ]
    // Sắp xếp theo custom key 'code'
    const orderArray = ['A', 'B', 'C', 'D']
    const result = mapOrder(originalArray, orderArray, 'code')
    expect(result.map(item => item.code)).toEqual(['A', 'B', 'C', 'D'])

    // Sắp xếp theo custom key 'name'
    // const orderArray = ['Minh', 'Nguyet', 'Ngan', 'Uyen']
    // const result = mapOrder(originalArray, orderArray, 'name')
    // expect(result.map(item => item.name)).toEqual(['Minh', 'Nguyet', 'Ngan', 'Uyen'])
  })
})
