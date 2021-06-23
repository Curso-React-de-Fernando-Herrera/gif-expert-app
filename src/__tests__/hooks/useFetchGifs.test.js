import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from 'hooks/useFetchGifs'


describe('useFetchGifs hook', () => {
  test('should be return state', async() => {
    const category = 'Dragon Ball'
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs({ category }))

    expect( result.current.gifs ).toEqual([])
    expect( result.current.loading ).toBe( true )

    await waitForNextUpdate()
  })

  test('should be return final state with gifs', async() => {
    const category = 'Dragon Ball'
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs({ category }))

    await waitForNextUpdate()
    
    expect( result.current.loading ).toBe( false )
    expect( result.current.gifs ).not.toEqual([])
  })
})