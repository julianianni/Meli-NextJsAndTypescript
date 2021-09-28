import React, { useContext, useEffect, useState } from 'react'
import styles from '../../styles/boxsearch.module.css'
import searchFunction from '../utils/searchFc'
import { useQuery } from 'react-query'
import { ProductsContext } from '../context/dataContext'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const BoxSearch = () => {
  const { fetchedProducts, setFetchedProducts } = useContext(ProductsContext)
  const router = useRouter()

  const [inputValue, setInputvalue] = useState<string>('')

  const handleClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!inputValue) return
    searchFunction(inputValue)
      .then((data) => setFetchedProducts(data))
      .then(() => {
        if (router.query.itemId) router.push('/')
      })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputvalue(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Link href='/' passHref>
          <Image
            className={styles.img}
            src='/assets/Logo_ML.png'
            alt='Meli-Logo'
          />
        </Link>
      </div>
      <form onSubmit={handleClick} className={styles.formContainer}>
        <input
          onChange={handleChange}
          value={inputValue}
          className={styles.input}
          type='text'
          placeholder='Nunca dejes de buscar'
        />
        <button className={styles.btnSearch}>
          <Image
            className={styles.searcher}
            src='/assets/ic_Search.png'
            alt='lupa'
          />
        </button>
      </form>
    </div>
  )
}

export default BoxSearch
