import { sum } from '.'

describe('Setup', () => {
  it('should return a sum', () => {
    const result = sum(1, 3)
    expect(result).toBe(4)
  })

  it('should return the node env', () => {

    expect(process.env.HELLO).toBe('world')
  })
})
