import React, { Component } from "react";
import { Popup, Button } from 'semantic-ui-react'

export default class WishListPopup extends Component {
  render() {
    return (
      <React.Fragment>
        <Popup
          trigger={<Button color="red" icon="flask" content="Wish List" />}
          content={<Button color="green" content="Confirm the launch" />}
          on="click"
          position="top right"
        />
      </React.Fragment>
    );
  }
}
