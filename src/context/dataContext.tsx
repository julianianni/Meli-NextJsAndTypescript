import React, { useState } from 'react'

interface productProp {
  fetchedProducts: any
  setFetchedProducts: React.Dispatch<
    React.SetStateAction<{
      author: {
        name: string
        lastname: string
      }
      items: any[]
    }>
  >
}

const INITIAL_DATA = {
  author: {
    name: '',
    lastname: '',
  },
  items: [],
}

const ProductsContext = React.createContext<Partial<productProp>>({})

const DataContextProvider = ({ children }) => {
  const [fetchedProducts, setFetchedProducts] =
    useState<typeof INITIAL_DATA>(INITIAL_DATA)

  return (
    <ProductsContext.Provider
      value={{
        fetchedProducts,
        setFetchedProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export { DataContextProvider, ProductsContext }
