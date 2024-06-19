import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import { Image } from 'react-bootstrap'
import BabyGoatIcon from './BabyGoatIcon.jpeg'
import axios from 'axios';


function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Image src={BabyGoatIcon} className='col-1'></Image>
          <h1 className="navbar-brand text-success">Goats-R-Us</h1>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <Link to="/products" className="nav-link">Classes</Link>
            <Link to="/products/new" className="nav-link">New Product</Link>
            <Link to="/products/search" className='nav-link'>Search Product</Link>
          </Nav>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </>
  )
}

export default Home