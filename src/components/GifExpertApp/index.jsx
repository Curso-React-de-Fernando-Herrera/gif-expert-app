import { useState } from "react"

import AddCategory from 'components/AddCategory'
import GifGrid from "components/GifGrid"

const GifExpertApp = () => {
  const initialCategories = ['Naruto']

  const [categories, setCategories] = useState(initialCategories)

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

export default GifExpertApp
