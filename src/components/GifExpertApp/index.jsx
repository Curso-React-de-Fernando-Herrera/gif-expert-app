import { useState } from "react"
import PropTypes from 'prop-types'

import AddCategory from 'components/AddCategory'
import GifGrid from "components/GifGrid"

const GifExpertApp = ({ initialCategory = ['Naruto'] }) => {
  const [categories, setCategories] = useState(initialCategory)

  return <div>
    <header>
      <h2>GifExpertApp</h2>
      <AddCategory
        setCategories={setCategories}
      />
      <hr />
    </header>
    <ol>
      {
        categories.map(category => (
          <GifGrid
            category={category}
            key={category}
          />
        ))
      }
    </ol>
  </div>
}

GifExpertApp.porpTypes = {
  initialCategory: PropTypes.arrayOf(PropTypes.string)
}

export default GifExpertApp
