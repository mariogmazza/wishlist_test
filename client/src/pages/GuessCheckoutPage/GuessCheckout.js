import React, { Component } from 'react';
import { Form, Icon, Input,Checkbox,Tooltip, Cascader, Select, Row, Col, AutoComplete, List, Avatar, Button, Spin, Steps } from 'antd';
// import {
//   Divider,
//   Grid,
//   Header,
//   Item,
//   Image,
//   List,
//   Menu,
//   Responsive,
//   Segment,
//   Sidebar,
//   Visibility,
//   Container
// } from 'semantic-ui-react'
import { Grid, Image, Label, Segment, Container, Icon as SemIcon  } from 'semantic-ui-react';

// import {} from 'antd';
import reqwest from 'reqwest';
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Container>
       <h2> Existing Customers</h2>
       <h4>Sign in to speed up the checkout process.</h4>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>

          {/* <button className="button button-cart btn centerBTN login-form-button" htmlType="submit"  id="button-cart" data-loading-text="Loading...">
          Log in
                  </button> */}
          {/* <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button> */}
          Or <a href="">Continue Shopping!</a>
        </FormItem>
      </Form>
      </Container>

    );
  }
}

const Login  = Form.create()(NormalLoginForm);



// const StateOption = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

class StateOptionSelect extends React.Component {
  render (){
    return (
      <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
    )
  }
}


const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class GuessCheckOutForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '1',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div>
        <h2>SHIPPING ADDRESS</h2>
       {/* <h4>Please enter an email address to use as your User ID and create a password for your account. By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</h4> */}
      <Form onSubmit={this.handleSubmit}>
      <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
      <FormItem
            label="FirstName"
            {...formItemLayout}
          >
            <Input placeholder="FirstName" />
          </FormItem>
          <FormItem
            label="LastName"
            {...formItemLayout}
          >
            <Input placeholder="LastName" />
          </FormItem>
          <FormItem
            label="Address"
            {...formItemLayout}
          >
            <Input placeholder="Address" />
          </FormItem>
          <FormItem
            label="City"
            {...formItemLayout}
          >
            <Input placeholder="City" />
          </FormItem>
          <FormItem
            label="State"
            {...formItemLayout}
          >
            <StateOptionSelect />
          </FormItem>
          <FormItem
            label="Zip"
            {...formItemLayout}
          >
            <Input placeholder="Zip/Postal Code" />
          </FormItem>
          
{/*  
        <FormItem
          {...formItemLayout}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem> */}
        {/* <FormItem
          {...formItemLayout}
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem> */}
    
        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Website"
        >
          {getFieldDecorator('website', {
            rules: [{ required: true, message: 'Please input website!' }],
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          )}
        </FormItem>
     
        
        <FormItem {...tailFormItemLayout}>
        <button className="button button-cart btn centerBTN login-form-button" htmlType="submit"  id="button-cart" data-loading-text="Loading...">
          Continue To Billing
                  </button>
          {/* <Button type="primary" htmlType="submit" className='login-form-button'>Register</Button> */}
        </FormItem>
      </Form>
      </div>
    );
  }
}

const WrappedGuessCheckOutForm = Form.create()(GuessCheckOutForm);


   {/* <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column> */}

 





// const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

