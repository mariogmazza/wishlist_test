import React, { Component } from 'react';
import { Container, Divider,Grid, Icon, Button as ButtonSUR, Segment, Card, Menu, Image, Header } from 'semantic-ui-react'
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
  viewError:false,
};

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  hideErros = () => {
    if(this.state.viewError !== false){
      this.setState({viewError:false},()=>{
        console.log('just changed state to', this.state.viewError)
      });

      console.log('trying to hide errors',this.state)
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((error, values) => {
      if (!error) {
        this.setState({email:values.email, error:error},()=>{
          
        auth.doPasswordReset(this.state.email)
          .then(() => {
            this.props.form.resetFields();
            // this.setState(() => ({ ...INITIAL_STATE }));
          })
          .catch(error => {
            console.log(error)
            this.setState(byPropKey('error', error));
          }).then(this.setState(() => ({ viewError:true })))
        });
      }
    });


  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 8 },
    };
    const {
      email,
      error,
   viewError
    } = this.state;
    


    return (

      <Container style={{ paddingBottom: '5em' }} inverted text>
    
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
       
      <Form onSubmit={this.handleSubmit} onFocus={this.hideErros} className="login-form">
      <h1 style={{fontWeight:'bold'}}>Password Recovery</h1>
     <p> You can recover your lost account information using the form below. Please enter valid e-mail address, your account information will be mailed to you shortly.</p>
        <FormItem   label="E-mail">
      
        {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input placeholder="Please Enter Your Email" />
          )}
           
        </FormItem>
        {/* disabled={isInvalid} */}
        { error && <p style={{color:'red'}}>{viewError === true ? error.message : null}</p> }
<Button type="primary"   htmlType="submit" className="login-form-button">
Reset My Password
          </Button>

     
       
        
      </Form>
      </Grid.Column>
     </Grid>
     </Container>
    );
  }
}


const ResetFormWrapped = Form.create()(NormalLoginForm);

const ResetForm = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header style={{padding:20}}>
         <Icon name='lock' size='large'/>  SECURE LOGIN 
        </Menu.Item>
      </Container>
    </Menu>
    <Container text style={{ marginTop: '14em' }}>
<ResetFormWrapped />
    </Container>
  </div>
)



const PasswordForgetLink = () =>
  <p>
    <Link to="/passwordreset">Forgot Password?</Link>
  </p>

export default ResetForm

export {
  ResetForm,
  PasswordForgetLink,
};














// const PasswordForgetPage = () =>
//   <div>
//     <h1>PasswordForget</h1>
//     <PasswordForgetForm />
//   </div>



// class PasswordForgetForm extends Component {
 

//   onSubmit = (event) => {
//     const { email } = this.state;

//     auth.doPasswordReset(email)
//       .then(() => {
//         this.setState(() => ({ ...INITIAL_STATE }));
//       })
//       .catch(error => {
//         this.setState(byPropKey('error', error));
//       });

//     event.preventDefault();
//   }

//   render() {
//     const {
//       email,
//       error,
//     } = this.state;

//     const isInvalid = email === '';

//     return (
//       <form onSubmit={this.onSubmit}>
//         <input
//           value={this.state.email}
//           onChange={event => this.setState(byPropKey('email', event.target.value))}
//           type="text"
//           placeholder="Email Address"
//         />
//         <button disabled={isInvalid} type="submit">
//           Reset My Password
//         </button>

//         { error && <p>{error.message}</p> }
//       </form>
//     );
//   }
// }

