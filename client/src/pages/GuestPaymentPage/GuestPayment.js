import React, { Component } from 'react';
import { Form, Icon, Input,Checkbox,Tooltip, Cascader, Select, Row, Col, AutoComplete, List, Avatar, Button, Spin, Steps , Radio} from 'antd';
import { Grid, Image, Label, Segment, Container, Icon as SemIcon, Popup  } from 'semantic-ui-react';
import reqwest from 'reqwest';
import CVV from '../../assets/images/cvv.png';
import CardIcons from '../../assets/images/cardicons.png'
function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}


class CardInfo extends React.Component {

    onChange = (e) => {
      const { value } = e.target;
      const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
      if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
        this.props.onChange(value);
      }
    }
    // '.' at the end or only '-' in the input box.
    onBlur = () => {
      const { value, onBlur, onChange } = this.props;
      if (value.charAt(value.length - 1) === '.' || value === '-') {
        onChange({ value: value.slice(0, -1) });
      }
      if (onBlur) {
        onBlur();
      }
    }
    

  render() {
    const { getFieldDecorator } = this.props.form;
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

    // const { value } = this.props;
    // const title = value ? (
    //   <span className="numeric-input-title">
    //     {value !== '-' ? formatNumber(value) : '-'}
    //   </span>
    // ) : 'Input a number';
    return (
      <div>
        <Image  style={{maxWidth:160}} src={CardIcons}/>
        
        <Form>
        <div className="ant-form-item-label"><label htmlFor="email" className="ant-form-item-required" title="Credit Card Number">Credit Card Number</label></div>

        <Input placeholder="Credit Card Number" />
          <label>
            <div className="ant-form-item-label"><label htmlFor="email" className="ant-form-item-required" title="Credit Card Number">Experation Date</label></div>
            <br />
            <Select
              showSearch
              style={{ width: 80 }}
              placeholder="Month"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="01">01</Option>
              <Option value="02">02</Option>
              <Option value="03">03</Option>
              <Option value="04">04</Option>
              <Option value="05">05</Option>
              <Option value="06">06</Option>
              <Option value="07">07</Option>
              <Option value="08">08</Option>
              <Option value="09">09</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </Select>


            <span>/</span>
            <Select
              showSearch
              style={{ width: 80 }}
              placeholder="Year"
              optionFilterProp="children"
              // onChange={handleChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="2018">2018</Option>
              <Option value="2019">2019</Option>
              <Option value="2020">2020</Option>
              <Option value="2021">2021</Option>
              <Option value="2022">2022</Option>
              <Option value="2023">2023</Option>
              <Option value="2024">2024</Option>
              <Option value="2025">2025</Option>
              <Option value="2026">2026</Option>
              <Option value="2027">2027</Option>
              <Option value="2028">2028</Option>
              <Option value="2029">2029</Option>
              <Option value="2030">2030</Option>
              <Option value="2031">2031</Option>
              <Option value="2032">2032</Option>
              <Option value="2033">2033</Option>
              <Option value="2034">2034</Option>
              <Option value="2035">2035</Option>
              <Option value="2036">2036</Option>
              <Option value="2037">2037</Option>
              <Option value="2038">2038</Option>
              <Option value="2038">2039</Option>
            </Select>
          </label>
          <br />

          <FormItem style={{ width: 80 }}
            // {...formItemLayout}
            // label="CVV"
            label={(
              <span style={{ minWidth: 200 }}>
                CVV&nbsp;
              <Popup
                  trigger={<Icon type="question-circle-o" />}
                  content={<Image style={{ minWidth: 400 }} size='exlarge' src={CVV} />}
                  position='right'
                />
              </span>)}>
            {getFieldDecorator('CVV', {
              rules: [{
                type: 'CVV', message: 'The input is not valid CVV!',
              }, {
                required: true, message: 'Please input your CVV Number!',
              }],
            })(
              <Input placeholder="CVV" />
            )}
          </FormItem>
          <FormItem>
          <button className="button button-cart btn" style={{ float: 'left' }} type="button" id="button-cart" data-loading-text="Loading...">
            Place Order
          </button>
          </FormItem>
        </Form>
      </div>
    )
  }
}


const PayPalOption = ()=>

  <div> 
    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" border="0" alt="PayPal Logo"/>
    <span style={{marginLeft:10}}>You will be redirected to the PayPal website.</span>
    <button style={{marginTop:20}} className="button button-cart btn" type="button" id="button-cart" data-loading-text="Loading...">
           Continue to PayPal
          </button>
    </div>


const CardInfoWrapped  = Form.create()(CardInfo);


const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class PaymentForm extends React.Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(getFieldDecorator);
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    
      // marginTop:20
    };

    return (
      <Container>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio style={radioStyle} value={1}>Credit Card</Radio>
          {this.state.value === 1 ? <CardInfoWrapped /> : null}
          <Radio style={radioStyle} value={2}>Pay Pal</Radio>
          {this.state.value === 2 ? PayPalOption(): null}
        </RadioGroup>
      </Container>
    );
  }
}

const PaymentFormwrapped  = Form.create()(PaymentForm);

const PaymentOption  = Form.create()(PaymentForm);



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
        <h2>PAYMENT METHOD</h2>
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









class GuestPayment extends React.Component {
  render() {
    return (
      <Container>
       <OrderSteps centered/>
        <div>
       
        <hr />
          <Grid container columns={2}  stackable>
            <Grid.Column>
              <PaymentOption  />
            </Grid.Column>
            <Grid.Column>
              <LabelRibbonContainer />
            </Grid.Column>
          </Grid>
  
          <hr/>
        </div>
        <div>
        <Grid centered  padded columns={2}>
    <Grid.Column >
    </Grid.Column>
    </Grid>
          </div>
      </Container>
    )
  }
}

// ReactDOM.render(<Checkout />, mountNode);




export default GuestPayment










