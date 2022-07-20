import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" className='fixed-top'>
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/business" className='nav-link active'>Business</Link>
              <Link to="/entertainment" className='nav-link active'>Entertainment</Link>
              <Link to="/general" className='nav-link active'>General</Link>
              <Link to="/health" className='nav-link active'>Health</Link>
              <Link to="/science" className='nav-link active'>Science</Link>
              <Link to="/sports" className='nav-link active'>Sports</Link>
              <Link to="/technology" className='nav-link active'>Technology</Link>
              
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
