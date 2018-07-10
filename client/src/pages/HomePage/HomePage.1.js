import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import {Footer} from '../../components/homecomponents';
import logo from '../../assets/images/logo.svg'
import shoppingcart from '../../assets/images/shoppingcart.svg'
import cargaragesvg from '../../assets/images/cargaragesvg.svg'
import whitegarage from '../../assets/images/whitegarage.svg'
import carInGarage from '../../assets/images/car-in-garage.svg'
import finalGarage from '../../assets/images/finalgarage.svg'
import whitecart from '../../assets/images/whitecart.svg'
import blackcart from '../../assets/images/blackcart.svg'
import wishlistwhite from '../../assets/images/wishlistwhite.svg'
import wishlistblack from '../../assets/images/wishlistblack.svg'
import paragraph from '../../assets/images/shortparagraph.png'
import Brakes from '../../assets/images/brakes.jpg'
import TruckFiltered1 from '../../assets/images/truck_filtered1.jpg'
import Truck2 from '../../assets/images/truck2.jpg'
import Truck3 from '../../assets/images/truck3.jpg'
import Truck4 from '../../assets/images/truck4.jpg'
import PropTypes from 'prop-types'
import SearchCategory from '../../components/NavSearch/navSearchComponent';
import {Button,Container,Divider,Grid,Header,Icon,Item,Image,List,Menu,Responsive,Segment,Sidebar,Visibility, Dropdown, Card, Popup, Label, Input, Sticky, Rail, Rating,Pagination, Accordion, Form, Checkbox, Tab, Select
} from 'semantic-ui-react'
import { Popconfirm, Popover, Message, Badge, Menu as Menuantd, Icon as AntIcons, Carousel, Tabs, Card as CardAntd , Timeline, Button as AntdButton, Modal} from 'antd';
import SignOutButton from '../../firebase/SignOut';
import AuthUserContext from '../../components/AuthUserContext';




/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

/////////////////////////////////////////////////////////////////////////////////////////////
const NavBarWishListContent = () => 
  <div>
    <Item.Group divided>

      <Item>
        <Item.Content verticalAlign='middle'>
          <div style={{ maxWidth: 400 }}>
            <Button fluid positive> + Create A Wish List</Button>
          </div>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>
        <p style={{textAlign:'center'}}>Wish Lists allow you to <span style={{fontWeight:'bold' }}>Save</span> products</p>
          {/* <div style={{ maxWidth: 400 }}>
            <Button fluid positive> + Create A Wish List</Button>
          </div> */}
        </Item.Content>
      </Item>
    
    </Item.Group>
  </div>

const NavBarWishListTitle = () => 
<div>
  <Item>
    <Item.Content verticalAlign='center'>
      <h2 style={{textAlign:'center', marginTop:20, marginBottom:20}}><Icon name='heart'/>Wish List</h2>
    </Item.Content>
  </Item>
</div>

////////////////////////////////////////////////////////////////////////////////////////////////////
const yearOptions = [{ key: '2019', value: '2019', flag: 'af', text: '2019' }, ...{}]
const makeOptions = [{ key: 'FORD', value: 'FORD', text: 'FORD' }]
const modelOptions = [{ key: 'F-150', value: 'F-150',  text: 'F-150' }, ...{}]

const SelectYear = () => (
  <Select placeholder='Select Year' options={yearOptions} />
)

const SelectMake = () => (
  <Select placeholder='Make' options={makeOptions} />
)

const SelectModel = () => (
  <Select placeholder='Model' options={modelOptions} />
)

const panes = [
  {
    menuItem: { key: 'users', icon: 'car', content: 'Select Vehicle' },
    render: () =>
      <Tab.Pane attached={false}>
        <h1 style={{ color: '#dc3d31', fontWeight: 10 }}>Select Vehicle</h1>
        <SelectYear />
        <SelectMake />
        <SelectModel />
      </Tab.Pane>
  },
  {
    menuItem: 'Search By Part #', textAlign: 'center',
    render: () =>
      <Tab.Pane attached={false}>
        <h1 style={{ color: '#dc3d31', fontWeight: 10 }}>Part Number</h1>
        <div style={{ marginLeft: '33.3%' }}>
          <SearchCategory fluid placeholder='Enter Part #' />
        </div>
      </Tab.Pane>
  },
  {
    menuItem: 'Other Filters',
    render: () => <Tab.Pane attached={false}>Other Filters</Tab.Pane>
  },
]


