import GifGridItem from 'components/GifGridItem'
import { GetGifs } from 'helpers/getGifs'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    GetGifs({ category })
      .then(setGifs)
  }, [category])

  return <>
    <h2>{category}</h2>
    <div>
      {
        gifs.map(gif => 
          <GifGridItem
            key={gif.id}
            title={gif.title}
            username={gif.username}
            url={gif.url}
          />
        )
      }
    </div>
  </>
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
