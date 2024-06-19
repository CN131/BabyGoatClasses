import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from './ProductContext.js';

function Search() {
  let params = useParams()
  let [product, setProduct] = useState({
    id: params.productId,
    name: "",
    description: "",
    price: "",
    time: "",
    picture: ""
  })
  let [extension, setExtension] = useState({})

  let { filterProducts } = useContext(ProductContext);
  let searchparam;

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }
    })
  }



  function handleSubmit(event) {
    event.preventDefault()
    setExtension((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
    filterProducts(extension)

  }
      
  


  return (
    <Container className='col-md-4'>
      <Form onChange={handleSubmit}>
      <Form.Label className='centered'><h3>Filter by Price</h3></Form.Label>
        {['radio'].map((filter) => (
          <div key={`inline-${filter}`} className="mb-3">
             <Form.Check
              inline
              label="all"
              name="filter"
              type={filter}
              value={''}
              id={`inline-${filter}-1`}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="<$25"
              name="filter"
              type={filter}
              value={'<25'}
              id={`inline-${filter}-2`}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label=">=$25 & <$30"
              name="filter"
              type={filter}
              value={'>=25 & <30'}
              id={`inline-${filter}-3`}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label=">=$30"
              name='filter'
              type={filter}
              value={'>=30'}
              id={`inline-${filter}-4`}
              onChange={handleChange}
            />
          </div>
        ))} 
        
      </Form>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label><h3>Search</h3></Form.Label>
          <Form.Control type="text" name="searchparam" value={searchparam} onChange={handleChange} />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  )
}

export default Search