/////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////

class NavBarGarageButtons extends React.Component {
  state = {
    
    modal2Visible: false,
  }
  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }
  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  render() {
    return (
      <div>
    <Button.Group fluid>
    <Button secondary className='iconCartBtn' id='iconCartBtnLeft' onClick={() => this.setModal2Visible(true)}>+  Add Vehicle</Button>
    <Button.Or />
    <Button secondary className='iconCartBtn' id='iconCartBtnRight' >Clear History</Button>
    </Button.Group>
        <Modal
          // title="Vertically centered modal dialog"
          wrapClassName="vertical-center-modal"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          {/* <p>some contents...</p> */}
          
         
        </Modal>
      </div>
    );
  }
}

const NavBarGarageTitle = () => 
<div>
<Item.Group divided>
      <Item>
        <Item.Content verticalAlign='middle' textAlign='center'>
        <h4 style={{textAlign:'left', marginTop:20, marginBottom:20, fontWeight:'boldo'}}>Selected Vehicle History  <Icon name='list' style={{float:'right'}}/></h4>
       
        </Item.Content>
      </Item>
  </Item.Group>
</div>



const NavBarGarageContent = () => 
  <div style={{minWidth:500}}>
    <Timeline>
      <Timeline.Item>GMC Sierra 2017 2500HD <span style={{ float: 'right' }}><AntdButton>Save</AntdButton> <AntdButton type="primary">Browse Catalog</AntdButton></span></Timeline.Item>
      <Timeline.Item>Ford F-150 2018 XLT <span style={{ float: 'right' }}><AntdButton>Save</AntdButton> <AntdButton type="primary">Browse Catalog</AntdButton></span></Timeline.Item>
      <Timeline.Item dot={<AntIcons type="check-circle-o" style={{ fontSize: '16px' }} />} color="red"><span style={{ fontWeight: 'bold' }}>Chevrolet Silverado 2016</span> <span style={{ float: 'right' }}><AntdButton>Save</AntdButton> <AntdButton type="primary">Browse Catalog</AntdButton></span></Timeline.Item>
      <Timeline.Item>Ford F-150 2018 XLT <span style={{ float: 'right' }}><AntdButton>Save</AntdButton> <AntdButton type="primary">Browse Catalog</AntdButton></span> </Timeline.Item>
    </Timeline>

      <Item>
        <Item.Content content={<NavBarGarageButtons />} >
        </Item.Content>
      </Item>
  </div>


 ////////////////////////////////////////////////////////////////////////

const NavBarCartTitle = () => 
<div>
<Item.Group divided>
      <Item>
        <Item.Content verticalAlign='middle' textAlign='center'>
        <h2 style={{textAlign:'center', marginTop:20, marginBottom:20}}><Icon name='cart'/>Shopping Cart</h2>
        </Item.Content>
      </Item>
  </Item.Group>
</div>

const NavBarCartButtons = () => 
  <div>
    <Button.Group fluid>
      <Button secondary className='iconCartBtn' id='iconCartBtnLeft'>View Cart</Button>
      <Button.Or />
      <Button secondary className='iconCartBtn' id='iconCartBtnRight' >Checkout</Button>
    </Button.Group>
  </div>

const NavBarCartcontent = () => 
  <div>
    <Item.Group divided>
    <Item >
        <Item.Image as='a' style={{maxWidth:70}} src={Brakes} />
        <Item.Content verticalAlign='middle'>Quantity:20  <Icon name='trash' size='large' className='iconRedHover' style={{float:'right'}}/></Item.Content>
      </Item>

      <Item  >
        <Item.Image as='a' style={{maxWidth:70}} src={Brakes} />
        <Item.Content verticalAlign='middle'>Quantity:20  <Icon name='trash' size='large' className='iconRedHover' style={{float:'right'}}/></Item.Content>
      </Item>

         <Item  >
        <Item.Image  as='a'style={{maxWidth:70}} src={Brakes} />
        <Item.Content verticalAlign='middle'>Quantity:20  <Icon name='trash' size='large' className='iconRedHover' style={{float:'right'}}/></Item.Content>
      </Item>
      <Item>
        <Item.Content content={NavBarCartButtons()} >
        </Item.Content>
      </Item>
    </Item.Group>
  </div>

