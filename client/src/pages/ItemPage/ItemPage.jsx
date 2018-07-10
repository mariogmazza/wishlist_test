import React, { Component } from "react";
import "antd/dist/antd.css";
import "../../assets/css/borrowcss.css";
import "../../assets/css/carrausel.css";
import { Container, Grid, Segment } from "semantic-ui-react";

import ItemProductContainer from "./Product_Images/Item_Product_Container/ItemProductContainer";
import Products_Description from "./Products_Description";
import Image_Carousel from "./Image_Carousel/Image_Carousel";
import Navbar_test from "./Test_NAVBAR/Navbar_test";

class ItemPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <ItemProductContainer />
              </Grid.Row>

              <Grid.Row>
                <Products_Description />
              </Grid.Row>

              <Grid.Row>
                <Grid.Column className="module-title" textAlign="center">
                  <h2>
                    <span>Related Products</span>
                  </h2>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <div className="app">
                  <Image_Carousel />
                </div>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
export default ItemPage;
