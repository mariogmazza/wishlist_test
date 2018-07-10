import React, { Component } from 'react';
import API from '../../utils/API'
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { auth, firebase, db 
} from '../../firebase';
import { Container, Divider,Grid, Icon, Button as ButtonSUR, Segment, Card, Menu,  Image, Header,Feed , Input as SURInput} from 'semantic-ui-react'
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import localStorage from 'localStorage';
import faceBookProvider from '../../firebase/facebookSignIn';
import {googleSignIn, facebookSignIn }from '../../firebase/auth';
import { connect } from 'react-redux';
import { fetchChatClient } from '../../actions/postActions';
import { Dots } from 'react-activity';
import 'react-activity/dist/react-activity.css';

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
class RequestChatFormPre extends Component {
  constructor(props) {
    super(props);
    console.log(props)
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
          var clientState = {
            chatUserName:values.name,
            clientEmail:values.email,
            clientPhone:values.phone
          };
        this.props.fetchChatClient(clientState);
        this.props.renderChatLog();
     
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
             <h1 style={{ fontWeight: 'bold' }}>Please Provide Information</h1>
      <Form onSubmit={this.handleSubmit} onFocus={this.hideErros} > 

          <FormItem>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your name!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="string" placeholder="Name" />
        )}
      </FormItem> 
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
        {getFieldDecorator('phone', {
        rules: [{ required: true, message: 'Please input your phone number!' }],
        })(
          <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone Number" />
        )}
      </FormItem>

  

      <FormItem>
         
          <Button type="primary" htmlType="submit" className="login-form-button">
            Chat With One of Our Specialist
          </Button>
          <Divider horizontal>Or</Divider>
        </FormItem> 
       </Form>
       </div>
      </Grid.Column>
     </Grid>
     </Container>
       </div>
    );
  }
}

const RequestChatForm = connect(null, { fetchChatClient })(RequestChatFormPre);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    
    this.renderChatLog = this.renderChatLog.bind(this)
  }
  state = {
    viewForm: true,
  }


  renderChatLog(){
    this.setState({viewForm:false})
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      viewForm: e.target.value,
    });
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div>
      <Menu fixed='top' inverted >
      <Container>
        <Menu.Item as='a' header style={{padding:20}}>
         <Icon name='wechat' size='large'/>  Chat With One of Our Specialist
        </Menu.Item>
      </Container>
    </Menu>

  
    {this.state.viewForm == true ? <RequestChatFormWrapped renderChatLog={this.renderChatLog}{...this.props} /> : <ChatRoomLogic />}
        
     </div>
    );
  }
}

class ChatRoomLogicPre extends Component {
  constructor(){
    super();
    this.state = {
      texted: '',
      conversation:[],
      confirmedMessage:'',
      message:'',
      users:[],
      currentUser:[],
      clientChatData:null
    }

    API.getSocket().on('chat', message => this.requestToStartChat( message));

    API.getSocket().on('updatechat', (username, data) => this.updateChatFunc( username,data));

    API.getSocket().on('roomcreated', (data) => this.roomCreatedFunc(data));

    this.roomCreatedFunc = this.roomCreatedFunc.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMessageState = this.updateMessageState.bind(this);
    this.requestToStartChat = this.requestToStartChat.bind(this)
    this.updateChatFunc = this.updateChatFunc.bind(this)
  }

  roomCreatedFunc(data){
    // console.log('data on room created',data);

    var newData = {room:data.room, username:data.chatUserName,  clientEmail:data.clientEmail,clientPhone:data.clientPhone}
  

    if(this.state.currentUser == ''){
      this.setState({
        currentUser: [...this.state.currentUser, newData]
      }, () => { console.log('the current user',this.state.currentUser) });
    }
    API.getSocket().emit('adduser',newData );
  }

  updateChatFunc(username, data){
    console.log('update chat func push message to array', username, data);
    this.setState({
      conversation: [...this.state.conversation, data]
    },()=>{console.log(this.state.conversation)});
   
  }

  
  requestToStartChat(data){
    this.setState({
      conversation: [...this.state.conversation, data.message]
    },()=>{console.log(this.state.conversation)});
  }




  componentDidMount() {
    // chat client has all form info
    API.getSocket().emit('createroom', this.props.chatClient);
// console.log('the chat client',this.props.chatClient)
    // API.getSocket().emit('adduser', data);
    
    ///////////////////////////////////////////////////////
    // API.getFirstMessage(this.props.chatClient,(err, data) => {
    //   this.setState({
    //     conversation: [...this.state.conversation, data]
    //   },()=>{console.log(this.state.conversation)});
    // console.log('I ran',this.state.conversation)
    // });
    
  }



updateMessageState(data){
console.log(data)
}


handleChange(event) {
  this.setState({texted: event.target.value});

}

  handleSubmit(event) {
    var sentData = {message:this.state.texted, time:  new Date().toLocaleTimeString() }
     event.preventDefault();
    API.getSocket().emit('sendchat', sentData);
    this.setState({texted: ''});
  }
  

  render() {
    const { TextArea } = Input;
    const { conversation } = this.state;

    var theconvo = this.state.conversation.map((sentMessage)=>{
      return (
        <div>
            <Feed>
    <Feed.Event>
      <Feed.Label image='generic-user.png' />
      <Feed.Content>
       
        <Feed.Summary>
          <a></a> {sentMessage.username}
          <Feed.Date>{sentMessage.time}</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
        {sentMessage.message}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  </Feed>
      </div>
    )

    })
    return (
  <div>
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
            <Grid.Column verticalAlign='middle' width={16} >
              <div className="login-form">

                <h3>Live Chat  <Icon name='wechat' size='large' /></h3>
                <Dots color='green' />

                <div style={{ maxHeight: 400, minHeight: 400, overflow: 'scroll', }}>{theconvo}</div>
                <Segment color='red'>
                  <form onSubmit={this.handleSubmit}>
                    <Input.TextArea placeholder='Type Message Here' value={this.state.texted} onChange={this.handleChange} rows={4} />
                    <ButtonSUR type='submit'>Send Message</ButtonSUR>
                  </form>
                </Segment>
              </div>

            </Grid.Column>
          </Grid>
     </Container>
   
  </div>
    );
  }
}

const mapStateToProps = state => ({
  chatClient: state.posts.chatClient,
});

const ChatRoomLogic = connect(mapStateToProps, null)(ChatRoomLogicPre);


const RequestChatFormWrapped = Form.create()(RequestChatForm);
const SignUpFormWrappped = Form.create()(SignUpForm);

export default ChatRoom;




