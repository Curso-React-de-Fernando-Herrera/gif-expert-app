import { useEffect, useState } from "react"
import { GetGifs } from 'helpers/getGifs'


export const useFetchGifs = ({ category }) => {
  const INITIAL_STATE = {
    gifs: [],
    loading: true
  }

  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {

    GetGifs({ category })
      .then(gifs => {

        setState({
          gifs,
          loading: false
        })

      })

  }, [category])

  return state
}