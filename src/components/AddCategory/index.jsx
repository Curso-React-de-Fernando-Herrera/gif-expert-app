import { useState } from "react"
import PropTypes from 'prop-types'

const CreateCategory = ({ setCategories }) => {
  const [newCategory, setNewCategory] = useState('')

  const handleChangeInput = e => setNewCategory(e.target.value)

  const handleAdd = e => {
    e.preventDefault()

    newCategory.trim() &&
      setCategories(lastCategories => [newCategory, ...lastCategories])
      
    setNewCategory('')
  }

  return <form onSubmit={handleAdd}>
    <input type="text" value={newCategory} onChange={handleChangeInput}/>
    <button>Agregar</button>
  </form>
}

CreateCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default CreateCategory