const NavBarAccountContent = () => 
  <div>
    <Item.Group divided>

      <Item>
        <Item.Content verticalAlign='middle'>
          <div style={{ maxWidth: 400 }}>
          <AuthUserContext.Consumer>
    {authUser => authUser
      ? <SignOutButton />
      :  <Button fluid positive>Sign In</Button>
    }
  </AuthUserContext.Consumer>
            
          </div>
          <p style={{ maxWidth: 200, marginTop: 20 }}>New Customer? <a>Sign Up</a></p>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content verticalAlign='middle'>
          <Grid columns={3} divided>
            <Grid.Row textAlign='center'>
              <Grid.Column>
                <Icon name='user' size='large' />
                <p>Account</p>
              </Grid.Column>
              <Grid.Column>
                <Icon name='check' size='large' />
                <p>Orders</p>
              </Grid.Column>
              <Grid.Column>
                <Icon name='heart' size='large' />
                <p>Wish Lists</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Item.Content>
      </Item>

      <Item>
        <Item.Content >
          <p style={{ maxWidth: 200, marginTop: 20, fontWeight: 'bold', decoration: 'underline' }}><a>Create an Account</a></p>
          <p> To Personalize Experience </p>
        </Item.Content>
      </Item>
    </Item.Group>
  </div>

const NavBarAccountTitle = () => 
<div>
  <Item>
    <Item.Content verticalAlign='center'>
      <h2 style={{textAlign:'center', marginTop:20, marginBottom:20}}><Icon name='user'/>My Account</h2>
    </Item.Content>
  </Item>
</div>

const NavBarLiftKitsTitle = () => 
<div>
  <Item>
    <Item.Content verticalAlign='center'>
      <h2 style={{textAlign:'center', marginTop:20, marginBottom:20}}><Icon name='user'/>LiftKits and Suspensions</h2>
    </Item.Content>
  </Item>
</div>


const NavBarLiftKitsContent = () => (
  <div>
   {/* <CardAntd title="Card Title"> */}
  <CardAntd style={{maxWidth:900}}>
  <CardAntd.Grid style={gridStyle}> 
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column floated='left'>
        <Image src={Brakes} />
      </Grid.Column>
      <Grid.Column>
   Hello World is greate
      </Grid.Column>
    </Grid.Row>
    </Grid>
  </CardAntd.Grid>
  <CardAntd.Grid style={gridStyle}>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column floated='left'>
        <Image src={Brakes} />
      </Grid.Column>
      <Grid.Column>
   Hello World is greate
      </Grid.Column>
    </Grid.Row>
    </Grid>
  </CardAntd.Grid>
  <CardAntd.Grid style={gridStyle}>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Image src={Brakes} />
      </Grid.Column>
      <Grid.Column>
   Hello World is greate
      </Grid.Column>
    </Grid.Row>
    </Grid>  </CardAntd.Grid>
  <CardAntd.Grid style={gridStyle}>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Image src={Brakes} />
      </Grid.Column>
      <Grid.Column>
   Hello World is greate
      </Grid.Column>
    </Grid.Row>
    </Grid>  </CardAntd.Grid>
  <CardAntd.Grid style={gridStyle}>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Image src={Brakes} />
      </Grid.Column>
      <Grid.Column>
   Hello World is greate
      </Grid.Column>
    </Grid.Row>
    </Grid>  </CardAntd.Grid>
  <CardAntd.Grid style={gridStyle}>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Image src={Brakes} />
      </Grid.Column>
      <Grid.Column>
   Hello World is greate
      </Grid.Column>
    </Grid.Row>
    </Grid>  </CardAntd.Grid>
  <CardAntd.Grid style={gridStyle}>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Image src={Brakes} />
      </Grid.Column>
      <Grid.Column>
   Hello World is greate
      </Grid.Column>
    </Grid.Row>
    </Grid>  </CardAntd.Grid>
  <CardAntd.Grid style={gridStyle}>
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Image src={Brakes} />
      </Grid.Column>
      <Grid.Column>
   Hello World is greate
      </Grid.Column>
    </Grid.Row>
    </Grid>  </CardAntd.Grid>
</CardAntd>
</div>
  )

  const gridStyle = {
    width: '25%',
    textAlign: 'center',
    // maxWidth:200
  };




