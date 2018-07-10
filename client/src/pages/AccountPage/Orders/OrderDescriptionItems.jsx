import React from "react";
import { Item, Card } from "semantic-ui-react";
import OrderDescItem from "./OrderDescItem";

const dummyProducts = [
  {
    id: 1,
    itemName: "BMW Brake Disks",
    itemPrice: 207.03,
    itemNumber: 276728363,
    itemQuantity: 2
  },
  {
    id: 2,
    itemName: "BMW Brake Disks",
    itemPrice: 207.03,
    itemNumber: 276728363,
    itemQuantity: 2
  },
  {
    id: 3,
    itemName: "BMW Brake Disks",
    itemPrice: 207.03,
    itemNumber: 276728363,
    itemQuantity: 2
  }
];

const OrderDescriptionItems = () => {
  return (
    <Item.Group divided>
      {dummyProducts &&
        dummyProducts.map(product => (
          <Card.Description key={product.id}>
            <Item.Group divided>
              <OrderDescItem
                itemName={product.itemName}
                itemNumber={product.itemNumber}
                itemPrice={product.itemPrice}
                itemQuantity={product.itemQuantity}
              />
            </Item.Group>
          </Card.Description>
        ))}
    </Item.Group>
  );
};

export default OrderDescriptionItems;
