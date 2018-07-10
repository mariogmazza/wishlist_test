import React from "react";
import { Card, Icon } from "semantic-ui-react";
import Image_Carousel_Menu from "./Image_Carousel_Menu";

const Image_Carousel_Card = ({ key, imageLink, username, title, subtitle }) => {
  return (
    <div key={key}>
      <Card>
        <Image_Carousel_Menu imageLink={imageLink} />
        <Card.Content>
          <Card.Header>{username}</Card.Header>
          <Card.Meta>{title}</Card.Meta>
          <Card.Description>{subtitle}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {title}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Image_Carousel_Card;
