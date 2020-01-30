import React, { useState, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
const MainNavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [isLogin, setLogin] = useState({
    status: JSON.parse(localStorage.getItem('status'))
  });

  const signOut = () => {
    setLogin(prevState => {
      return (prevState.status = false);
    });
    localStorage.setItem('status', false);
  };

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand tag={Link} to='/'>
          MainPage
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink tag={Link} to='/PageAbout'>
                PageAbout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/PageProfile'>
                PageProfile
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavItem>
              <NavLink tag={Link} to='/TodoList'>
                TodoList
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/TodoAppHook'>
                TodoAppHook
              </NavLink> */}
            {/* </NavItem> */}
          </Nav>
          <Nav className='mr-6' navbar>
            {isLogin ? (
              <NavItem>
                <NavLink tag={Link} to='/#' onClick={signOut}>
                  Sign Out{' '}
                </NavLink>
              </NavItem>
            ) : (
              <Fragment>
                <NavItem>
                  <NavLink tag={Link} to='SignIn'>
                    SignIn
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to='/Register'>
                    SignUp
                  </NavLink>
                </NavItem>
              </Fragment>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavBar;
//https://reacttraining.com/ dicoba
//memakai Fragment supaya tidak merubah atau sesuatu text di page
//karena penambahan div sebagai pembungkus  mempengrahi tamilan
