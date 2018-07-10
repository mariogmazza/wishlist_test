import React, { Component } from 'react';
import API from '../../utils/API'
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../../constants/routes';
import {auth, firebase, db} from '../../firebase';
import { Container, Divider, Grid, Button as ButtonSUR, Segment, Card, Image, Feed,Button as SURbutton, Progress } from 'semantic-ui-react'
import { Form, Input, Checkbox, Radio, Layout, Menu, Breadcrumb, Icon, message as ANTDmessage , Button, notification} from 'antd';
import localStorage from 'localStorage';
import faceBookProvider from '../../firebase/facebookSignIn';
import { googleSignIn, facebookSignIn } from '../../firebase/auth';
import { connect } from 'react-redux';
import { fetchChatClient } from '../../actions/postActions';
import openSocket from 'socket.io-client';
import { compose } from 'recompose';
import withAuthorization from '../../components/withAuthorization';
import { Dots } from 'react-activity';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;



class AdminChat extends Component {
  constructor(props) {
    super(props)
    API.getSocket().on('newChatRequest', newRoom => this.roomCreatedFunc( newRoom));
    API.getSocket().on('updatechat', (userData,messageData )=> this.receivedChatMessage( userData,messageData));
    // API.getSocket().on('chat', message => this.chatConvo( message));
    // API.getSocket().on('roomcreated', (data) => this.roomCreatedFunc(data));
    this.state = {
      currentKey: null,
      collapsed: false,
      chatUsers: [{
        chatUserName: 'Demo User',
        room: '1234567890',
        conversation:
          [
            {
              username: 'Demo User',
              message: 'This is a test convo',
              time:'12:30'
            },
            { username: 'Demo Client', 
              message: 'Hello Demo User',
            time:'11:40' }
          ]
      }],
      currentUser: null,
      admin: 'Bobby Gibson',
      texted: '',
      chatRoom: '',
    }
    this.receivedChatMessage = this.receivedChatMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.roomCreatedFunc = this.roomCreatedFunc.bind(this);
    this.requestToStartChat = this.requestToStartChat.bind(this);
    this.switchToReplay = this.switchToReplay.bind(this);
    this.acceptRequest =  this.acceptRequest.bind(this);
    this.rejectRequest =  this.rejectRequest.bind(this);
  }


// change this because thre can be errors give everyone a random user id
  receivedChatMessage(userData,data){
    console.log(data.room);
    console.log(this.state.chatUsers)
  
    function filterIt(arr, searchKey) {
      return arr.filter(function(obj) {
        return Object.keys(obj).some(function(key) {
          return obj[key].includes(searchKey);
        })
      });
    }
    var foundUser = filterIt(this.state.chatUsers,`${data.room}`)[0];
    let index = this.state.chatUsers.findIndex(x => x.room==data.room);
    var stateCopy = Object.assign({}, this.state);
    var messageData = {username:data.username,message:data.message, time:data.time}
    console.log('the staet coppy',stateCopy)
    stateCopy.chatUsers[index].conversation = [...this.state.chatUsers[index].conversation, messageData ];
    this.setState(stateCopy);
    console.log('the after state',this.state)
    if(userData != this.props.authUser.displayName){
      console.log("I received a message",userData,data);
      this.openNotificationChat(data);
      
    }
  }



