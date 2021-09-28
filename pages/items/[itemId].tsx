import React from 'react'
import SingleView from '../../src/components/SingleView'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import singleProductFc from '../../src/utils/singleProductFc'
import BoxSearch from '../../src/components/BoxSearch'

const ProductId = ({ data, productId }) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(['FetchProducts', productId], () => singleProductFc(productId), {
    initialData: data,
  })

  return (
    <div>
      <BoxSearch />
      <SingleView isLoading={isLoading} isError={isError} data={products} />
    </div>
  )
}

export default ProductId

export async function getServerSideProps(context) {
  const productId = context.query.itemId
  const data = await singleProductFc(productId)

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data, productId },
  }
}
