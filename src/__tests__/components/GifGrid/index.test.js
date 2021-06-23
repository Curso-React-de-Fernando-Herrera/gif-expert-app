import { shallow } from 'enzyme'
import GifGrid from 'components/GifGrid'
import { useFetchGifs } from 'hooks/useFetchGifs'

jest.mock('hooks/useFetchGifs') // simula una ejecucion a ese archivo y controla que va a devolver

describe('<GifGrid /> component', () => {
  useFetchGifs.mockReturnValue({
    gifs: [],
    loading: true
  })

  const DEFAULT_GIF = [{
    id: 'abc',
    title: 'examle',
    url: 'https://localhost/example.png',
    username: 'pepito'
  }]

  let category = 'Dragon Ball'
  let wrapper = shallow(<GifGrid category={category} />)

  beforeEach(() => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true
    })
    wrapper = shallow(<GifGrid category={category} />)
  })

  test('should be render the loading at first time', () => {
    const initialLoadingText = 'Loading...'
    const loadingText = wrapper.find('p').text().trim()

    expect(wrapper).toMatchSnapshot()
    expect(loadingText).toBe(initialLoadingText)
  })

  test('should be return gif data', () => {
    useFetchGifs.mockReturnValue({
      gifs: DEFAULT_GIF,
      loading: false
    })

    wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })
})