import axios from 'axios'

interface PromiseResponse {
  author: {
    name: string
    lastname: string
  }
  productInfo?: {
    info: string[]
    description: string[]
  }
}

const singleProductFc = (productId: string): Promise<PromiseResponse> => {
  const singleProdPromise = axios.get(
    `https://api.mercadolibre.com/items/${productId}`
  )
  const singleProdPromiseDescription = axios.get(
    `https://api.mercadolibre.com/items/${productId}/description`
  )

  return axios
    .all([singleProdPromise, singleProdPromiseDescription])
    .then(
      axios.spread((...response) => ({
        author: {
          name: 'Julian',
          lastname: 'Ianni',
        },
        productInfo: {
          info: response[0].data,
          description: response[1].data,
        },
      }))
    )
    .catch((err) => err)
}

export default singleProductFc