const CardExampleColored = () => (
  <Card.Group itemsPerRow={4}>

      <Card>
      <Card.Content>
      <Item>
      <Item.Image as='a' size='tiny' src={Brakes} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
      </Item.Content>
      </Item>
        <Image  size='mini' src={logo} />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>

    <Card>
    <Card.Content>
        <Image  size='mini' src={logo} />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
    <Card.Content>
        <Image  size='mini' src={logo} />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
        <Image  size='mini' src={logo} />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)


const CardCatagoriesGroups = () => (
<Dropdown text='Shopping' fluid  className= 'item'>
       <Dropdown.Menu> 
       <Dropdown.Item>
      <Grid centered  style={{width:800}} columns={3}>

          <Grid.Column textAlign='center'>
            <Card>
              <Card.Content>
                <Item>
                  <Item.Image as='a' size='tiny' src={Brakes} />
                </Item>
                <Card.Header>
                  Lift Kits and Suspensions
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>

         <Grid.Column textAlign='center'>
            <Card>
              <Card.Content>
                <Item>
                  <Item.Image as='a' size='tiny' src={Brakes} />
                </Item>
                <Card.Header>
                  Lift Kits and Suspensions
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>

        <Grid.Column textAlign='center'>
            <Card>
              <Card.Content>
                <Item>
                  <Item.Image as='a' size='tiny' src={Brakes} />
                </Item>
                <Card.Header>
                  Lift Kits and Suspensions
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Card>
              <Card.Content>
                <Item>
                  <Item.Image as='a' size='tiny' src={Brakes} />
                </Item>
                <Card.Header>
                  Lift Kits and Suspensions
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>

       <Grid.Column textAlign='center'>
            <Card>
              <Card.Content>
                <Item>
                  <Item.Image as='a' size='tiny' src={Brakes} />
                </Item>
                <Card.Header>
                  Lift Kits and Suspensions
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column textAlign='center'>
            <Card>
              <Card.Content>
                <Item>
                  <Item.Image as='a' size='tiny' src={Brakes} />
                </Item>
                <Card.Header>
                  Lift Kits and Suspensions
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
</Grid>
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
)

// NavBarLiftKitsContent


