import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import paragraph from '../../assets/images/shortparagraph.png'
import Brakes from '../../assets/images/brakes.jpg'
import PropTypes from 'prop-types'
import {Button,Container,Divider,Grid,Header,Icon,Item,Image,Menu,Responsive,Segment,Sidebar,Visibility, Dropdown, Card, Popup, Label, Input, Sticky,Rail, Rating, Accordion, Form, 
} from 'semantic-ui-react/dist/commonjs'


export default class MobileContainer extends Component {
  state = {}

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { visible } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover'  icon='labeled' vertical  visible={sidebarOpened}>
          <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
              </Container>
              {/* <HomePageCarousel mobile /> */}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}


