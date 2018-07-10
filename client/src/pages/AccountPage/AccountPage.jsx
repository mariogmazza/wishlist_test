import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "../../components/withAuthorization";
import { db } from "../../firebase";
import MediaQuery from "react-responsive";

import SignOutButton from "../../firebase/SignOut";
import firebase from "firebase";
// import InvoiceMaker from '../../components/Pdfmake'
import {
  Button,
  Container,
  Dropdown,
  Icon,
  Divider,
  Grid,
  Item,
  Statistic,
  Image,
  Header as SUIHeader,
  Menu,
  Segment,
  Breadcrumb,
  Card,
  Label
} from "semantic-ui-react";
import {
  Card as CardAntd,
  Radio,
  Input,
  Tooltip,
  Modal,
  Form,
  Select,
  Steps,
  Button as AntdButton,
  Timeline,
  Icon as AntIcons,
  Menu as AntMenu,
  Tabs
} from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import CardExampleGroups from "./Orders/CardExampleGroups";
import ManageVehicles from "./ManageVehicles";
import { equal } from "assert";

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const Step = Steps.Step;
const TabPane = Tabs.TabPane;

const SubMenu = AntMenu.SubMenu;
const MenuItemGroup = AntMenu.ItemGroup;

// class NavBarGarageButtons extends React.Component {
//   state = {
//     modal2Visible: false
//   };
//   setModal1Visible(modal1Visible) {
//     this.setState({ modal1Visible });
//   }
//   setModal2Visible(modal2Visible) {
//     this.setState({ modal2Visible });
//   }
//   render() {
//     return (
//       <div>
//         <Button.Group fluid>
//           <Button
//             secondary
//             className="iconCartBtn"
//             id="iconCartBtnLeft"
//             onClick={() => this.setModal2Visible(true)}
//           >
//             + Add Vehicle
//           </Button>
//           <Button.Or />
//           <Button secondary className="iconCartBtn" id="iconCartBtnRight">
//             Clear History
//           </Button>
//         </Button.Group>
//         <Modal
//           // title="Vertically centered modal dialog"
//           wrapClassName="vertical-center-modal"
//           visible={this.state.modal2Visible}
//           onOk={() => this.setModal2Visible(false)}
//           onCancel={() => this.setModal2Visible(false)}
//         >
//           {/* <p>some contents...</p> */}
//         </Modal>
//       </div>
//     );
//   }
// }

const NavBarGarageContent = () => (
  // <div style={{ minWidth: 500 }}>
  <React.Fragment>
    <Timeline>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column>
            <Timeline.Item>GMC Sierra 2017 2500HD</Timeline.Item>
          </Grid.Column>
          <Grid.Column>
            <AntdButton>Save</AntdButton>{" "}
            <AntdButton type="primary">Browse Catalog</AntdButton>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Timeline.Item>GMC Sierra 2017 2500HD</Timeline.Item>
          </Grid.Column>
          <Grid.Column>
            <AntdButton>Save</AntdButton>{" "}
            <AntdButton type="primary">Browse Catalog</AntdButton>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Timeline.Item
              dot={
                <AntIcons type="check-circle-o" style={{ fontSize: "16px" }} />
              }
              color="red"
            >
              <span style={{ fontWeight: "bold" }}>
                Chevrolet Silverado 2016
              </span>{" "}
            </Timeline.Item>
          </Grid.Column>

          <Grid.Column>
            <AntdButton>Save</AntdButton>{" "}
            <AntdButton type="primary">Browse Catalog</AntdButton>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Timeline.Item>GMC Sierra 2017 2500HD</Timeline.Item>
          </Grid.Column>
          <Grid.Column>
            <AntdButton>Save</AntdButton>{" "}
            <AntdButton type="primary">Browse Catalog</AntdButton>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Timeline>

    {/* <Item>
      <Item.Content content={<NavBarGarageButtons />} />
    </Item> */}
  </React.Fragment>
);

const CreateBillingAddressForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const prefixSelector = getFieldDecorator("prefix", {
        initialValue: "1"
      })(
        <Select style={{ width: 70 }}>
          <Option value="1">+1</Option>
        </Select>
      );
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      };
      return (
        <Modal
          visible={visible}
          keyboard={true}
          title="Add Billing Address"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
          okText="ADD"
          cancelText="CANCEL"
          // bodyStyle={{backgroundColor:'red'}}
        >
          <Form layout="vertical">
            <FormItem {...formItemLayout} label="First" hasFeedback>
              {getFieldDecorator("firstName", {
                rules: [
                  { required: true, message: "Please input your first name!" }
                ]
              })(<Input type="string" placeholder="First Name" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Last" hasFeedback>
              {getFieldDecorator("lastName", {
                rules: [
                  { required: true, message: "Please input your last name!" }
                ]
              })(<Input type="string" placeholder="Last Name" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Address" hasFeedback>
              {getFieldDecorator("address", {
                rules: [
                  { required: true, message: "Please input your Address!" }
                ]
              })(<Input type="string" placeholder="Address" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="City" hasFeedback>
              {getFieldDecorator("city", {
                rules: [{ required: true, message: "Please enter the city!" }]
              })(<Input type="string" placeholder="City" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Select State" hasFeedback>
              {getFieldDecorator("Select", {
                rules: [
                  { required: true, message: "Please select your State!" }
                ]
              })(
                <Select placeholder="Please select a country">
                  <Option value="">Select State</Option>
                  <Option value="AK">Alaska</Option>
                  <Option value="AL">Alabama</Option>
                  <Option value="AR">Arkansas</Option>
                  <Option value="AZ">Arizona</Option>
                  <Option value="CA">California</Option>
                  <Option value="CO">Colorado</Option>
                  <Option value="CT">Connecticut</Option>
                  <Option value="DC">District of Columbia</Option>
                  <Option value="DE">Delaware</Option>
                  <Option value="FL">Florida</Option>
                  <Option value="GA">Georgia</Option>
                  <Option value="HI">Hawaii</Option>
                  <Option value="IA">Iowa</Option>
                  <Option value="ID">Idaho</Option>
                  <Option value="IL">Illinois</Option>
                  <Option value="IN">Indiana</Option>
                  <Option value="KS">Kansas</Option>
                  <Option value="KY">Kentucky</Option>
                  <Option value="LA">Louisiana</Option>
                  <Option value="MA">Massachusetts</Option>
                  <Option value="MD">Maryland</Option>
                  <Option value="ME">Maine</Option>
                  <Option value="MI">Michigan</Option>
                  <Option value="MN">Minnesota</Option>
                  <Option value="MO">Missouri</Option>
                  <Option value="MS">Mississippi</Option>
                  <Option value="MT">Montana</Option>
                  <Option value="NC">North Carolina</Option>
                  <Option value="ND">North Dakota</Option>
                  <Option value="NE">Nebraska</Option>
                  <Option value="NH">New Hampshire</Option>
                  <Option value="NJ">New Jersey</Option>
                  <Option value="NM">New Mexico</Option>
                  <Option value="NV">Nevada</Option>
                  <Option value="NY">New York</Option>
                  <Option value="OH">Ohio</Option>
                  <Option value="OK">Oklahoma</Option>
                  <Option value="OR">Oregon</Option>
                  <Option value="PA">Pennsylvania</Option>
                  <Option value="PR">Puerto Rico</Option>
                  <Option value="RI">Rhode Island</Option>
                  <Option value="SC">South Carolina</Option>
                  <Option value="SD">South Dakota</Option>
                  <Option value="TN">Tennessee</Option>
                  <Option value="TX">Texas</Option>
                  <Option value="UT">Utah</Option>
                  <Option value="VA">Virginia</Option>
                  <Option value="VT">Vermont</Option>
                  <Option value="WA">Washington</Option>
                  <Option value="WI">Wisconsin</Option>
                  <Option value="WV">West Virginia</Option>
                  <Option value="WY">Wyoming</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Zip Code" {...formItemLayout}>
              {getFieldDecorator("phone", {
                rules: [
                  { required: true, message: "Please input your phone number!" }
                ]
              })(<Input placeholder="Enter Zip Code" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Phone Number">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: false,
                    message: "Please input your phone number!"
                  }
                ]
              })(
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class CreateBillingAddressModal extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    console.log(" tried to fire modal");
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        <Button type="primary" floated="right" onClick={this.showModal}>
          Add Billing Address
        </Button>
        <CreateBillingAddressForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const EditBillingAddressForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const prefixSelector = getFieldDecorator("prefix", {
        initialValue: "1"
      })(
        <Select style={{ width: 70 }}>
          <Option value="1">+1</Option>
        </Select>
      );
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      };
      return (
        <Modal
          visible={visible}
          title="Edit Billing Address"
          onCancel={onCancel}
          onOk={onCreate}
          okText="EDIT"
          cancelText="CANCEL"
        >
          <Form layout="vertical">
            <FormItem {...formItemLayout} label="First" hasFeedback>
              {getFieldDecorator("firstName", {
                rules: [
                  { required: true, message: "Please input your first name!" }
                ]
              })(<Input type="string" placeholder="First Name" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Last" hasFeedback>
              {getFieldDecorator("lastName", {
                rules: [
                  { required: true, message: "Please input your last name!" }
                ]
              })(<Input type="string" placeholder="Last Name" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Address" hasFeedback>
              {getFieldDecorator("address", {
                rules: [
                  { required: true, message: "Please input your Address!" }
                ]
              })(<Input type="string" placeholder="Address" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="City" hasFeedback>
              {getFieldDecorator("city", {
                rules: [{ required: true, message: "Please enter the city!" }]
              })(<Input type="string" placeholder="City" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Select State" hasFeedback>
              {getFieldDecorator("Select", {
                rules: [
                  { required: true, message: "Please select your State!" }
                ]
              })(
                <Select placeholder="Please select a country">
                  <Option value="">Select State</Option>
                  <Option value="AK">Alaska</Option>
                  <Option value="AL">Alabama</Option>
                  <Option value="AR">Arkansas</Option>
                  <Option value="AZ">Arizona</Option>
                  <Option value="CA">California</Option>
                  <Option value="CO">Colorado</Option>
                  <Option value="CT">Connecticut</Option>
                  <Option value="DC">District of Columbia</Option>
                  <Option value="DE">Delaware</Option>
                  <Option value="FL">Florida</Option>
                  <Option value="GA">Georgia</Option>
                  <Option value="HI">Hawaii</Option>
                  <Option value="IA">Iowa</Option>
                  <Option value="ID">Idaho</Option>
                  <Option value="IL">Illinois</Option>
                  <Option value="IN">Indiana</Option>
                  <Option value="KS">Kansas</Option>
                  <Option value="KY">Kentucky</Option>
                  <Option value="LA">Louisiana</Option>
                  <Option value="MA">Massachusetts</Option>
                  <Option value="MD">Maryland</Option>
                  <Option value="ME">Maine</Option>
                  <Option value="MI">Michigan</Option>
                  <Option value="MN">Minnesota</Option>
                  <Option value="MO">Missouri</Option>
                  <Option value="MS">Mississippi</Option>
                  <Option value="MT">Montana</Option>
                  <Option value="NC">North Carolina</Option>
                  <Option value="ND">North Dakota</Option>
                  <Option value="NE">Nebraska</Option>
                  <Option value="NH">New Hampshire</Option>
                  <Option value="NJ">New Jersey</Option>
                  <Option value="NM">New Mexico</Option>
                  <Option value="NV">Nevada</Option>
                  <Option value="NY">New York</Option>
                  <Option value="OH">Ohio</Option>
                  <Option value="OK">Oklahoma</Option>
                  <Option value="OR">Oregon</Option>
                  <Option value="PA">Pennsylvania</Option>
                  <Option value="PR">Puerto Rico</Option>
                  <Option value="RI">Rhode Island</Option>
                  <Option value="SC">South Carolina</Option>
                  <Option value="SD">South Dakota</Option>
                  <Option value="TN">Tennessee</Option>
                  <Option value="TX">Texas</Option>
                  <Option value="UT">Utah</Option>
                  <Option value="VA">Virginia</Option>
                  <Option value="VT">Vermont</Option>
                  <Option value="WA">Washington</Option>
                  <Option value="WI">Wisconsin</Option>
                  <Option value="WV">West Virginia</Option>
                  <Option value="WY">Wyoming</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Zip Code" {...formItemLayout}>
              {getFieldDecorator("phone", {
                rules: [
                  { required: true, message: "Please input your phone number!" }
                ]
              })(<Input placeholder="Enter Zip Code" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Phone Number">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: false,
                    message: "Please input your phone number!"
                  }
                ]
              })(
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class ChangeBillingAddressModalForm extends React.Component {
  state = {
    visible: false
  };
  showModal = address => {
    console.log("change this billing", address);
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    console.log(" tried to fire modal edit modal");
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        {/* <Button type="primary" floated='right' onClick={this.showModal}>Edit Address</Button> */}
        <EditBillingAddressForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const CreateAddressForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const prefixSelector = getFieldDecorator("prefix", {
        initialValue: "1"
      })(
        <Select style={{ width: 70 }}>
          <Option value="1">+1</Option>
        </Select>
      );
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      };
      return (
        <Modal
          visible={visible}
          keyboard={true}
          title="Add Shipping Address"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
          okText="ADD"
          cancelText="CANCEL"
          // bodyStyle={{backgroundColor:'red'}}
        >
          <Form layout="vertical">
            <FormItem {...formItemLayout} label="First" hasFeedback>
              {getFieldDecorator("firstName", {
                rules: [
                  { required: true, message: "Please input your first name!" }
                ]
              })(<Input type="string" placeholder="First Name" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Last" hasFeedback>
              {getFieldDecorator("lastName", {
                rules: [
                  { required: true, message: "Please input your last name!" }
                ]
              })(<Input type="string" placeholder="Last Name" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Address" hasFeedback>
              {getFieldDecorator("address", {
                rules: [
                  { required: true, message: "Please input your Address!" }
                ]
              })(<Input type="string" placeholder="Address" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="City" hasFeedback>
              {getFieldDecorator("city", {
                rules: [{ required: true, message: "Please enter the city!" }]
              })(<Input type="string" placeholder="City" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Select State" hasFeedback>
              {getFieldDecorator("Select", {
                rules: [
                  { required: true, message: "Please select your State!" }
                ]
              })(
                <Select placeholder="Please select a country">
                  <Option value="">Select State</Option>
                  <Option value="AK">Alaska</Option>
                  <Option value="AL">Alabama</Option>
                  <Option value="AR">Arkansas</Option>
                  <Option value="AZ">Arizona</Option>
                  <Option value="CA">California</Option>
                  <Option value="CO">Colorado</Option>
                  <Option value="CT">Connecticut</Option>
                  <Option value="DC">District of Columbia</Option>
                  <Option value="DE">Delaware</Option>
                  <Option value="FL">Florida</Option>
                  <Option value="GA">Georgia</Option>
                  <Option value="HI">Hawaii</Option>
                  <Option value="IA">Iowa</Option>
                  <Option value="ID">Idaho</Option>
                  <Option value="IL">Illinois</Option>
                  <Option value="IN">Indiana</Option>
                  <Option value="KS">Kansas</Option>
                  <Option value="KY">Kentucky</Option>
                  <Option value="LA">Louisiana</Option>
                  <Option value="MA">Massachusetts</Option>
                  <Option value="MD">Maryland</Option>
                  <Option value="ME">Maine</Option>
                  <Option value="MI">Michigan</Option>
                  <Option value="MN">Minnesota</Option>
                  <Option value="MO">Missouri</Option>
                  <Option value="MS">Mississippi</Option>
                  <Option value="MT">Montana</Option>
                  <Option value="NC">North Carolina</Option>
                  <Option value="ND">North Dakota</Option>
                  <Option value="NE">Nebraska</Option>
                  <Option value="NH">New Hampshire</Option>
                  <Option value="NJ">New Jersey</Option>
                  <Option value="NM">New Mexico</Option>
                  <Option value="NV">Nevada</Option>
                  <Option value="NY">New York</Option>
                  <Option value="OH">Ohio</Option>
                  <Option value="OK">Oklahoma</Option>
                  <Option value="OR">Oregon</Option>
                  <Option value="PA">Pennsylvania</Option>
                  <Option value="PR">Puerto Rico</Option>
                  <Option value="RI">Rhode Island</Option>
                  <Option value="SC">South Carolina</Option>
                  <Option value="SD">South Dakota</Option>
                  <Option value="TN">Tennessee</Option>
                  <Option value="TX">Texas</Option>
                  <Option value="UT">Utah</Option>
                  <Option value="VA">Virginia</Option>
                  <Option value="VT">Vermont</Option>
                  <Option value="WA">Washington</Option>
                  <Option value="WI">Wisconsin</Option>
                  <Option value="WV">West Virginia</Option>
                  <Option value="WY">Wyoming</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Zip Code" {...formItemLayout}>
              {getFieldDecorator("phone", {
                rules: [
                  { required: true, message: "Please input your phone number!" }
                ]
              })(<Input placeholder="Enter Zip Code" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Phone Number">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: false,
                    message: "Please input your phone number!"
                  }
                ]
              })(
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class CreateAddressModal extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    console.log(" tried to fire modal");
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        <Button type="primary" floated="right" onClick={this.showModal}>
          Add Shipping Address
        </Button>
        <CreateAddressForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const EditAddressForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const prefixSelector = getFieldDecorator("prefix", {
        initialValue: "1"
      })(
        <Select style={{ width: 70 }}>
          <Option value="1">+1</Option>
        </Select>
      );
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      };
      return (
        <Modal
          visible={visible}
          title="Edit Shipping Address"
          onCancel={onCancel}
          onOk={onCreate}
          okText="EDIT"
          cancelText="CANCEL"
        >
          <Form layout="vertical">
            <FormItem {...formItemLayout} label="First" hasFeedback>
              {getFieldDecorator("firstName", {
                rules: [
                  { required: true, message: "Please input your first name!" }
                ]
              })(<Input type="string" placeholder="First Name" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Last" hasFeedback>
              {getFieldDecorator("lastName", {
                rules: [
                  { required: true, message: "Please input your last name!" }
                ]
              })(<Input type="string" placeholder="Last Name" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Address" hasFeedback>
              {getFieldDecorator("address", {
                rules: [
                  { required: true, message: "Please input your Address!" }
                ]
              })(<Input type="string" placeholder="Address" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="City" hasFeedback>
              {getFieldDecorator("city", {
                rules: [{ required: true, message: "Please enter the city!" }]
              })(<Input type="string" placeholder="City" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Select State" hasFeedback>
              {getFieldDecorator("Select", {
                rules: [
                  { required: true, message: "Please select your State!" }
                ]
              })(
                <Select placeholder="Please select a country">
                  <Option value="">Select State</Option>
                  <Option value="AK">Alaska</Option>
                  <Option value="AL">Alabama</Option>
                  <Option value="AR">Arkansas</Option>
                  <Option value="AZ">Arizona</Option>
                  <Option value="CA">California</Option>
                  <Option value="CO">Colorado</Option>
                  <Option value="CT">Connecticut</Option>
                  <Option value="DC">District of Columbia</Option>
                  <Option value="DE">Delaware</Option>
                  <Option value="FL">Florida</Option>
                  <Option value="GA">Georgia</Option>
                  <Option value="HI">Hawaii</Option>
                  <Option value="IA">Iowa</Option>
                  <Option value="ID">Idaho</Option>
                  <Option value="IL">Illinois</Option>
                  <Option value="IN">Indiana</Option>
                  <Option value="KS">Kansas</Option>
                  <Option value="KY">Kentucky</Option>
                  <Option value="LA">Louisiana</Option>
                  <Option value="MA">Massachusetts</Option>
                  <Option value="MD">Maryland</Option>
                  <Option value="ME">Maine</Option>
                  <Option value="MI">Michigan</Option>
                  <Option value="MN">Minnesota</Option>
                  <Option value="MO">Missouri</Option>
                  <Option value="MS">Mississippi</Option>
                  <Option value="MT">Montana</Option>
                  <Option value="NC">North Carolina</Option>
                  <Option value="ND">North Dakota</Option>
                  <Option value="NE">Nebraska</Option>
                  <Option value="NH">New Hampshire</Option>
                  <Option value="NJ">New Jersey</Option>
                  <Option value="NM">New Mexico</Option>
                  <Option value="NV">Nevada</Option>
                  <Option value="NY">New York</Option>
                  <Option value="OH">Ohio</Option>
                  <Option value="OK">Oklahoma</Option>
                  <Option value="OR">Oregon</Option>
                  <Option value="PA">Pennsylvania</Option>
                  <Option value="PR">Puerto Rico</Option>
                  <Option value="RI">Rhode Island</Option>
                  <Option value="SC">South Carolina</Option>
                  <Option value="SD">South Dakota</Option>
                  <Option value="TN">Tennessee</Option>
                  <Option value="TX">Texas</Option>
                  <Option value="UT">Utah</Option>
                  <Option value="VA">Virginia</Option>
                  <Option value="VT">Vermont</Option>
                  <Option value="WA">Washington</Option>
                  <Option value="WI">Wisconsin</Option>
                  <Option value="WV">West Virginia</Option>
                  <Option value="WY">Wyoming</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Zip Code" {...formItemLayout}>
              {getFieldDecorator("phone", {
                rules: [
                  { required: true, message: "Please input your phone number!" }
                ]
              })(<Input placeholder="Enter Zip Code" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="Phone Number">
              {getFieldDecorator("phone", {
                rules: [
                  {
                    required: false,
                    message: "Please input your phone number!"
                  }
                ]
              })(
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class ChangeAddressModalForm extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    console.log(" tried to fire modal edit modal");
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        {/* <Button type="primary" floated='right' onClick={this.showModal}>Edit Address</Button> */}
        <EditAddressForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

class OrderMenu extends React.Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <AntMenu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <AntMenu.Item key="mail">
          <Icon type="mail" />Navigation One
        </AntMenu.Item>
        <AntMenu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </AntMenu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="setting" />Navigation Three - Submenu
            </span>
          }
        >
          <MenuItemGroup title="Item 1">
            <AntMenu.Item key="setting:1">Option 1</AntMenu.Item>
            <AntMenu.Item key="setting:2">Option 2</AntMenu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <AntMenu.Item key="setting:3">Option 3</AntMenu.Item>
            <AntMenu.Item key="setting:4">Option 4</AntMenu.Item>
          </MenuItemGroup>
        </SubMenu>
        <AntMenu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </AntMenu.Item>
      </AntMenu>
    );
  }
}

const addressArray = [
  {
    name: "Jose Guzman",
    street: "2514 hikers court",
    city: "Kissimmee",
    state: "Florida",
    zip: "34743"
  },
  {
    name: "Mex Mel",
    street: "123 Owl tow",
    city: "Kissimmee",
    state: "Florida",
    zip: "07865"
  }
];

const billingAddressArray = [
  {
    name: "Tim Dow",
    street: "2514 hikers court",
    city: "Kissimmee",
    state: "Florida",
    zip: "34743"
  },
  {
    name: "Hex Ells",
    street: "123 Owl tow",
    city: "Kissimmee",
    state: "Florida",
    zip: "07865"
  }
];

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      activeItemEditOrder: "edit order",
      activeItemEditReturns: "exchange items",
      activeItemEditComplications: "damaged package",
      addressValue: 1,
      addressBillingValue: 1,
      choosenAddress: []
    };
    this.child = React.createRef();
    this.childbill = React.createRef();
    this.changeAddress = this.changeAddress.bind(this);
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
    const { onSetUsers } = this.props;
  }

  changeAddress(address) {
    console.log("i was clicked", address);
    this.child.current.showModal();
    console.log("i was clicked", address);
  }

  changeBillingAddress(address) {
    this.childbill.current.showModal(address);
    console.log("i was clicked", address);
  }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItemEditOrder: name });
  handleItemClickReturns = (e, { name }) =>
    this.setState({ activeItemEditReturns: name });
  handleItemClickComplications = (e, { name }) =>
    this.setState({ activeItemEditComplications: name });
  onChange = e => {
    this.setState({ addressValue: e.target.value });
  };
  onBillingChange = e => {
    this.setState({ addressBillingValue: e.target.value });
  };

  addressRadios() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <RadioGroup onChange={this.onChange} value={this.state.addressValue}>
        <div>
          {addressArray.map((address, index) => (
            <div key={index}>
              <Radio style={radioStyle} value={index + 1}>
                <span style={{ color: "#3b90f7" }}>
                  {this.state.addressValue !== index + 1 ? null : "Default"}{" "}
                </span>
              </Radio>
              <h4>{address.name}</h4>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
              <Button
                onClick={() => {
                  this.changeAddress(address);
                }}
              >
                edit
              </Button>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  }

  addressBillingRadios() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <RadioGroup
        onChange={this.onBillingChange}
        value={this.state.addressBillingValue}
      >
        <div>
          {billingAddressArray.map((address, index) => (
            <div key={index}>
              <Radio style={radioStyle} value={index + 1}>
                <span style={{ color: "#3b90f7" }}>
                  {this.state.addressBillingValue !== index + 1
                    ? null
                    : "Default"}{" "}
                </span>
              </Radio>
              <h4>{address.name}</h4>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
              <Button
                onClick={() => {
                  this.changeBillingAddress(address);
                }}
              >
                edit
              </Button>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  }

  addressBillingRadios() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <RadioGroup
        onChange={this.onBillingChange}
        value={this.state.addressBillingValue}
      >
        <div>
          {billingAddressArray.map((address, index) => (
            <div key={index}>
              <Radio style={radioStyle} value={index + 1}>
                <span style={{ color: "#3b90f7" }}>
                  {this.state.addressBillingValue !== index + 1
                    ? null
                    : "Default"}{" "}
                </span>
              </Radio>
              <h4>{address.name}</h4>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
              <Button
                onClick={() => {
                  this.changeBillingAddress(address);
                }}
              >
                edit
              </Button>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  }

  switchSavedBrowsed() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <RadioGroup
        onChange={this.onBillingChange}
        value={this.state.addressBillingValue}
      >
        <div>
          {billingAddressArray.map((address, index) => (
            <div key={index}>
              <MediaQuery maxWidth={700}>
                {matches => {
                  if (matches) {
                    return (
                      <div>
                        <Grid columns={2} container stackable>
                          {/* <Radio style={radioStyle} value={index + 1}> */}

                          <Grid.Column>
                            <Grid columns={2}>
                              <Grid.Column>
                                <Radio value={index + 1}>
                                  <p>
                                    {this.state.addressBillingValue !==
                                    index + 1
                                      ? null
                                      : "Default"}{" "}
                                    {address.name}
                                    <br />
                                    {address.street}
                                    <br />
                                    {address.state}
                                  </p>
                                </Radio>
                              </Grid.Column>

                              <Grid.Column>
                                <Grid columns={2}>
                                  <Grid.Column>{"      "}</Grid.Column>
                                  <Grid.Column>
                                    <a style={{}} className="redex">
                                      <span className="ex"> ✘</span>
                                    </a>
                                  </Grid.Column>
                                </Grid>
                              </Grid.Column>
                            </Grid>
                          </Grid.Column>

                          <Grid.Column>
                            <Button
                              // floated="right"
                              fluid
                              onClick={() => {
                                this.changeBillingAddress(address);
                              }}
                            >
                              Browse
                            </Button>
                          </Grid.Column>
                        </Grid>
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <Grid>
                          <Grid.Column
                            floated="left"
                            stackable="true"
                            columns={2}
                            width={8}
                          >
                            <Radio style={radioStyle} value={index + 1}>
                              <span>
                                {this.state.addressBillingValue !== index + 1
                                  ? null
                                  : "Default"}{" "}
                                {address.name} {address.street} {address.state}
                              </span>
                            </Radio>
                          </Grid.Column>

                          <Grid.Column floated="right" width={4}>
                            <Button
                              floated="right"
                              onClick={() => {
                                this.changeBillingAddress(address);
                              }}
                            >
                              Browse
                            </Button>
                          </Grid.Column>
                          <Grid.Column floated="right" width={1}>
                            <button style={{}} className="redex" type="button">
                              <span className="ex"> ✘</span>
                            </button>
                          </Grid.Column>
                        </Grid>
                      </div>
                    );
                  }
                }}
              </MediaQuery>
            </div>
          ))}
        </div>
      </RadioGroup>
    );
  }

  callback(key) {
    console.log(key);
  }

  render() {
    const { authUser } = this.props;
    const {
      activeItemEditOrder,
      activeItemEditReturns,
      activeItemEditComplications
    } = this.state;

    return (
      <div>
        <Container>
          <Segment clearing>
            <Breadcrumb>
              <Breadcrumb.Section link>Home</Breadcrumb.Section>
              <Breadcrumb.Divider icon="right angle" />
              <Breadcrumb.Section active>Account</Breadcrumb.Section>
            </Breadcrumb>
            <SignOutButton floated="right" />
          </Segment>

          {/* <Segment clearing style={{ marginTop: 20 }} >
            <SUIHeader as='h1' floated='left'> 
            <Image src='generic-user.png' style={{ marginRight: 30 }} avatar />
              {authUser.displayName}</SUIHeader>
            <Statistic floated='right' >
              <Statistic.Group size='mini' >
                <Statistic >
                  <Statistic.Value>2</Statistic.Value>
                  <Statistic.Label>Pending Orders</Statistic.Label>
                </Statistic>

                <Statistic >
                  <Statistic.Value>
                    <Icon name='heart' />
                    2
      </Statistic.Value>
                  <Statistic.Label>Wishlist</Statistic.Label>
                </Statistic>

                <Statistic >
                  <Statistic.Value>
                    <Icon name='shop' />5</Statistic.Value>
                  <Statistic.Label>Shopping Cart</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Statistic>
          </Segment> */}

          {/* <Header attached='top' as='h4' inverted>Header</Header>
            <Segment attached='bottom'>Panel content</Segment>
           */}

          <Card fluid padded="true">
            <SUIHeader attached="top" as="h4" inverted>
              Orders
            </SUIHeader>
            <Segment secondary clearing padded>
              <Card.Content>
                <Card.Description>
                  <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Orders" key="1">
                      <Segment clearing padded secondary>
                        <CardExampleGroups />
                        <CardExampleGroups />
                        <CardExampleGroups />
                      </Segment>
                    </TabPane>
                    <TabPane tab="Pending Orders" key="2">
                      Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Cancelled Orders" key="3">
                      Content of Tab Pane 3
                    </TabPane>
                  </Tabs>
                </Card.Description>
              </Card.Content>
            </Segment>
          </Card>

          <Card fluid>
            <SUIHeader attached="top" as="h4" inverted>
              Help Center
            </SUIHeader>
            {/* <Card.Header> Help Center</Card.Header>  */}
            {/* <SUIHeader as='h2'>Help Center</SUIHeader>  */}

            <Card.Description>
              <Segment clearing padded secondary style={{ marginTop: "3em" }}>
                <Segment>
                  <Grid columns={3} stackable>
                    <Grid.Column width={3}>
                      <SUIHeader as="h2">Orders</SUIHeader>
                    </Grid.Column>

                    <Grid.Column width={5}>
                      <Menu pointing secondary vertical>
                        <Menu.Item
                          name="edit order"
                          active={activeItemEditOrder === "edit order"}
                          onClick={this.handleItemClick}
                        />
                        <Menu.Item
                          name="cancel order"
                          active={activeItemEditOrder === "cancel order"}
                          onClick={this.handleItemClick}
                        />
                        <Menu.Item
                          name="change address"
                          active={activeItemEditOrder === "change address"}
                          onClick={this.handleItemClick}
                        />

                        <Menu.Item
                          name="Delivery Signature Release"
                          active={
                            activeItemEditOrder === "Delivery Signature Release"
                          }
                          onClick={this.handleItemClick}
                        />
                      </Menu>
                    </Grid.Column>

                    <Grid.Column width={8}>
                      {activeItemEditOrder != "edit order" ? null : (
                        <Card fluid color="blue" style={{ minHeight: 150 }}>
                          <Card.Content>
                            <Card.Header>Edit Order</Card.Header>
                            <Card.Description>
                              <p>
                                Nullam quis risus eget{" "}
                                <a href="#">urna mollis ornare</a> vel eu leo.
                                Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus.
                                Nullam id dolor id nibh ultricies vehicula.
                              </p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      )}
                      {activeItemEditOrder != "cancel order" ? null : (
                        <Card fluid color="blue" style={{ minHeight: 150 }}>
                          <Card.Content>
                            <Card.Header>Cancel Order</Card.Header>
                            <Card.Description>
                              <p>
                                Nullam quis risus eget{" "}
                                <a href="#">urna mollis ornare</a> vel eu leo.
                                Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus.
                                Nullam id dolor id nibh ultricies vehicula.
                              </p>
                              <Button type="submit">Submit A Request</Button>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      )}
                      {activeItemEditOrder != "change address" ? null : (
                        <Card fluid color="blue" style={{ minHeight: 150 }}>
                          <Card.Content>
                            <Card.Description>
                              <p>
                                Nullam quis risus eget{" "}
                                <a href="#">urna mollis ornare</a> vel eu leo.
                                Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus.
                                Nullam id dolor id nibh ultricies vehicula.
                              </p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      )}
                      {activeItemEditOrder !=
                      "Delivery Signature Release" ? null : (
                        <Grid.Column color="blue" centered="true">
                          <div style={{ backgroundColor: "white" }}>
                            <p>
                              Nullam quis risus eget{" "}
                              <a href="#">urna mollis ornare</a> vel eu leo. Cum
                              sociis natoque penatibus et magnis dis parturient
                              montes, nascetur ridiculus mus. Nullam id dolor id
                              nibh ultricies vehicula.
                            </p>
                            <p>
                              <small>
                                This line of text is meant to be treated as fine
                                print.
                              </small>
                            </p>
                            <p>
                              The following snippet of text is{" "}
                              <strong>rendered as bold text</strong>.
                            </p>
                            <p>
                              The following snippet of text is{" "}
                              <em>rendered as italicized text</em>.
                            </p>
                            <p>
                              An abbreviation of the word attribute is{" "}
                              <abbr title="attribute">attr</abbr>.
                            </p>
                          </div>
                        </Grid.Column>
                      )}
                    </Grid.Column>
                  </Grid>
                </Segment>
                <SUIHeader as="h2" dividing />

                <Segment>
                  <Grid columns={3} stackable>
                    <Grid.Column width={3}>
                      <SUIHeader as="h2">Returns</SUIHeader>
                    </Grid.Column>

                    <Grid.Column width={5}>
                      <Menu pointing secondary vertical>
                        <Menu.Item
                          name="exchange items"
                          active={activeItemEditReturns === "exchange items"}
                          onClick={this.handleItemClickReturns}
                        />
                        <Menu.Item
                          name="return items"
                          active={activeItemEditReturns === "return items"}
                          onClick={this.handleItemClickReturns}
                        />
                        <Menu.Item
                          name="warrenty request"
                          active={activeItemEditReturns === "warrenty request"}
                          onClick={this.handleItemClickReturns}
                        />

                        <Menu.Item
                          name="Status of Return"
                          active={activeItemEditReturns === "Status of Return"}
                          onClick={this.handleItemClickReturns}
                        />
                      </Menu>
                    </Grid.Column>

                    <Grid.Column width={8}>
                      {activeItemEditReturns != "exchange items" ? null : (
                        <Card fluid color="blue" style={{ minHeight: 150 }}>
                          <Card.Content>
                            <Card.Description>
                              <Steps direction="vertical">
                                <Step
                                  title="Submit A Request"
                                  description={
                                    <Icon name="file text outline" size="big" />
                                  }
                                />
                                <Step
                                  title="Ship It Back"
                                  description={<Icon name="truck" size="big" />}
                                />
                                <Step
                                  title="Receive Refund or Replacement"
                                  description={<Icon name="money" size="big" />}
                                />
                              </Steps>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      )}
                      {activeItemEditReturns != "return items" ? null : (
                        <h2>Hey mann</h2>
                      )}
                      {activeItemEditReturns != "warrenty request" ? null : (
                        <h2>Hey mannn</h2>
                      )}
                      {activeItemEditReturns != "Status of Return" ? null : (
                        <Grid.Column>
                          <p>
                            Nullam quis risus eget{" "}
                            <a href="#">urna mollis ornare</a> vel eu leo. Cum
                            sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Nullam id dolor id
                            nibh ultricies vehicula.
                          </p>
                          <p>
                            <small>
                              This line of text is meant to be treated as fine
                              print.
                            </small>
                          </p>
                          <p>
                            The following snippet of text is{" "}
                            <strong>rendered as bold text</strong>.
                          </p>
                          <p>
                            The following snippet of text is{" "}
                            <em>rendered as italicized text</em>.
                          </p>
                          <p>
                            An abbreviation of the word attribute is{" "}
                            <abbr title="attribute">attr</abbr>.
                          </p>
                        </Grid.Column>
                      )}
                    </Grid.Column>
                  </Grid>
                </Segment>
                <SUIHeader as="h5" dividing />

                <Segment>
                  <Grid columns={3} stackable>
                    <Grid.Column width={3}>
                      <SUIHeader as="h2">Complications</SUIHeader>
                    </Grid.Column>

                    <Grid.Column width={5}>
                      <Menu pointing secondary vertical>
                        <Menu.Item
                          name="damaged package"
                          active={
                            activeItemEditComplications === "damaged package"
                          }
                          onClick={this.handleItemClickComplications}
                        />
                        <Menu.Item
                          name="defective product"
                          active={
                            activeItemEditComplications === "defective product"
                          }
                          onClick={this.handleItemClickComplications}
                        />
                        <Menu.Item
                          name="incorrect product"
                          active={
                            activeItemEditComplications === "incorrect product"
                          }
                          onClick={this.handleItemClickComplications}
                        />

                        <Menu.Item
                          name="lost package"
                          active={
                            activeItemEditComplications === "lost package"
                          }
                          onClick={this.handleItemClickComplications}
                        />
                        <Menu.Item
                          name="fitment issues"
                          active={
                            activeItemEditComplications === "fitment issues"
                          }
                          onClick={this.handleItemClickComplications}
                        />
                        <Menu.Item
                          name="technical problem"
                          active={
                            activeItemEditComplications === "technical problem"
                          }
                          onClick={this.handleItemClickComplications}
                        />
                      </Menu>
                    </Grid.Column>

                    <Grid.Column width={8}>
                      {activeItemEditComplications !=
                      "damaged package" ? null : (
                        <Card fluid color="blue" style={{ minHeight: 150 }}>
                          <Card.Content>
                            <Card.Header>Damaged Package</Card.Header>
                            <Card.Description>
                              <p>
                                Nullam quis risus eget{" "}
                                <a href="#">urna mollis ornare</a> vel eu leo.
                                Cum sociis natoque penatibus et magnis dis
                                parturient montes, nascetur ridiculus mus.
                                Nullam id dolor id nibh ultricies vehicula.
                              </p>
                              <Button type="submit">Submit A Request</Button>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      )}
                      {activeItemEditComplications !=
                      "defective product" ? null : (
                        <h2>Hey mann</h2>
                      )}
                      {activeItemEditComplications !=
                      "incorrect product" ? null : (
                        <h2>Hey mannn</h2>
                      )}
                      {activeItemEditComplications != "lost package" ? null : (
                        <Grid.Column color="white">
                          <p>
                            Nullam quis risus eget{" "}
                            <a href="#">urna mollis ornare</a> vel eu leo. Cum
                            sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Nullam id dolor id
                            nibh ultricies vehicula.
                          </p>
                          <p>
                            <small>
                              This line of text is meant to be treated as fine
                              print.
                            </small>
                          </p>
                          <p>
                            The following snippet of text is{" "}
                            <strong>rendered as bold text</strong>.
                          </p>
                          <p>
                            The following snippet of text is{" "}
                            <em>rendered as italicized text</em>.
                          </p>
                          <p>
                            An abbreviation of the word attribute is{" "}
                            <abbr title="attribute">attr</abbr>.
                          </p>
                        </Grid.Column>
                      )}
                      {activeItemEditComplications !=
                      "fitment issues" ? null : (
                        <h2>Hey mannn</h2>
                      )}
                      {activeItemEditComplications !=
                      "technical problem" ? null : (
                        <h2>Hey mannn</h2>
                      )}
                    </Grid.Column>
                  </Grid>
                </Segment>

                <SUIHeader as="h2" dividing />
              </Segment>
            </Card.Description>
          </Card>

          <Card fluid padded="true">
            <SUIHeader attached="top" as="h4" inverted>
              Addresses
            </SUIHeader>
            <Segment secondary padded>
              <Card.Description>
                <Grid columns="equal" stackable columns={2}>
                  <Grid.Column>
                    <Card fluid color="red" raised>
                      <Card.Content>
                        <Card.Header>
                          <Segment clearing>
                            <SUIHeader floated="left">
                              Shipping Address
                            </SUIHeader>
                            <CreateAddressModal />
                            <ChangeAddressModalForm ref={this.child} />
                          </Segment>
                        </Card.Header>
                        <Divider />
                        <Card.Description>
                          {this.addressRadios()}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>

                  <Grid.Column>
                    <Card fluid color="red" raised>
                      <Card.Content>
                        <Card.Header>
                          <Segment clearing>
                            <SUIHeader floated="left">
                              Billing Address
                            </SUIHeader>
                            {/* <Button floated='right' ref={this.child}>Add Billing Address </Button> */}
                            <CreateBillingAddressModal />
                            <ChangeBillingAddressModalForm
                              ref={this.childbill}
                            />
                          </Segment>
                        </Card.Header>
                        <Divider />
                        <Card.Description>
                          {this.addressBillingRadios()}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Card.Description>
            </Segment>
          </Card>

          <Card fluid padded="true">
            <SUIHeader attached="top" as="h4" inverted>
              Manage Vehicles
            </SUIHeader>
            <Segment secondary padded>
              <Card.Description>
                <Grid columns="equal" stackable columns={2}>
                  {/* <Grid stackable  > */}

                  <Grid.Column>
                    <Card fluid color="red" raised>
                      <Card.Content>
                        <Card.Header>
                          <Segment clearing>
                            <SUIHeader floated="left">Car Garage</SUIHeader>

                            <Button floated="right">+ Add Vehicle</Button>
                          </Segment>
                        </Card.Header>
                        <Divider />
                        <Card.Description>
                          {this.switchSavedBrowsed()}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>

                  <Grid.Column>
                    <Card fluid color="red" raised>
                      <Card.Content>
                        <Card.Header>
                          <Segment clearing>
                            <SUIHeader floated="left">
                              Recently Viewed Vehicles
                            </SUIHeader>
                          </Segment>
                        </Card.Header>
                        <Divider />
                        <Card.Description>
                          {NavBarGarageContent()}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Card.Description>
            </Segment>
          </Card>

          {/* <ManageVehicles/> THIS IS IN CASE WE WANT TO BREAK UP CODE IN CHUNKS*/}
        </Container>
      </div>
    );
  }
}

// const CardExampleGroups = () => (
//   // <Card.Group>
//   <Segment>

//     <Card fluid>
//       <Card.Content>
//         {/* <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' /> */}
//         <Card.Header>
//         <OrderHeaderContent />
//         </Card.Header>
//         <Card.Meta>
//        Ordered By: Jose Guzman
//         </Card.Meta>
//         {/* <Divider/> */}
//         <Card.Description>
//         <OrderDescriptionItems />
//           {/* Steve wants to add you to the group <strong>best friends</strong> */}
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         {/* <div className='ui four buttons'> */}
//         {/* <Button.Group > */}
//           <Button basic fluid compact  color='green'>Place Same Order</Button>
//           <Button basic fluid compact  color='violet'>Track Order</Button>
//           <Button basic fluid compact  color='blue'>Get Help With Order</Button>
//           <Button basic fluid compact  color='red' >Cancel Order</Button>
//         {/* </Button.Group> */}
//         {/* </div> */}
//       </Card.Content>
//     </Card>

//     <Card fluid>
//       <Card.Content>
//         {/* <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' /> */}
//         <Card.Header>
//         <OrderHeaderContent />
//         </Card.Header>
//         <Card.Meta>
//        Ordered By: Jose Guzman
//         </Card.Meta>
//         {/* <Divider/> */}
//         <Card.Description>
//         <OrderDescriptionItems />
//           {/* Steve wants to add you to the group <strong>best friends</strong> */}
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui four buttons'>
//         <Button basic color='green'>Place Same Order</Button>
//           <Button basic color='red'>Cancel Order</Button>
//           <Button basic color='blue'>Get Help With Order</Button>
//           <Button basic color='blue'>Track Order</Button>
//         </div>
//       </Card.Content>
//     </Card>

//     <Card fluid>
//       <Card.Content>
//         {/* <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' /> */}
//         <Card.Header>
//         <OrderHeaderContent />
//         </Card.Header>
//         <Card.Meta>
//        Ordered By: Jose Guzman
//         </Card.Meta>
//         {/* <Divider/> */}
//         <Card.Description>
//         <OrderDescriptionItems />
//           {/* Steve wants to add you to the group <strong>best friends</strong> */}
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui four buttons'>
//         <Button basic color='green' >Place Same Order</Button>
//           <Button basic color='red'>Cancel Order</Button>
//           <Button basic color='blue'>Get Help With Order</Button>
//           <Button basic color='blue'>Track Order</Button>
//         </div>
//       </Card.Content>
//     </Card>

//     </Segment>
//   // </Card.Group>
// )

// const OrderHeaderContent = () => (
//   <Grid columns='equal'>
//   <Grid.Row>
//     <Grid.Column>
//       <Segment>Order # 76773373</Segment>
//     </Grid.Column>
//     <Grid.Column>
//       <Segment><h4>Total Price: $767.73</h4></Segment>
//     </Grid.Column>
//     <Grid.Column>
//       <Segment><h4>Order Placed: May 12, 2018</h4></Segment>
//     </Grid.Column>
//     <Grid.Column>
//       <Segment><a onClick={()=>InvoiceMaker()}>Invoice</a></Segment>
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
// )

// const OrderDescriptionItems = () => (
//   <Item.Group divided>
//   <Item>
//     <Item.Image src='placeholder.png' />
//     <Item.Content>
//       <Item.Header as='a'>BMW Brake Disks</Item.Header>
//       <Item.Description>Unit Price: $203.00</Item.Description>
//       <Item.Meta>
//         <span className='cinema'>Item#: <strong>276728363</strong>  </span>
//       </Item.Meta>
//       <Item.Meta>
//       <Button primary floated='right'>
//          Buy Again
//             <Icon name='right chevron' />
//         </Button>
//         <span className='cinema'>Quantity: <strong>2</strong> </span>
//       </Item.Meta>
//       <Item.Description></Item.Description>
//       <Item.Extra>
//         <Label icon='file text outline' content='view item details' />
//       </Item.Extra>
//     </Item.Content>
//   </Item>

//     <Item>
//     <Item.Image src='placeholder.png' />
//     <Item.Content>
//       <Item.Header as='a'>BMW Brake Disks</Item.Header>
//       <Item.Description>Unit Price: $203.00</Item.Description>
//       <Item.Meta>
//         <span className='cinema'>Item#: <strong>276728363</strong>  </span>
//       </Item.Meta>
//       <Item.Meta>
//       <Button primary floated='right'>
//          Buy Again
//             <Icon name='right chevron' />
//         </Button>
//         <span className='cinema'>Quantity: <strong>2</strong> </span>
//       </Item.Meta>
//       <Item.Description></Item.Description>
//       <Item.Extra>
//         <Label icon='file text outline' content='view item details' />
//       </Item.Extra>
//     </Item.Content>
//   </Item>

//     <Item>
//     <Item.Image src='placeholder.png' />
//     <Item.Content>
//       <Item.Header as='a'>BMW Brake Disks</Item.Header>
//       <Item.Description>Unit Price: $203.00</Item.Description>
//       <Item.Meta>
//         <span className='cinema'>Item#: <strong>276728363</strong>  </span>
//       </Item.Meta>
//       <Item.Meta>
//       <Button primary floated='right'>
//          Buy Again
//             <Icon name='right chevron' />
//         </Button>
//         <span className='cinema'>Quantity: <strong>2</strong> </span>
//       </Item.Meta>
//       <Item.Description></Item.Description>
//       <Item.Extra>
//         <Label icon='file text outline' content='view item details' />
//       </Item.Extra>
//     </Item.Content>
//   </Item>

// </Item.Group>
// )

// const mapStateToProps = (state) => ({
//   users: state.userState.users,
// });

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

// const mapDispatchToProps = (dispatch) => ({
//   onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
// });

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    null
  )
)(AccountPage);
