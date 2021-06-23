import { GetGifsService } from "services/getGifs"

export const GetGifs = async({ category = '' } = {}) => {
  const gifs = await GetGifsService({ category })

  // get all data and below filter
  return gifs.map(({ id, images, title, username }) => (
    {
      id,
      title,
      url: images?.downsized_medium.url,
      username
    }
  ))
}