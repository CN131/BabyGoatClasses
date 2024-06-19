import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.js'
import ProductList from './ProductList.js'
import Product from './Product.js'
import ProductForm from './ProductForm.js';
import Search from './Search.js';
import About from './About.js';
import { Container, Image } from 'react-bootstrap';
import BabyGoats from './BabyGoats.jpg'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<><h1>Baby Goat Classes</h1>
            <h5>Come take a variety of classes all with the addition of baby goats! Does it help you learn? Maybe. Does it make the class hilarios and entertaining? Absolutely!</h5>
            <Container className='row'> 
              <Image src={BabyGoats} className="col-md-9" alt="Two Baby Goats"></Image>
              <Container className='col-md-3'>
              <Image src={'/media/GoatYoga.jpeg'} className="col-md-10"></Image>
              <Image src={'/media/GoatJitsu.jpeg'} className="col-md-10"></Image>
              <Image src={'/media/GoatChoir.jpeg'} className="col-md-10"></Image>
              </Container>
              </Container></>} />
              <Route path="/aboutus" element={<About />} ></Route>
            <Route path="/products" element={<ProductList />} >
              <Route index element={<p>Select a Product for more details</p>} />
              <Route path="new" element={<ProductForm />} />
              <Route path=":productId/edit" element={<ProductForm />} />
              <Route path=":productId" element={<Product />} />
              <Route path="*" element={<h1>Product Not Found</h1>} />
              <Route path="search" element={<Search />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