const  fixedMenuStyle  = {
  backgroundColor :  ' #fff ' ,
  border :  ' 1px solid #ddd ' ,
  boxShadow :  ' 0px 3px 5px rgba (0, 0, 0, 0.2) ' ,
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
  
    var textColor;
    var iconMargin;

    if (!fixed) { textColor = 'white' } else { textColor = 'black' }
    if (!fixed) { iconMargin = 0 } else { iconMargin = 3 }

    const sublabelStyle = {
      fontSize: 12,
      textAlign: 'center',
      color: textColor,
      marginBottom:iconMargin
    }
    
    console.log(...Responsive)
    

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
        <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
          {/* <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical> */}
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              style={fixed ? fixedMenuStyle : null}
            >
        <Container>
          <Menu.Item style={{ backgroundColor: 'transparent', pointer: 'none' }} className='iconRedHover'>
            <Popover
                placement="bottom"
                title={NavBarAccountTitle()}
                content={NavBarAccountContent()}
                trigger="hover"
                style={{ minWidth: 300 }}>
                <Button>
                  <span >My Account</span>
                  <p style={{ fontSize: 12 }} className='new-cycle-font'>Hello. Sign In</p>
                </Button>
              </Popover>
            </Menu.Item>
  
   
   <Popover 
    arrowPointAtCenter
      placement="bottom" 
      title={NavBarLiftKitsTitle()} 
      content={NavBarLiftKitsContent()} 
      trigger="hover"
     >
      <Menu.Item>
         Lift Kits 
      </Menu.Item>
    </Popover>
    
    <Popover 
      placement="bottom" 
      title={NavBarLiftKitsTitle()} 
      content={NavBarLiftKitsContent()} 
      trigger="hover"
      arrowPointAtCenter>
      <Menu.Item>
         Lift Kits 
      </Menu.Item>
    </Popover>
    
    <Popover 
      placement="bottom" 
      title={NavBarLiftKitsTitle()} 
      content={NavBarLiftKitsContent()} 
      trigger="hover"
      arrowPointAtCenter>
      <Menu.Item>
         Lift Kits 
      </Menu.Item>
    </Popover>

     <Popover 
      placement="bottom" 
      title={NavBarLiftKitsTitle()} 
      content={NavBarLiftKitsContent()} 
      trigger="hover"
      arrowPointAtCenter>
      
      <Menu.Item>
         Lift Kits 
      </Menu.Item>
    </Popover>
    
    <Popover 
      placement="bottom" 
      title={NavBarLiftKitsTitle()} 
      content={NavBarLiftKitsContent()} 
      trigger="hover"
      arrowPointAtCenter>
      <Menu.Item>
         Lift Kits 
      </Menu.Item>
    </Popover>
    
    <Popover 
      placement="bottom" 
      title={NavBarLiftKitsTitle()} 
      content={NavBarLiftKitsContent()} 
      trigger="hover"
      arrowPointAtCenter>
      <Menu.Item>
         Lift Kits 
      </Menu.Item>
    </Popover>

    <Menu.Item>
      <SearchCategory />
    </Menu.Item>
  

    <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover'>
      <Popover placement="bottomRight" title={NavBarCartTitle()}  className='iconRedHover' content={NavBarCartcontent()} trigger="hover" style={{ minWidth: 300 }}>
          <Badge count={5} showZero>
          <Image  size='mini' src={fixed ? blackcart : whitecart} /> 
          <p style={sublabelStyle}>Cart</p>
          </Badge>
      </Popover>
    </Menu.Item>

    <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover' >
    <Popover placement="bottomLeft" title={NavBarGarageTitle()}  className='iconRedHover' content={NavBarGarageContent()} trigger="hover click" >
        <Badge count={5} showZero>
        <Image  size='mini' inverted src={fixed ? cargaragesvg : finalGarage} />
        <p style={sublabelStyle}>Garage</p>
        </Badge>
    </Popover>
  </Menu.Item>

  <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover'>
    <Popover placement="bottomLeft" title={NavBarWishListTitle ()}  className='iconRedHover' content={NavBarWishListContent ()} trigger="hover" style={{ minWidth: 300 }}>
        <Badge count={5} showZero>
        <Image  size='mini' src={fixed ? wishlistblack : wishlistwhite} /> 
        <p style={sublabelStyle}>Wishlist</p>
        </Badge>
    </Popover>
  </Menu.Item>

 
  </Container>
</Menu>
      
            <HomepageHeading />
            {/* <FilterSearchForms/> */}
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

const TabPane = Tabs.TabPane;

DesktopContainer.propTypes = {
  children: PropTypes.node,
}




function onCarouselChange(a, b, c) {
  // console.log(a, b, c);
}


const HomepageHeading = ({ mobile }) => (
  <Carousel autoplay easing afterChange={onCarouselChange}>
    <div style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968')" }}>
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </div>

   <div style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968')" }}>
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </div>
    <div style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968')" }}>
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </div>
    <div style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968')" }}>
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </div>
  </Carousel>


)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class TabletContainer extends Component {
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
    <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover'>
      <Popover placement="bottomRight" title='CART' className='iconRedHover' content={NavBarCartcontent()} trigger="click" style={{ minWidth: 300 }}>
        <button className='iconRedHover' style={{ backgroundColor: 'transparent', border: 'none' }}>
          <Icon name='shop' size='large' className='iconRedHover' />
          <span id="cart-total">3</span>
        </button>
      </Popover>
    </Menu.Item>
  </Container>
</Menu>
         
            <HomepageHeading />
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




const friendOptions = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
  }
]

const DropdownExampleInline = () => (
  <span>
    Show me posts by
    {' '}
    <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
  </span>
)


class MobileContainer extends Component {
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
              <HomepageHeading mobile />
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




const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <TabletContainer>{children}</TabletContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}




const CardExampleGroupsItems = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
        <Card.Header>
          Steve Sanders
        </Card.Header>
        <Card.Meta>
          Friends of Elliot
        </Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/molly.png' />
        <Card.Header>
          Molly Thomas
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/jenny.jpg' />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/jenny.jpg' />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/jenny.jpg' />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/jenny.jpg' />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/jenny.jpg' />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='/assets/images/avatar/large/jenny.jpg' />
        <Card.Header>
          Jenny Lawrence
        </Card.Header>
        <Card.Meta>
          New User
        </Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Approve</Button>
          <Button basic color='red'>Decline</Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)





