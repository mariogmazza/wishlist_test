import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { auth, firebase, db 
} from '../../firebase';
import { Container, Divider,Grid, Icon, Button as ButtonSUR, Segment, Card, Menu, Image, Header } from 'semantic-ui-react'
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import localStorage from 'localStorage';
import faceBookProvider from '../../firebase/facebookSignIn';
import {googleSignIn, facebookSignIn }from '../../firebase/auth';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    error: null,
    viewError:false,
   
  };

  hideErros = () => {
    if(this.state.viewError !== false){
      this.setState({viewError:false})
    }
  }

  signInFacebook = (event) => {
    console.log('Im trying')
    auth.facebookSignIn();
  }

  signInGoogle = (event) => {
    console.log('Im trying')
    auth.googleSignIn();
  }
 
  // use assinc to make sure they both run 

  handleSubmit = (event) => {
    const form = this.props.form;
    const { history } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values)
     
        auth.doCreateUserWithEmailAndPassword(values.email, values.password)
          .then(authUser => {
            if (authUser) {
              db.doCreateUser(authUser.uid, values.userName, values.email)
         .then(() => {
           
           history.push(routes.HOME);
         })
            
            }
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
           }).then(this.setState(() => ({ viewError:true })))
           event.preventDefault(); 
      }else {
        console.log(err)
      }
    })
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

  render() {
    const {
      error, viewError
    } = this.state;

   
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
  
    return (
     <div>
      <Form onSubmit={this.handleSubmit} onFocus={this.hideErros} >  
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
          {...formItemLayout}
          label="Username"
        >
          {getFieldDecorator('userName', {
             rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input />
          )}
        </FormItem>
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
        </FormItem>
        <FormItem
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
        </FormItem>
        
   
        { error && <p style={{color:'red'}}>{viewError === true ? error.message : null}</p> }
      
          <Button type="primary" htmlType="submit" className="login-form-button">
            LOG IN USING OUR SECURE SERVER
          </Button>
       
          <span style={{fontSize:10}}>By creating an account, you are agreeing to our<a href=""> privacy policy and terms of use</a></span>

          <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </FormItem>

        </Form>
          <Divider horizontal>Or</Divider>
          <ButtonSUR color='facebook'  onClick={this.signInFacebook}>
            <Icon name='facebook' /> Facebook
          </ButtonSUR>
          <ButtonSUR color='google plus' onClick={this.signInGoogle}>
          <Icon name='google plus' /> Google Plus
          </ButtonSUR>

     </div>
    );
  }
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class SignInForm extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
  }

  state = {
    error: null,
    viewError:false,
   
  };

  hideErros = () => {
    console.log('Im changgins error states')
    if(this.state.viewError !== false){
      this.setState({viewError:false})
      console.log(this.state)
    }
  }

  handleSubmit = (event) => {
    const form = this.props.form;
    const { history } = this.props;
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        auth.doSignInWithEmailAndPassword(values.email, values.password)
          .then(authUser => {
            form.resetFields();
            history.push(routes.LANDING);
           
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
           }).then(this.setState(() => ({ viewError:true })))
           console.log(this.state)
           event.preventDefault();
        console.log('Received values of form: ', values);
     
        
      }else {
        console.log(err)
      }
      // if (!err) {
      //   console.log('Received values of form: ', values);
      // }
    });
  }

  render() {
    const {
      error, viewError
    } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 },
    };
    return (
      <div>
      <Form onSubmit={this.handleSubmit} onFocus={this.hideErros} >  
      <FormItem>
        {getFieldDecorator('email', {
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }, { required: true, message: 'Email!' }],
        })(
          <Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
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
          { error && <p style={{color:'red'}}>{viewError === true ? error.message : null}</p> }
          <Link className="login-form-forgot" to="passwordreset">Forgot Password?</Link>
          {/* <a className="login-form-forgot" href="passwordreset">Forgot password</a> */}
          <Button type="primary" htmlType="submit" className="login-form-button">
            LOG IN USING OUR SECURE SERVER
          </Button>
          <Divider horizontal>Or</Divider>
          <ButtonSUR color='facebook'>
            <Icon name='facebook' /> Facebook
          </ButtonSUR>
          <ButtonSUR color='google plus'>
          <Icon name='google plus' /> Google Plus
          </ButtonSUR>
        </FormItem> 
       </Form>
       </div>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    
  }
  state = {
    radioValue: 1,
  }


  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      radioValue: e.target.value,
    });
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <Menu fixed='top' inverted >
      <Container>
        <Menu.Item as='a' header style={{padding:20}}>
         <Icon name='lock' size='large'/>  SECURE LOGIN 
        </Menu.Item>
      </Container>
    </Menu>

      <Container style={{ paddingBottom: '5em' , marginTop: '14em'}} text>
    
       <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
 
     <Grid 
     textAlign='center'
     style={{ height: '100%' }}
     verticalAlign='middle'>
        <Grid.Column  verticalAlign='middle' width={11} >
              <div className="login-form">
                <h1 style={{ fontWeight: 'bold' }}>Please Login Below</h1>
                <RadioGroup onChange={this.onChange} setFieldsValue={this.state.radioValue}>
                  <Radio value={1}>I'm a returning customer </Radio>
                  <Radio value={2}>I'm a new customer</Radio>
                </RadioGroup>
                {this.state.radioValue === 1 ? <SignInFormWrapped {...this.props} /> : <SignUpFormWrappped {...this.props} />}
              </div>
      </Grid.Column>
     </Grid>
     </Container>
     </div>
    );
  }
}

const SignInFormWrapped = Form.create()(SignInForm);
const SignUpFormWrappped = Form.create()(SignUpForm);

export default withRouter(LoginForm);
