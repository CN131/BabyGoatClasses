import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import { ProductContext } from './ProductContext.js'

function ProductList(props) {
  function productList(products) {
    // console.log(products);
    if (products === null) return
    return products.map((product) => 
      <ListGroup.Item key={product.id}>
        <Link to={`/products/${product.id}`} key={product.id} >
          {product.name}
        </Link>
      </ListGroup.Item>
    )
  }

  return (
    <>
    <h1>Classes</h1>
    <Stack direction="horizontal" gap={3}>
    <ListGroup className="align-self-start w-75">
    <ProductContext.Consumer>
      {({products}) => (
        productList(products)
      )}
    </ProductContext.Consumer>
    </ListGroup>
    <Outlet />
    </Stack>
    </>
  )
}

export default ProductList