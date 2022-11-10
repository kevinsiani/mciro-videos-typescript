import { Category } from "./category"

describe('Category testes', () => {
  test('constructor os category', () => {
    const category = new Category('Kevin')
    expect(category.name).toBe('Kevin')
  })
})