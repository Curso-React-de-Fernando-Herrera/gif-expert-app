import { shallow } from 'enzyme'
import GifGridItem from 'components/GifGridItem'

describe('<GifGridItem /> component', () => {
  const title = 'Gif Title'
  const username = 'GifyUserCrazy'
  const url = 'https://example'
  const wrapper = shallow(
    <GifGridItem
      title={title}
      username={username}
      url={url}
    />
  )

  test('should be rendered', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should be same title that arrive by prop', () => {
    const returnedTitle = wrapper
      .find('h1')
      .text()
      .trim()
    
    expect(returnedTitle).toBe(title)
  })

  test('should be same imgs atributes that arrive by props', () => {
    const returnedImg = wrapper
      .find('img')
      .props()
      .src
    
    expect(returnedImg).toBe(url)
  })
})