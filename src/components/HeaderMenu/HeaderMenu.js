import React from 'react';
import './HeaderMenu.css';
import Account from '../Account/Account'
import { Button, Nav, Form, Navbar, NavDropdown } from 'react-bootstrap';

class HeaderMenu extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    componentDidMount() {
    //   this.unauthenticate()
    }

    render() {
     return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Account/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Create" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Save</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Load</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form inline>
            <Button className="settings-button" variant="outline-success">Deploy</Button>
            <Button className="" variant="outline-success">Settings</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
     );
    }
  }
export default HeaderMenu;