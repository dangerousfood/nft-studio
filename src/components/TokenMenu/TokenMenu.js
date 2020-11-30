import React from 'react';
import './TokenMenu.css';

import { Card, Button, Form} from 'react-bootstrap';

class TokenMenu extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    componentDidMount() {

    }

    render() {
     return (
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

            <Button className="add-attribute-button" variant="primary" type="submit">
              +
            </Button>
          </Form>
        </Card>
      </div>
     );
    }
  }
export default TokenMenu;