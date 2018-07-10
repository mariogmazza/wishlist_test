import React from "react";
import { Item, Button, Icon, Label } from "semantic-ui-react";
import MediaQuery from "react-responsive";

const OrderDescItem = ({ itemName, itemPrice, itemNumber, itemQuantity }) => {
  return (
    <React.Fragment>
      <Item>
        <br />
        <Item.Image src="placeholder.png" />
        <Item.Content>
          <Item.Header as="a">{itemName}</Item.Header>
          <Item.Description>Unit Price: ${itemPrice}</Item.Description>
          <Item.Meta>
            <span className="cinema">
              Item#: <strong>{itemNumber}</strong>{" "}
            </span>
          </Item.Meta>
          <Item.Meta>
            <span className="cinema">
              Quantity: <strong>{itemQuantity}</strong>{" "}
            </span>
          </Item.Meta>
          <Item.Description />
          <Item.Extra>
            <Label icon="file text outline" content="view item details" />
          </Item.Extra>
          <br />
          <MediaQuery maxWidth={700}>
            {matches => {
              if (matches) {
                return (
                  <div>
                    <Button primary fluid>
                      Buy Again
                      <Icon name="right chevron" />
                    </Button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <Button primary floated="right">
                      Buy Again
                      <Icon name="right chevron" />
                    </Button>
                  </div>
                );
              }
            }}
          </MediaQuery>
        </Item.Content>
      </Item>
    </React.Fragment>
  );
};

export default OrderDescItem;
