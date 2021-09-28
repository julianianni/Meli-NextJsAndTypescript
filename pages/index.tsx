import { useState, useContext } from 'react'
import BoxSearch from '../src/components/BoxSearch'
import styles from '../styles/Home.module.css'
import ProductsContainer from '../src/components/ProductsContainer'
import { ProductsContext } from '../src/context/dataContext'

export default function Home() {
  const { fetchedProducts, setFetchedProducts } = useContext(ProductsContext)

  return (
    <>
      <BoxSearch />
      <ProductsContainer />
    </>
  )
}
