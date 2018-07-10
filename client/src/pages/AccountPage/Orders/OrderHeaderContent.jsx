import React, { Component } from "react";
import { Grid, Segment, Menu, Dropdown } from "semantic-ui-react";
import InvoiceMaker from "../../../components/Pdfmake";
import MediaQuery from "react-responsive";

class OrderHeaderContent extends Component {
  render() {
    const { orderNumber, totalPrice, orderDate } = this.props;

    return (
      <MediaQuery maxWidth={700}>
        {matches => {
          if (matches) {
            return (
              <div>
                <Menu>
                  <Menu.Menu position="right">
                    <Dropdown item text="Order Info">
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Segment>Order# {orderNumber}</Segment>
                          {/* <Segment>Order# 76773373</Segment> */}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Segment>Total Price: ${totalPrice}</Segment>
                          {/* <Segment>Total Price: $767.73</Segment> */}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Segment>
                            {/* <h4>Order Placed: May 12, 2018</h4> */}
                            <h4>Order Placed: {orderDate}</h4>
                          </Segment>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Menu>
                </Menu>
              </div>
            );
          } else {
            return (
              <div>
                <Grid columns="equal" celled stackable>
                  <Grid.Row>
                    <Grid.Column>
                      <Segment>Order# {orderNumber}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>Total Price: ${totalPrice}</Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <h4>Order Placed: {orderDate}</h4>
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment>
                        <a onClick={() => InvoiceMaker}>Invoice</a>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            );
          }
        }}
      </MediaQuery>
    );
  }
}

export default OrderHeaderContent;
