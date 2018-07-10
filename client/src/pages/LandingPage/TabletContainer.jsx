import React, { Component } from 'react';
export default class TabletContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    console.log(...Responsive)

    return (
      <Responsive {...Responsive.onlyTablet}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
          <Menu
  fixed={fixed ? 'top' : null}
  inverted={!fixed}
  pointing={!fixed}
  secondary={!fixed}
  size='large'
>
  <Container>
    <Menu.Item>
    <Button content='Click Here' />
      {/* <Image size='mini' src={logo} alt="logo" /> */}
    </Menu.Item>
    <Menu.Item as='a' active>Home</Menu.Item>
    <Menu.Item as='a'>Shop</Menu.Item>
    <Menu.Item as='a'>Company</Menu.Item>
    <Menu.Item as='a'>Careers</Menu.Item>
    <Menu.Item>
      <SearchCategory />
    </Menu.Item>
    {/* <Menu.Item position='right'>
      <Button as='a' inverted={!fixed}>Log in</Button>
      <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
    </Menu.Item> */}
    {/* <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover'>
      <Popover placement="bottomRight" title='CART' className='iconRedHover' content={NavBarCartcontent()} trigger="click" style={{ minWidth: 300 }}>
        <button className='iconRedHover' style={{ backgroundColor: 'transparent', border: 'none' }}>
          <Icon name='shop' size='large' className='iconRedHover' />
          <span id="cart-total">3</span>
        </button>
      </Popover>
    </Menu.Item> */}
  </Container>
</Menu>
         
            <HomePageCarousel />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

TabletContainer.propTypes = {
  children: PropTypes.node,
}
