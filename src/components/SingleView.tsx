import React from 'react'
import { useRouter } from 'next/router'
import s from '../../styles/MoreInfo.module.css'

const SingleView = ({ data, isLoading, isError }) => {
  const router = useRouter()

  console.log(data)

  const { price, pictures, title, condition, sold_quantity } =
    data.productInfo.info
  console.log(pictures)

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error! oooops</div>

  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.topContainer}>
          <div className={s.leftTop}>
            <div>
              <img src={pictures[0].url} alt='foto' />
            </div>
          </div>
          <div className={s.rightTop}>
            <p>
              {condition === 'new' ? 'Nuevo' : 'Usado'}
              <span> - {sold_quantity} vendidos</span>
            </p>
            <h4>{title}</h4>
            <h3>$ {Number(price)}</h3>
            <button>Comprar</button>
          </div>
        </div>
        <div>
          <h2>Descripcion del producto</h2>
          <p>{data.productInfo.description.plain_text}</p>
        </div>
      </div>
    </>
  )
}

export default SingleView
