import React from 'react';
import * as fcl from '@onflow/fcl'
// import DappExample from './DappExample'
// import Container from './components/Container/Container';
// import { Grommet } from 'grommet';
import Account from './components/Account/Account'
// import { Nav, Navbar, Icon, Dropdown, Avatar, Container, Button, Grid, Row, Col, Sidebar, Header, Footer, Content, Drawer } from 'rsuite';
import { Card, Button, Container, Col, Row, Nav, Form, FormControl, Navbar, NavDropdown } from 'react-bootstrap';
// import 'rsuite/dist/styles/rsuite-default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

window.fcl = fcl
fcl.config().put("challenge.handshake", "http://localhost:8701/flow/authenticate")
// fcl.config()
// .put("accessNode.api", "https://access-testnet.onflow.org")
// .put("challenge.handshake", "https://fcl-discovery.vercel.app/testnet/authn")
function App() {
  return (
    <div className="App">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
              <Account/>
            </Navbar.Brand>

            



                <Button className="" variant="outline-success">Settings</Button>


          </Navbar>
          <Container fluid>
            <Row>
              <Col className="col-margin" md={{span: 12, order: 4}} lg={{span: 3, order: 1}}>
                <div class="series-menu-layout">
                  <Card className="shadow">
                    <Form className="series-menu">
                      <Form.Group controlId="seriesName">
                        <Form.Label>Series</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>

                      <Form.Group controlId="seriesSymbol">
                        <Form.Control type="text" placeholder="Symbol" />
                      </Form.Group>

                      <Form.Group controlId="seriesAddress">
                        <Form.Control type="text" disabled placeholder="Address" />
                      </Form.Group>

                      <Button variant="primary" type="submit" block>
                        Deploy
                      </Button>
                    </Form>
                  </Card>
                </div>
              </Col>
              <Col className="col-margin" md={{span: 8, order: 1}} lg={{span: 6, order: 2}}>
                {/* <div class="nft-layout"> */}
                  <div class="nft-image shadow">
                  </div>
                {/* </div> */}
              </Col>
              <Col className="col-margin" md={{span: 4, order: 2}} lg={{span: 3, order: 3}} >
              <div class="nft-attr-menu">
              <Card className="shadow">
                    <Form className="series-menu">
                      <Form.Group controlId="tokenName">
                        <Form.Label>Token</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>

                      <Form.Group controlId="tokenDescription">
                        <Form.Control as="textarea" rows={3} type="text" placeholder="Description" />
                      </Form.Group>

                      <Form.Group controlId="tokenId">
                        <Form.Control type="text" placeholder="Token ID" />
                      </Form.Group>

                      <Form.Group controlId="tokenAttributes">
                          <Form.Label>Attributes</Form.Label>
                      </Form.Group>


                      <Form.Group controlId="tokenAttributes">
                        <Form.Control type="text" placeholder="Attribute" />
                      </Form.Group>
                      <Form.Group controlId="tokenValue">
                        <Form.Control type="text" placeholder="Value" />
                      </Form.Group>

                      <Form.Group controlId="tokenAttributes">
                        <Form.Control type="text" placeholder="Attribute" />
                      </Form.Group>
                      <Form.Group controlId="tokenValue">
                        <Form.Control type="text" placeholder="Value" />
                      </Form.Group>

                      <Button className="add-attribute-button" variant="primary" type="submit">
                        +
                      </Button>
                    </Form>
                  </Card>
                </div>
              </Col>
              <Col className="col-margin scroll-margin" md={{span: 12, order: 3}} lg={{span: 12, order: 4}} >
                <Container className="testimonial-group" fluid>
                  <Row className="text-center flex-nowrap">
                      <Col sm={2}>
                        <div className="nft-series-item"/>
                      </Col>
                      <Col sm={2}>
                        <div className="nft-series-item"/>
                      </Col>
                      <Col sm={2}>
                        <div className="nft-series-item"/>
                      </Col>
                      <Col sm={2}>
                        <div className="nft-series-item"/>
                      </Col>
                      <Col sm={2}>
                        <div className="nft-series-item"/>
                      </Col>
                      <Col sm={2}>
                        <div className="nft-series-item"/>
                      </Col>
                      <Col sm={2}>
                        <div className="nft-series-item"/>
                      </Col>

                      <Col sm={2}>
                        <div className="nft-series-item"/>
                      </Col>

                  </Row>
                </Container>
              </Col>

            </Row>


          </Container>
    </div>
  );
}

export default App;
 