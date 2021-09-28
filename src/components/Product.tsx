import React from 'react'
import Link from 'next/link'
import s from '../../styles/SingleProduct.module.css'
import Image from 'next/image'

const Product = ({ product }) => {
  const { price, thumbnail, title, address } = product
  console.log(address)
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Link href={`items/${product.id}`} passHref>
          <img className={s.img} src={thumbnail} alt={title} />
        </Link>
      </div>
      <Link href={`items/${product.id}`} passHref>
        <div className={s.infoContainer}>
          <h3>${price}</h3>
          <h4 className={s.title}>{title}</h4>
        </div>
      </Link>
      <div className={s.adressContainer}>
        <p>{address.state_name}</p>
      </div>
    </div>
  )
}

export default Product
