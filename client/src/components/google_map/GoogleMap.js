import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import PinWithInfoWindow from './components/PinWithInfoWindow';


export default class GoogleMap extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <PinWithInfoWindow/>
        </Row>
      </Container>
    )
  }
}