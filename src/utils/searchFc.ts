import axios from 'axios'

interface SearchProps {
  response: Promise<{
    author: {
      name: string
      lastname: string
    }
    items: any
  }>
}

const searchFunction = (inputsearch: string): SearchProps['response'] => {
  return axios
    .get(
      `https://api.mercadolibre.com/sites/MLA/search?q=:${inputsearch}&limit=4`
    )
    .then((res) => res.data)
    .then((info) => ({
      author: {
        name: 'Julian',
        lastname: 'Ianni',
      },
      items: info.results,
    }))
    .catch((err) => err)
}

export default searchFunction
