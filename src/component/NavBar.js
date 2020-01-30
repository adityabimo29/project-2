import React,{useState, Fragment} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';
  import {withRouter} from 'react-router-dom';

  import {Link} from "react-router-dom";

function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const isLogin = localStorage.getItem('status');

    const isLogout = () => {
        localStorage.removeItem('status');
        props.history.push('/login');
        window.location.reload();
    }

    return (
        <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Team Indra Surya</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/profile'>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/api'>API</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/free'>Unsplash API</NavLink>
            </NavItem>
            
          </Nav>
          {!isLogin  ?(
          <Fragment>
          <Button className='mr-2' color="primary" tag={Link} to='/login'>Login</Button>
          <Button color="warning" tag={Link} to='/register'>Register</Button>
          </Fragment>
          ): (
            <Fragment>
            <Button color="warning" onClick={isLogout}>Logout</Button>
            </Fragment>)}
        </Collapse>
      </Navbar>
    )
}

export default withRouter(NavBar);