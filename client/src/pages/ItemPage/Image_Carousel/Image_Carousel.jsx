import React, { Component } from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";
import Image_Carousel_Menu from "./Image_Carousel_Menu";
import Slider from "react-slick";
import MediaQuery from "react-responsive";

const imageArray = [
  {
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg  ",
    username: "Rocket",
    title: "Burgundy Flemming",
    subtitle: "Advertising"
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467",
    username: "Angelica",
    title: "Nigel Nigel",
    subtitle: "Sound & Vision"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    username: "Carrot",
    title: "Caspian Bellevedere",
    subtitle: "Accounting"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    username: "Chance",
    title: "Burgundy Flemming",
    subtitle: "Advertising"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
    username: "Peter",
    title: "Nigel Nigel",
    subtitle: "Sound & Vision"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    username: "Dell",
    title: "Caspian Bellevedere",
    subtitle: "Accounting"
  }
];

const relatedSmall = [
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
    price: 33.9
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467",
    price: 29.6
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    price: 23.4
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    price: 44.3
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
    price: 88.3
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    price: 33.89
  }
];

const SmallCard = ({ img, price }) => {
  return (
    <Grid.Column>
      <Card raised>
        <Image src={img} />
        <p>US ${price}</p>
      </Card>
    </Grid.Column>
  );
};

export default class Image_Carousel extends Component {
  state = {
    cards: imageArray,
    relatedProd: relatedSmall,
    settings: {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
      //  nextArrow: <SampleNextArrow />,
      //  prevArrow: <SamplePrevArrow />
    }
  };

  render() {
    let newsTemplate, pepe;
    const { cards, relatedProd } = this.state;

    return (
      <MediaQuery maxWidth={700}>
        {matches => {
          if (matches) {
            pepe = relatedProd.map((product, index) => {
              return <SmallCard img={product.image} price={product.price} />;
            });

            return (
              <Grid container columns={2}>
                {pepe}
              </Grid>
            );
          } else {
            if (cards.length > 0) {
              newsTemplate = cards.map(function(item, index) {
                return (
                  <div key={index}>
                    <div className="snip1584">
                      <figure className="ui card">
                        <Card>
                          <Image_Carousel_Menu imageLink={item.image} />

                          <Card.Content>
                            <Card.Header>{item.username}</Card.Header>
                            <Card.Meta>{item.title}</Card.Meta>
                            <Card.Description>{item.subtitle}</Card.Description>
                          </Card.Content>
                          <Card.Content extra>
                            <a>
                              <Icon name="user" />
                              {item.title}
                            </a>
                          </Card.Content>
                        </Card>
                      </figure>
                    </div>
                  </div>
                );
              });

              return (
                <div>
                  <Slider {...this.state.settings}>{newsTemplate}</Slider>
                </div>
              );
            }
          }
        }}
      </MediaQuery>
    );
  }
}