//Rating stars
class RatingExampleOnRate extends Component {
  state = {}

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render() {
    return (
      <div>
        <Rating   icon='star' maxRating={5} onRate={this.handleRate} style={{backgroundColor:'none'}} />
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    )
  }
}


const ItemContents = () => (
  <Item.Group divided>
    <Item>
      <Image circular className="ui large circular image" src='https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467' size="large" style={{ borderRadius: 12, maxHeight: 294, maxWidth:294 }} />
      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
       <Item.Meta>
        <Label style={{backgroundColor:'none'}}><RatingExampleOnRate /></Label>
          <Label as='a' color='yellow' tag>-33%</Label>
          <Label><p ><span id="comparePrice"><span data-currency-usd="$150.00" data-currency="USD" style={{ textDecoration: 'line-through' }}>$150.00</span></span></p></Label>

          <Label>   <p ><span id="productPrice"> <span ><span data-currency-usd="$100.00" data-currency="USD">$100.00</span></span></span></p>
          </Label>


          {/* <span className='cinema'>Union Square 14</span> */}
        </Item.Meta>
        <Item.Meta>
          <span  >Brand: <span style={{ color: 'red' }}> Toyo</span></span>
        </Item.Meta>
        <Item.Meta>
          <span  >Availability: <span style={{ color: 'red' }}> In Stock</span></span>
        </Item.Meta>
        <Item.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
          <Label>Limited</Label>
        </Item.Extra>
        <Item.Extra>
          <label className="control-label" htmlFor="Quantity">Qty:</label>
          <div className="quantity-box">
            <input type="text" name="quantity" value="1" size="2" id="Quantity" className="form-control" />
            <input type="button" id="minus" value="-" className="form-control" />
            <input type="button" id="plus" value="+" className="form-control" />
          </div>

          <button className="button button-cart btn" type="button" id="button-cart" data-loading-text="Loading..."> <Icon name='shop' size='big' />
            Add to Cart
        </button>


        </Item.Extra>
        
      </Item.Content>
    </Item>
    <Divider />
  </Item.Group>
)







const Placeholder = () =>  
  <Item.Group>
    <Item>
      <Item.Image size='large' src={Brakes} style={{maxWidth:294}}/>

      <Item.Content>
        <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>{<Image src={paragraph} />} </Item.Description>
      </Item.Content>
      <hr />
    </Item>
    <hr />
    <Item>
    <Item.Image size='large' src='https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968' />
      <Item.Content>
        <Item.Header>Buck's Homebrew Stayaway</Item.Header>
        <Item.Meta content='$1000 2 Weeks' />
        <Item.Description>{<Image src={paragraph} />}</Item.Description>
      </Item.Content>
    </Item>
    <hr />
    <Item>
    <Item.Image size='large' src='https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968' />
    <Item.Content>
        <Item.Header>Buck's Homebrew Stayaway</Item.Header>
        <Item.Meta content='$1000 2 Weeks' />
        <Item.Description>{<Image src={paragraph} />}</Item.Description>
        <hr />
      </Item.Content>
      </Item>
      <hr />
  </Item.Group>


const CatagoryForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='Red' name='color' value='red' />
      <Form.Checkbox label='Orange' name='color' value='orange' />
      <Form.Checkbox label='Green' name='color' value='green' />
      <Form.Checkbox label='Blue' name='color' value='blue' />
    </Form.Group>
  </Form>
)

const PriceRangeOps = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='< 50' name='50' value='50' />
      <Form.Checkbox label='50-100' name='50-100' value='50-100' />
      <Form.Checkbox label='100-300' name='100-300' value='100-300' />
      <Form.Checkbox label='300-500' name='300-500' value='300-500' />
    </Form.Group>
  </Form>
)

const BrandOps = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='Toyo' name='Toyo' value='Toyo' />
      <Form.Checkbox label='Good Year' name='Good Year' value='Good Year' />
      <Form.Checkbox label='Kumo' name='Kumo' value='Kumo' />
    </Form.Group>
  </Form>
)

