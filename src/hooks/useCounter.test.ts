import { renderHook, act } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe('useCounter hook', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0)
  })

  it('should initialize with given initial value', () => {
    const { result } = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })

  it('should increment the count', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })

  it('should decrement the count but not below 0', () => {
    const { result } = renderHook(() => useCounter(1))
    act(() => {
      result.current.decrement() // Decrement to 0
      result.current.decrement() // This should not go below 0
    })
    expect(result.current.count).toBe(0)
  })

  it('should reset the count to initial value', () => {
    const { result } = renderHook(() => useCounter(3))
    act(() => {
      result.current.increment()
      result.current.reset()
    })
    expect(result.current.count).toBe(3)
  })
})

