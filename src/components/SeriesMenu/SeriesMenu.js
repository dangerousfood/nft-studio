import React from 'react';
import './SeriesMenu.css';

import { Card, Button, Form} from 'react-bootstrap';

class SeriesMenu extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    componentDidMount() {

    }

    render() {
     return (
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
     );
    }
  }
export default SeriesMenu;