import React from 'react';
import * as fcl from '@onflow/fcl'

import { Container, Col, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SeriesMenu from './components/SeriesMenu/SeriesMenu';
import SeriesView from './components/SeriesView/SeriesView'
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import TokenMenu from './components/TokenMenu/TokenMenu';
import TokenView from './components/TokenView/TokenView';

window.fcl = fcl
fcl.config().put("challenge.handshake", "http://localhost:8701/flow/authenticate")
// fcl.config()
// .put("accessNode.api", "https://access-testnet.onflow.org")
// .put("challenge.handshake", "https://fcl-discovery.vercel.app/testnet/authn")
function App() {
  return (
    <div className="App">
      <HeaderMenu/>
      <Container fluid>
        <Row>
          <Col className="col-margin" md={{span: 12, order: 4}} lg={{span: 3, order: 1}}>
            <SeriesMenu/>
          </Col>
          <Col className="col-margin" md={{span: 8, order: 1}} lg={{span: 6, order: 2}}>
            <TokenView/>
          </Col>
          <Col className="col-margin" md={{span: 4, order: 2}} lg={{span: 3, order: 3}} >
            <TokenMenu/>
          </Col>
          <Col className="col-margin scroll-margin" md={{span: 12, order: 3}} lg={{span: 12, order: 4}} >
            <SeriesView/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
 