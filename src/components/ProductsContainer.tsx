import React, { useContext, useEffect } from 'react'
import styles from '../../styles/Products.module.css'
import Product from './Product'
import { ProductsContext } from '../context/dataContext'

const ProductsContainer = () => {
  const { fetchedProducts } = useContext(ProductsContext)

  return (
    <div className={styles.container}>
      {fetchedProducts &&
        fetchedProducts.items.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
    </div>
  )
}

export default ProductsContainer
