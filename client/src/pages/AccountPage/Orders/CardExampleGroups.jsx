import React, { Component } from "react";
import { Button, Segment, Card, Item } from "semantic-ui-react";
import OrderHeaderContent from "./OrderHeaderContent";
import MediaQuery from "react-responsive";
import OrderDescItem from "./OrderDescItem";
import OrderDescriptionItems from "./OrderDescriptionItems";

const dummyHeader = [
  {
    id: 1,
    name: "Leanne Graham",
    orderNumber: 770099333,
    totalPrice: 785.52,
    orderDate: "02/25/2200"
  },
  {
    id: 2,
    name: "Ervin Howell",
    orderNumber: 770099333,
    totalPrice: 785.52,
    orderDate: "02/25/2200"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    orderNumber: 770099333,
    totalPrice: 785.52,
    orderDate: "02/25/2200"
  }
];

class CardExampleGroups extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment>
          <Card fluid>
            <Card.Content>
              {dummyHeader &&
                dummyHeader.map(user => (
                  <div>
                    <Card.Header key={user.id}>
                      <OrderHeaderContent
                        orderNumber={user.orderNumber}
                        totalPrice={user.totalPrice}
                        orderDate={user.orderDate}
                      />
                    </Card.Header>
                    <Card.Meta>Ordered By: {user.name}</Card.Meta>

                    <OrderDescriptionItems />
                  </div>
                ))}

              {/* <Card.Description >
                  <Item.Group divided>
 
               <OrderDescriptionItems />
 
               </Item.Group>
  
                 </Card.Description> */}
            </Card.Content>

            <Card.Content extra>
              <MediaQuery maxWidth={700}>
                {matches => {
                  if (matches) {
                    return (
                      <div>
                        <Button fluid compact color="green">
                          Place Same Order
                        </Button>
                        <Button fluid compact color="violet">
                          Track Order
                        </Button>
                        <Button fluid compact color="blue">
                          Get Help With Order
                        </Button>
                        <Button fluid compact color="red">
                          Cancel Order
                        </Button>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <div className="ui four buttons">
                          <Button fluid compact color="green">
                            Place Same Order
                          </Button>
                          <Button fluid compact color="violet">
                            Track Order
                          </Button>
                          <Button fluid compact color="blue">
                            Get Help With Order
                          </Button>
                          <Button fluid compact color="red">
                            Cancel Order
                          </Button>
                        </div>
                      </div>
                    );
                  }
                }}
              </MediaQuery>
            </Card.Content>
          </Card>
        </Segment>
      </React.Fragment>
    );
  }
}

export default CardExampleGroups;
