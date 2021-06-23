const { GetGifs } = require("helpers/getGifs")

describe('helper getGifs', () => {
  test('should be create an array of 10 elements', async() => {
    const category = 'Dragon Ball'
    
    const returnedGifs = await GetGifs({ category })

    expect(returnedGifs.length).toBe(10)
  })

  test('should be an empty array if the search is null', async() => {
    const returnedGifs = await GetGifs()
    expect(returnedGifs.length).toBe(0)
  })
})