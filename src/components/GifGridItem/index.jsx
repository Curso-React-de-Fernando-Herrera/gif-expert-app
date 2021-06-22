import PropTypes from 'prop-types'

const GifGridItem = ({ title, url, username }) => {
  return <article>
    <h1>{title}</h1>
    <small>{username}</small>
    <img src={url} alt={title} loading="lazy" />
  </article>
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default GifGridItem
