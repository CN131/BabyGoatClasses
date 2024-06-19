import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from './ProductContext.js'
import { useContext, useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'
import { Spinner } from "react-bootstrap";


function Product(props) {

    let params = useParams();
    let navigate = useNavigate();
    
  
    let { getProduct, deleteProduct } = useContext(ProductContext)
    let [product, setProduct] = useState()
  
    let [ error, setError ] = useState()

  
    useEffect(() => {
      setError(null)
      async function fetch() {
        await getProduct(params.productId)
          .then((product) => setProduct(product))
          .catch((message) => setError(message))
      }
      fetch()
    }, [params.productId, getProduct])
  
    function errorMessage() {
      return <Alert variant="danger">There was an error attempting to load this class: {error}</Alert>
    }
  
    function loading() {
      return <div className="w-25 text-center"><Spinner animation="border" /></div>
    }
  
    function handleDeleteProduct(id) {
      deleteProduct(id)
      navigate('/products')
    }
  

    function productCard() {
      let { id, name, description, price, time, picture } = product;
      // console.log(picture);
      return (
        <Card className="align-self-start w-25">
          <Card.Img variant="top" src={picture}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
            <Card.Text>
              <strong>Price: $</strong> <span>{price}</span>
            </Card.Text>
            <Card.Text>
              <strong>Time:</strong> <span>{time}</span>
            </Card.Text>

            <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
            <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
          </Card.Body>
        </Card>     
        
      )
    } 
    
    if (error) return errorMessage()
      if (product === undefined) return loading()
      return productCard()
        // return product.id !== parseInt(params.productId) ?  loading() : productCard()
    }
  
  export default Product