import React, { Component } from "react";
import {
  Sidebar,
  Menu,
  Icon,
  Image,
  Segment,
  Button,
  Item
} from "semantic-ui-react";
import { Tooltip } from "antd";
import { InputNumber, Modal } from "antd";
import { Link, withRouter } from "react-router-dom";

const ButtonExampleCircularSocial = () => (
  <div>
    <Button circular color="facebook" icon="facebook" />
    <Button circular color="twitter" icon="twitter" />
    <Button circular color="linkedin" icon="linkedin" />
    <Button circular color="google plus" icon="google plus" />
  </div>
);

export default class Image_Carousel_Menu extends Component {
  state = {
    visible: false,
    loading: false,
    visibleModal: false
  };

  toggleVisibilityTrue = () => this.setState({ visible: !this.state.visible });

  toggleVisibilityFalse = () => this.setState({ visible: !this.state.visible });

  showModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  handleOk = () => {
    this.setState({ visibleModal: true });
    setTimeout(() => {
      this.setState({ visibleModal: false, visibleModal: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visibleModal: false });
  };

  render() {
    const { visible, visibleModal, loading } = this.state;
    // const { visibleModal, loading } = this.state;
    return (
      <div>
        <Sidebar.Pushable
          as={Segment}
          onMouseEnter={this.toggleVisibilityTrue}
          onMouseLeave={this.toggleVisibilityFalse}
        >
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={visible}
            style={{ paddingTop: 15 }}
            icon="labeled"
            vertical
          >
            <Tooltip placement="top" title="Wish List">
              <Menu.Item name="heart">
                <Icon name="heart outline" />
              </Menu.Item>
            </Tooltip>

            <Tooltip placement="top" title="Info">
              <Menu.Item name="info">
                <Icon name="info circle" />
              </Menu.Item>
            </Tooltip>

            <Tooltip
              placement="bottom"
              title="Quick View"
              onClick={this.showModal}
            >
              <Menu.Item name="eye">
                <Icon name="eye" />
              </Menu.Item>
            </Tooltip>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              {/* <Header as='h3'>Application Content</Header> */}
              <Image src={this.props.imageLink} size="large" />
            </Segment>

            <Segment>
              <div>
                <Modal
                  visible={visibleModal}
                  title="Title"
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  maskClosable={false}
                  zIndex={20}

                  footer={[
                    <Button key="back" onClick={this.handleCancel}>
                      Return
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      loading={loading}
                      onClick={this.handleOk}
                    >
                      Submit
                    </Button>
                  ]}
                >
                  <Item>
                    <Item.Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg" />

                    <Item.Content>
                      <Item.Header as="a">Cute Dog</Item.Header>
                      <Item.Description>
                        <Link to="#">See Full Descriptio </Link>
                        <p className="price">
                          <span className="price">
                            <span
                              className="newprice"
                              data-currency-usd="$150.00"
                              data-currency="USD"
                            >
                              $150.00
                            </span>
                          </span>
                        </p>
                      </Item.Description>
                      <Item.Extra>
                        Qty:<InputNumber
                          min={1}
                          max={10}
                          defaultValue={1}
                          style={{ marginRight: 10 }}
                        />
                        <button
                          className="button button-cart btn"
                          type="button"
                          id="button-cart"
                          data-loading-text="Loading..."
                        >
                          {" "}
                          <Icon name="shop" size="big" />
                          Add to Cart
                        </button>
                        {/* <Button animated='fade' color='red'>
                    <Button.Content visible>
                      <Icon name='shop' />
                    </Button.Content>
                    <Button.Content hidden>
                      Add
                    </Button.Content>
                  </Button> */}
                        {/* <Icon color='green' name='check' /> 121 Votes */}
                      </Item.Extra>
                      <Item.Extra>
                        <hr />
                        <span>Share this product</span>

                        <ButtonExampleCircularSocial />

                        {/* <Icon color='green' name='check' /> 121 Votes */}
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Modal>
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
