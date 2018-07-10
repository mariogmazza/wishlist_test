import React from "react";
import _ from "lodash";
import { Menu, Image, Button, Popup } from 'semantic-ui-react'
import WishListPopup from './WishListPopup'





const Navbar_DESKTOP = ({ leftItems, rightItems }) => {
  return (
    <div>
      <Menu fixed="top" inverted>
      
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>

        {_.map(leftItems, item => <Menu.Item {...item} />)}

        <Menu.Menu position="right">
          {/* {_.map(rightItems, item => <Menu.Item {...item} />)} */}

        <WishListPopup />
          
        </Menu.Menu>
        
      </Menu>
    </div>
  );
};

export default Navbar_DESKTOP;