  openNotificationChat = (newElement) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => this.switchToReplay(key, newElement)}>
        Reply
      </Button>
    );
    const args = {
      message: `${newElement.username}`,
      description: `${newElement.message}`,
      duration: 0,
      btn,
      key,
      onClose: this.close,
    };
    notification.open(args);
  };




  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }



  handleClick = (e) => {
    this.setState({
      currentKey: e.key,
      currentUser: e.item.props.user
    });
  }



  handleChange(event) {
    this.setState({ texted: event.target.value });
  }



  handleSubmitForm(event){
    event.preventDefault();
    var data = {
      room:this.state.currentUser.room, 
      username:this.props.authUser.displayName ,  
      message:this.state.texted,
      time:  new Date().toLocaleTimeString()
    }
    API.getSocket().emit('adminchat', data);
    this.setState({texted:''})
  }


  roomCreatedFunc(newroom) {
    var clientData = {
      chatUserName: newroom.chatUserName,
      clientEmail: newroom.clientEmail,
      clientPhone: newroom.clientPhone,
      room: newroom.room,
      time:  new Date().toLocaleTimeString(),
      conversation: [
        {
          handle: newroom.chatUserName,
          message: "Client wishes to start new chat please accept the request"
        }],
    }

    this.requestToStartChat(clientData);

    const data = { 
      room: newroom.room, 
      user: this.props.authUser.displayName 
    }

    API.getSocket().emit('adduser', data);
  }



  requestToStartChat(data) {
    this.setState({
      chatUsers: [...this.state.chatUsers, data]
    }, () => { this.openNotification(data) });
  }



  openNotification = (newElement) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => this.switchToReplay(key, newElement)}>
        Reply
      </Button>
    );
    const args = {
      message: `${newElement.chatUserName}`,
      description: 'Client wishes to start new chat. Please accept the request.',
      duration: 0,
      btn,
      key,
      onClose: this.close,
    };
    notification.open(args);
  };

  close = () => {
    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
  };

  switchToReplay = (key, newElement) => {
    function filterIt(arr, searchKey) {
      return arr.filter(function(obj) {
        return Object.keys(obj).some(function(key) {
          return obj[key].includes(searchKey);
        })
      });
    }
    var foundUser = filterIt(this.state.chatUsers,`${newElement.room}`)[0]
    this.setState((prevState) => {
      return {currentUser: foundUser}
    });
    notification.close(key)
  }


  acceptRequest(currentUserPassed) {
    currentUserPassed.message = `Hello I'm ${this.props.authUser.displayName} a product specialist. How may I help you ?`;
    currentUserPassed.username = this.props.authUser.displayName;
    API.getSocket().emit('adminchat', currentUserPassed);
  }


  rejectRequest(currentUserPassed) {
    currentUserPassed.message = `Hello unfortuantely non of our representives are vailable please try us during our business hours.`;
    currentUserPassed.username = 'System';
    API.getSocket().emit('adminchat', currentUserPassed);
  }


 


  starterConvo() {
    return (
      <div>
        {this.state.chatUsers.map((sentMessage) =>
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
        )}
      </div>
    )
  }

  currentConvoFeed() {
    return (
      <div>
        {this.state.currentUser.conversation.map((sentMessage) =>
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
        )}
      </div>
    )
  }



  render() {
   
    var { chatUsers, currentKey, currentUser } = this.state
    if (currentUser != null) {

    }


    return (
      <Layout style={{ minHeight: '100%' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" mode="inline"
            onClick={this.handleClick}
            defaultSelectedKeys={['2']}
            selectedKeys={[this.state.currentKey]}>
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>Chatrooms</span></span>}
            >
              {chatUsers.map((chatUser) =>
                <Menu.Item key={chatUser.room} user={chatUser}>{chatUser.chatUserName}</Menu.Item>
              )}

            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Chat Client</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.currentUser == null ? '' : this.state.currentUser.chatUserName}</Breadcrumb.Item>
              <Breadcrumb.Item>
                {this.state.currentUser == null ? '' :
                  <SURbutton.Group>
                    <SURbutton onClick={() => this.rejectRequest(this.state.currentUser)}>Decline</SURbutton>
                    <SURbutton.Or />
                    <SURbutton positive onClick={() => this.acceptRequest(this.state.currentUser)}>Accept</SURbutton>
                  </SURbutton.Group>}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.state.currentUser == null ? '' :     
             <Grid.Column verticalAlign='middle' width={16} >
              <div className="login-form">
                <h3>Live Chat  <Dots color='green' /></h3>
                <div style={{ maxHeight: 400, minHeight: 400, overflow: 'scroll', }}>{this.state.currentUser == null ? '' : this.currentConvoFeed()}</div>
                <Segment color='red'>
                  <form onSubmit={this.handleSubmitForm}>
                    <Input.TextArea placeholder='Type Message Here' value={this.state.texted} onChange={this.handleChange} rows={4} />
                    <ButtonSUR type='submit'>Send Message</ButtonSUR>
                  </form>
                </Segment>
              </div>

            </Grid.Column>}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}




const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, null)
)(AdminChat);

