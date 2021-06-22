export const GetGifsService = ({ category }) => {
  return fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=YUSc7YPKJvFZDcJ5k3SXYpufIXxdgIKX`)
  .then(res => res.json())
  .then(({ data }) => data)
  .catch(err => console.error(err))
}