const BrandsOps = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='< 50' name='50' value='50' />
      <Form.Checkbox label='50-100' name='50-100' value='50-100' />
      <Form.Checkbox label='100-300' name='100-300' value='100-300' />
      <Form.Checkbox label='300-500' name='300-500' value='300-500' />
    </Form.Group>
  </Form>
)

const StarOps = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='1 Stars' name='1 Stars' value='1 Stars' />
      <Form.Checkbox label='2 Stars' name='2 Stars' value='2 Stars' />
      <Form.Checkbox label='3 Stars' name='3 Stars' value='3 Stars' />
      <Form.Checkbox label='4 Stars' name='4 Stars' value='4 Stars' />
    </Form.Group>
  </Form>
)



const SizeForm = (
  <Form>
    <Form.Group grouped>
      <Form.Radio label='Small' name='size' type='radio' value='small' />
      <Form.Radio label='Medium' name='size' type='radio' value='medium' />
      <Form.Radio label='Large' name='size' type='radio' value='large' />
      <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
    </Form.Group>
  </Form>
)

const level1Panels = [
  { title: 'Level 1A', content: 'Level 1A Contents' },
  { title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    {PriceRangeOps}
    {/* <Accordion.Accordion panels={level1Panels} /> */}
  </div>
)

const level2Panels = [
  { title: 'Level 2A', content: 'Level 2A Contents' },
  { title: 'Level 2B', content: 'Level 2B Contents' },
]

const Level2Content = (
  <div>
    {PriceRangeOps}
    {/* <Accordion.Accordion panels={level2Panels} /> */}
  </div>
)

const Level3Content = (
  <div>
    {BrandOps}
    {/* <Accordion.Accordion panels={level2Panels} /> */}
  </div>
)

const Level4Content = (
  <div>
    {StarOps }
    {/* <Accordion.Accordion panels={level2Panels} /> */}
  </div>
)

const rootPanels = [
  { title: 'Catagory', content: { content: Level1Content, key: 'content-1' } },
  { title: 'Price Range', content: { content: Level2Content, key: 'content-2' } },
  { title: 'Brand', content: { content: Level3Content, key: 'content-3' } },
  { title: 'Rating', content: { content: Level4Content, key: 'content-4' } },
]

const AccordionExampleNested = () => (
  <Accordion defaultActiveIndex={[0,2]} panels={rootPanels} exclusive={false} styled />
)







 class StickyExamplePushing extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    console.log('the ref' ,contextRef);

    return (

      <Grid centered columns={2}> 
      <Grid.Row>
        
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
            <Grid divided='vertically'>

    <Grid.Row columns={3}>
      <Grid.Column>
        Show Items
    
                        <Button.Group basic>
                       
                         <Button active >60</Button>
                         
                             <Button>90</Button>
                             <Button>120</Button>
                           </Button.Group>
      </Grid.Column>
      <Grid.Column>
        Choose Page
      <Pagination
                           defaultActivePage={1}
                           firstItem={null}
                           lastItem={null}
                           pointing
                           secondary
                           totalPages={3}
                         />
      </Grid.Column>
      <Grid.Column>
        Choose View
      <Button.Group basic>
                         <Button><Icon size='large' name=' list layout'/></Button>
                            
                             <Button><Icon size='large' name='grid layout'/></Button>
                           </Button.Group>      </Grid.Column>
    </Grid.Row>
  </Grid>
  <hr/>
            {/* <span>Display Items : </span>
                        <Button.Group basic>
                       
                         <Button active >60</Button>
                         
                             <Button>90</Button>
                             <Button>120</Button>
                           </Button.Group>
                         
                           
                       
                       
                                 <Pagination
                           defaultActivePage={1}
                           firstItem={null}
                           lastItem={null}
                           pointing
                           secondary
                           totalPages={3}
                         />
                                  
                              
                         <Button.Group basic>
                         <Button><Icon size='large' name=' list layout'/></Button>
                            
                             <Button><Icon size='large' name='grid layout'/></Button>
                           </Button.Group>
                           <hr /> */}
              {_.times(5, i => (
                <div>
                       
              <ItemContents key={i} />
              
              </div>)
            
            
            )
              
              
              }
              {/* {_.times(5, i => <CardExampleGroupsItems key={i} />)} */}
              
              <Rail position='left'>
                <Sticky context={contextRef} pushing offset={120}>
                  <Header as='h3' style={{textAlign
                  :'center'}}>Stuck Content</Header>
                  {/* <Image src={logo} /> */}
                  {/* <Sider/> */}
                  <AccordionExampleNested />
            
                </Sticky>
              </Rail>

              {/* <Rail position='right'>
                {_.times(3, i => <Placeholder key={i} />)}

                <Sticky context={contextRef} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src={logo} />
                </Sticky>
              </Rail> */}
            </Segment>
          </div>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}


class CheckboxExampleRemoteControl extends Component {
  state = { checked: false }
  toggle = () => this.setState({ checked: !this.state.checked })

  render() {
    return (
      <div>
        {/* <Button onClick={this.toggle}>Toggle it</Button> */}
        <Checkbox label='Check this box' onChange={this.toggle} checked={this.state.checked} />
      </div>
    )
  }
}




// const panels = _.times(3, () => ({
//   title: faker.lorem.sentence(),
//   content: faker.lorem.paragraphs(),
// }))



// const ColorForm = (
//   <Form>
//     <Form.Group grouped>
//       <Form.Checkbox label='Red' name='color' value='red' />
//       <Form.Checkbox label='Orange' name='color' value='orange' />
//       <Form.Checkbox label='Green' name='color' value='green' />
//       <Form.Checkbox label='Blue' name='color' value='blue' />
//     </Form.Group>
//   </Form>
// )

// const SizeForm = (
//   <Form>
//     <Form.Group grouped>
//       <Form.Radio label='Small' name='size' type='radio' value='small' />
//       <Form.Radio label='Medium' name='size' type='radio' value='medium' />
//       <Form.Radio label='Large' name='size' type='radio' value='large' />
//       <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
//     </Form.Group>
//   </Form>
// )

// const panels = [{
//   title:'Item Price',
//   content: ColorForm 
// },
// {
//   title:'Item Price',
//   content:ColorForm
// }
// ]

// const AccordionExampleExclusive = () => (
//   <Accordion defaultActiveIndex={[0, 2]} panels={panels} exclusive={false} fluid />
// )


// const SubMenu = Menuantd.SubMenu;
// const MenuItemGroup = Menuantd.ItemGroup;

// class Sider extends React.Component {
//   handleClick = (e) => {
//     console.log('click ', e);
//   }
//   render() {
//     return (
//       <Menuantd
//         onClick={this.handleClick}
//         style={{ width: 256 }}
//         defaultSelectedKeys={['2']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//       >
//         <SubMenu key="sub1" title={<span><AntIcons type="mail" /><span>Price Range</span></span>}>
//           <Menuantd.Item key="1">Option 1</Menuantd.Item>
//           <Menuantd.Item key="2">Option 2</Menuantd.Item>
//           <Menuantd.Item key="3">Option 3</Menuantd.Item>
//           <Menuantd.Item key="4">Option 4</Menuantd.Item>
//         </SubMenu>
//         <SubMenu key="sub2" title={<span><AntIcons type="appstore" /><span>Manufacturer</span></span>}>
//         <Menuantd.Item key="1">Option 1</Menuantd.Item>
//             <Menuantd.Item key="2">Option 2</Menuantd.Item>
//           <SubMenu key="sub3" title="Submenu">
//           <Menuantd.Item key="1">Option 1</Menuantd.Item>
//             <Menuantd.Item key="2">Option 2</Menuantd.Item>
//           </SubMenu>
//         </SubMenu>
//         <SubMenu key="sub4" title={<span><AntIcons type="setting" /><span>Navigation Three</span></span>}>
//               <Menuantd.Item key="1">Option 1</Menuantd.Item>
//             <Menuantd.Item key="2">Option 2</Menuantd.Item>
//         </SubMenu>
//       </Menuantd>
//     );
//   }
// }








const HomePage= () => (
  <ResponsiveContainer>
     <Segment style={{ padding: '8em 0em' }} vertical>
    <StickyExamplePushing />

      </Segment>
        {/* <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
      <StickyExamplePushing />
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible. Let us delight
              your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
            </p>
          </Grid.Column>
      
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible. Let us delight
              your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the art of doing
          nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
          and worth your attention.
        </p>
        <Button as='a' size='large'>Read More</Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
          true.
          It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as='a' size='large'>I'm Still Quite Interested</Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Footer Header</Header>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomePage