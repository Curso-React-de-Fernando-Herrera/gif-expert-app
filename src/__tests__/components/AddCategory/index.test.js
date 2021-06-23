import { shallow } from 'enzyme'
import AddCategory from 'components/AddCategory'

describe('<AddCategory /> component', () => {
  let setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    setCategories = jest.fn()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('should be rendered', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should be simulate change input', () => {
    const value = 'Hello'
    const inputText = wrapper.find('input')
    
    inputText.simulate('change', { target: {value} })
    
    const returnedText = wrapper.find('input').props().value

    expect(returnedText).toBe(value)
  })

  test('should NOT submit when the text is empty', () => {
    const form = wrapper.find('form')
    form.simulate('submit', { preventDefault(){} })

    expect(setCategories).not.toHaveBeenCalled()
  })

  test('should be find gif and wish input', () => {
    const value = 'Dragon Ball'

    wrapper.find('input').simulate('change', { target: {value} })
    wrapper.find('form').simulate('submit', { preventDefault(){} }) 

    const inputValue = wrapper.find('input').props().value

    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )

    expect(inputValue).toBe('')
    expect(inputValue).not.toBe(value)
  })
})