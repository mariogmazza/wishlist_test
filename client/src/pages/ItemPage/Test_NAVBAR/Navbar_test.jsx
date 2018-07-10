import _ from "lodash";
import React, { Component } from "react";
import { render } from "react-dom";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";
import NavBarMobile from "./Navbar_MOBILE";
import NavBarDesktop from "./Navbar_DESKTOP";
import ItemPage from "../ItemPage";

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Users", key: "users" }
];
const rightItems = [
  { as: "a", content: "Wish List", key: "wish list" },
  { as: "a", content: "Register", key: "register" }
];

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "2em" }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>

        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems}  rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

const Navbar_test = () => (
  <NavBar leftItems={leftItems} rightItems={rightItems}>
    {/* <Image src="https://react.semantic-ui.com/assets/images/wireframe/paragraph.png" /> */}
    <ItemPage />
  </NavBar>
);

export default Navbar_test;
