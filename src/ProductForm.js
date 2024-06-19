import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext.js';

function ProductForm() {
  let params = useParams()
  let [product, setProduct] = useState({
    id: params.productId,
    name: "",
    description: "",
    price: "",
    time: "",
    picture: ""
  })

  let { getProduct, addProduct, updateProduct } = useContext(ProductContext);
  let navigate = useNavigate()
  let { id, name, description, price, time, picture } = product

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getProduct(id)
        .then((product) => setProduct(product))
    }
    fetch()
  }, [id])

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }
    })
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addProduct(product)
    } else {
      return updateProduct(product)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    addOrUpdate().then((product) =>
      navigate(`/products/${product.id}`)
    )
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" value={description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" value={price} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Time</Form.Label>
        <Form.Control type="text" name="time" value={time} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Picture</Form.Label>
        <Form.Control type="text" name="picture" value={picture} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  )
}

export default ProductForm