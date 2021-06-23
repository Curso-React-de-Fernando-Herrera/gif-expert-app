import GifGridItem from 'components/GifGridItem'
import { useFetchGifs } from 'hooks/useFetchGifs'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGifs({ category })

  return <>
    <h2>{category}</h2>

    { loading && <p>Loading...</p> }
    
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