// class LoadMoreList extends React.Component {
//   state = {
//     loading: true,
//     loadingMore: false,
//     showLoadingMore: true,
//     data: [],
//   }
//   componentDidMount() {
//     this.getData((res) => {
//       this.setState({
//         loading: false,
//         data: res.results,
//       });
//     });
//   }
//   getData = (callback) => {
//     reqwest({
//       url: fakeDataUrl,
//       type: 'json',
//       method: 'get',
//       contentType: 'application/json',
//       success: (res) => {
//         callback(res);
//       },
//     });
//   }
//   onLoadMore = () => {
//     this.setState({
//       loadingMore: true,
//     });
//     this.getData((res) => {
//       const data = this.state.data.concat(res.results);
//       this.setState({
//         data,
//         loadingMore: false,
//       }, () => {
//         // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
//         // In real scene, you can using public method of react-virtualized:
//         // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
//         window.dispatchEvent(new Event('resize'));
//       });
//     });
//   }
//   render() {
//     const { loading, loadingMore, showLoadingMore, data } = this.state;
//     const loadMore = showLoadingMore ? (
//       <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
//         {loadingMore && <Spin />}
//         {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
//       </div>
//     ) : null;
//     return (
//       <List
//         className="demo-loadmore-list"
//         loading={loading}
//         itemLayout="horizontal"
//         loadMore={loadMore}
//         dataSource={data}
//         renderItem={item => (
//           <List.Item actions={[<a>edit</a>, <a>more</a>]}>
//             <List.Item.Meta
//               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//               title={<a href="https://ant.design">{item.name.last}</a>}
//               description="Ant Design, a design language for"
//             />
//             <div>content</div>
//           </List.Item>
//         )}
//       />
//     );
//   }
// }



// const steps = [
//   { key: 'shipping', icon: 'truck', title: 'Shipping', description: 'Choose your shipping options' },
//   { key: 'billing', active: true, icon: 'payment', title: 'Billing', description: 'Enter billing information' },
//   { key: 'confirm', disabled: true, icon: 'info', title: 'Confirm Order' },
// ]

const Step = Steps.Step;
const OrderSteps = () => (
  <Steps>
  <Step status="finish" title="Login" icon={<Icon type="user" />} />
  <Step status="finish" title="Shipping" icon={<SemIcon name="shipping" />} />
  <Step status="process" title="Payment" icon={<Icon type="credit-card" />} />
  <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
</Steps>
)









const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const LabelRibbonContainer = () => (
  <Grid>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red'  ribbon='right'>Order Summary</Label>
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<div><a href="https://ant.design">{item.title}</a><span>$ 1200.00 </span></div>}
          // description="Ant Design, a design language for "
        />
      </List.Item>
    
    )}
  />
       
       <hr />
      <div>
        <h3 style={{fontSize:18, marginLeft:10}}>Subtotal:<span style={{fontSize:18, float:'right', marginRight:10}}>        $2000.00</span></h3> 
      </div>
   
      <div>
        <h3 style={{fontSize:18, marginLeft:10}}>Shipping:<span style={{fontSize:18, float:'right', marginRight:10}}>        $2000.00</span></h3> 
      </div>
      <div>
        <h3 style={{fontSize:18, marginLeft:10}}>Tax:<span style={{fontSize:18, float:'right', marginRight:10}}>        $2000.00</span></h3> 
      </div>
      <div>
        <h3 style={{fontSize:18, marginLeft:10}}>Order Total:<span style={{fontSize:18, float:'right', marginRight:10}}>        $2000.00</span></h3> 
      </div>
      <hr />
      {/* <button className="button button-cart btn centerBTN"  type="button" id="button-cart" data-loading-text="Loading...">
                    Continue to Billing
                  </button> */}
                  {/* <Button type="primary" htmlType="submit" className="login-form-button">
           Continue to Billing
          </Button> */}

      </Segment>
    </Grid.Column>
  </Grid>
)









class GuessCheckout extends React.Component {
  render() {
    return (
      <Container>
       <OrderSteps centered/>
        <div>
       
        <hr />
          <Grid container columns={2}  stackable>
            <Grid.Column>
              <WrappedGuessCheckOutForm  />
            </Grid.Column>
            <Grid.Column>
              <LabelRibbonContainer />
            </Grid.Column>
          </Grid>
  
          <hr/>
        </div>
        <div>
        <Grid centered  padded columns={2}>
    <Grid.Column centered>
    </Grid.Column>
    </Grid>
          </div>
      </Container>
    )
  }
}

// ReactDOM.render(<Checkout />, mountNode);




export default GuessCheckout









