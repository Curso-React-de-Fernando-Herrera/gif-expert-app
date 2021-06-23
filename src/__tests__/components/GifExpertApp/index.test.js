import { shallow } from 'enzyme'
import GifExpertApp from 'components/GifExpertApp'

describe('<GifExpertApp /> component', () => {
  let wrapper = shallow(<GifExpertApp />)

  beforeEach(() => {
    wrapper = shallow(<GifExpertApp />)
  })

  test('should be rendered', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should be show array of gifs', () => {
    const initialCategory = ['Sasuke', 'Itachi', 'Madara']

    wrapper = shallow(<GifExpertApp initialCategory={initialCategory} />)
    const returnedList = wrapper.find('GifGrid')

    expect( returnedList.length ).toBe( initialCategory.length )
    expect( returnedList.length ).not.toBe( initialCategory.length + 1 )
  })
})