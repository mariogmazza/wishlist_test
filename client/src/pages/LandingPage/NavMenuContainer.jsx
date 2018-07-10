
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cargaragesvg from '../../assets/images/cargaragesvg.svg'
import emptycart2 from '../../assets/images/emptycart2.jpg'
import blackcart from '../../assets/images/blackcart.svg'
import wishlistblack from '../../assets/images/wishlistblack.svg'
import Brakes from '../../assets/images/brakes.jpg'
import SearchCategory from '../../components/NavSearch/navSearchComponent';
import {Button,Container,Grid,Icon,Item,Image,Menu,Segment
} from 'semantic-ui-react/dist/commonjs'
import {  Popover,  Badge, Icon as AntIcons, Timeline, Button as AntdButton, Modal} from 'antd';
import SignOutButton from '../../firebase/SignOut';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {deleteFromCart, updateItemUnits} from '../../actions/cartActions';
import * as routes from '../../constants/routes';
import API from "../../utils/API";


///////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////


const mapStateToProps = (state) => ({
  searchCar:state.posts.browseCar,
  authUser: state.sessionState.authUser,
  cart:state.cart
});



///////////////////////////////////////////////////////////////////////////////



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
          wrapClassName="vertical-center-modal"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}>
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


 /////////////////////////////////////////////////////////////////////



const PreNavCartRedux = (props) => {

  var totalUnits = props.cart.reduce((acum, item) => {
    acum += item.units
    return acum;
  }, 0);

  return (
    <div>
      <Popover placement="bottomRight" title={NavBarCartTitle()} className='iconRedHover'
        content={<NavBarCartcontent {...props} totalUnits={totalUnits} />}
        trigger="hover" style={{ minWidth: 300 }}>
        <Badge count={totalUnits} showZero>
          <Image size='mini' src={blackcart} />
          {/* <Image  size='mini' src={fixed ? blackcart : whitecart} />  */}
     
        </Badge>
      </Popover>
    </div>
  )

}



const NavBarCartTitle = () =>
  <div>
    <Item.Group divided>
      <Item>
        <Item.Content verticalAlign='middle' textAlign='center'>
          <h2 style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}><Icon name='cart' />Shopping Cart</h2>
        </Item.Content>
      </Item>
    </Item.Group>
  </div>


  
  
class NavBarCartcontent extends Component {
  renderCart() {
    return (
      <div>
         {this.cartList()}
      </div>
       
    );
}
handleDeleteFromCart(id) {

    this.props.deleteFromCart({id})
}
handleDeductUnit(id) {
    let units = -1;
    this.props.updateItemUnits({id, units})
}
handleAddUnit(id) {
    let units = 1;
    this.props.updateItemUnits({id, units})
}


returnNavBarCartButtons (){
  if(this.props.totalUnits == 0){
    return (
      <div>
         <Image src={emptycart2} style={{maxWidth:300}}/>
      <h3 style={{textAlign:'center', marginTop:20, marginBottom:20}}>Your cart is empty</h3>
      </div>
    )


  } else {

    return(
      
      <div style={{minWidth:400}}>
        <div>
          <h4 style={{ textAlign: 'right', marginTop: 5, marginBottom: 15 }}>Subtotal: ${this.totalAmount(this.props.cart)}</h4>
        </div>
        <Button.Group fluid>
          <Button secondary className='iconCartBtn' id='iconCartBtnLeft' as='a' href='/cart' >View Cart</Button>
          <Button.Or />
        <Button secondary className='iconCartBtn' id='iconCartBtnRight' as='a' href='/checkout' >Checkout</Button>
        </Button.Group>
      </div>
     )
  }

}

cartList() {
    return (
        this.props.cart.map(cartItem => {
          return (
              <CartItem key={cartItem.id}
                        cartItem={cartItem}
                        onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                        onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                        handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
          );
        })
    );
}

cartTotal() {
    return (
      <h4>TOTAL: <Badge pullRight>Price: USD {this.totalAmount(this.props.cart).toFixed(2)}</Badge></h4>
    );
}

totalAmount(cartArray) {
    return cartArray.reduce((acum, item) => {
       
        acum += item.price * item.units

        return acum;
    }, 0);
}

    render() {
      return (
        <div>
          <Item.Group divided>
          {this.cartList()}
            {/* <Item>
              <Item.Image as='a' style={{ maxWidth: 70 }} src={Brakes} />
              <Item.Content verticalAlign='middle'>Quantity:20  <Icon name='trash' size='large' className='iconRedHover' style={{ float: 'right' }} /></Item.Content>
            </Item> */}

            <Item>
              <Item.Content content={this.returnNavBarCartButtons()} >
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      )
    }
  }
  


class CartItem extends React.Component {
  render() {
    return (
      <Item>
        <Item.Image as='a' style={{ maxWidth: 70 }} src={Brakes} />
       
        <Item.Content verticalAlign='middle'>
        <Item.Meta><Button basic floated='right' onClick={() => this.props.handleDeleteFromCart()}>
        <AntIcons type="close" ></AntIcons>
          </Button></Item.Meta>
        <Item.Description>{this.props.cartItem.title}</Item.Description>
        <Item.Meta>Qty: {this.props.cartItem.units} <span style={{fontWeight:'bold',color:'black', marginLeft:30}}>${(this.props.cartItem.units * this.props.cartItem.price).toFixed(2)}</span></Item.Meta>
        </Item.Content>
      </Item>
    );
  }
}

function mapActionsToProps(dispatch) {
  return bindActionCreators({
      deleteFromCart,
      updateItemUnits
  }, dispatch);
}




const  NavCartRedux = connect(mapStateToProps, mapActionsToProps)(PreNavCartRedux);
//////////////////////////////////////////////////////////////////////



class NavBarAccountContent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { authUser } = this.props
    return (
      <div>
        <Item.Group divided>
          <Item>
            <Item.Content verticalAlign='middle'>
              <div style={{ maxWidth: 400 }}>
                {authUser
                  ? <SignOutButton fluid positive />
                  : <Link to={routes.LOGINFORM}>
                    <Button fluid positive>Sign In</Button>
                  </Link>
                }
              </div>
              <p style={{ maxWidth: 200, marginTop: 20 }}>New Customer?<Link to={routes.LOGINFORM}> Sign Up</Link></p>
            </Item.Content>
          </Item>

          <Item>
            <Item.Content verticalAlign='middle'>
              <Grid columns={3} divided>
                <Grid.Row textAlign='center'>
                  <Grid.Column>
                    <Link to={routes.ACCOUNT}>
                      <Icon name='user' size='large' />
                      <p>Account</p>
                    </Link>
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
              <p style={{ maxWidth: 200, marginTop: 20, fontWeight: 'bold', decoration: 'underline' }}><Link to={routes.LOGINFORM}> Create an Account</Link></p>
              <p> To Personalize Experience </p>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    )
  }
}



const NewNavBarAccountContent = connect( mapStateToProps ,null)(NavBarAccountContent)

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
      <h2 style={{textAlign:'center', marginTop:20, marginBottom:20}}><Icon name='user'/>LiftKits and Suspensions doubled</h2>
    </Item.Content>
  </Item>
</div>




  const gridStyle = {
    width: '25%',
    textAlign: 'center',
    // maxWidth:200
  };




const  fixedMenuStyle  = {
  backgroundColor :  ' #fff ' ,
  border :  ' 1px solid #ddd ' ,
  boxShadow :  ' 0px 3px 5px rgba (0, 0, 0, 0.2) ' ,
}


export default class NavMenuContainer extends Component {
  state = {
    activeItem: 'home',
    topNavItems: []
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }, () => {
    API.getNavItemsTop(this.state.activeItem).then((res) => {
      this.setState({ topNavItems: res.data })
    })
  })

  
  render() {
 
    var textColor;
    var iconMargin;

    if (fixed) { textColor = 'white' } else { textColor = 'black' }
    if (!fixed) { iconMargin = 0 } else { iconMargin = 3 }


    const sublabelStyle = {
      fontSize: 12,
      textAlign: 'center',
      color: textColor,
      marginBottom:iconMargin
    }

    const { activeItem } = this.state
    const {fixed} = this.props

  

    return (
      <div>
        <Container>
          <Menu>
          <Menu.Item style={{ backgroundColor: 'transparent', pointer: 'none' }} className='iconRedHover'>
            <Popover
                placement="bottom"
                title={NavBarAccountTitle()}
                content={<NewNavBarAccountContent/>}
                trigger="hover"
                style={{ minWidth: 300 }}>
                <Button>
                  <span >My Account</span>
                  <p style={{ fontSize: 12 }} className='new-cycle-font'>Hello. Sign In</p>
                </Button>
              </Popover>
            </Menu.Item>
            <Menu.Item>
      <SearchCategory style={{width:400}}/>
    </Menu.Item>
  

    <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover'>
    <NavCartRedux />
    </Menu.Item>

    <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover' >
    <Popover placement="bottomLeft" title={NavBarGarageTitle()}  className='iconRedHover' content={NavBarGarageContent()} trigger="hover click" >
        <Badge count={5} showZero>
        <Image  size='mini' inverted src={cargaragesvg } />
        {/* <Image  size='mini' inverted src={fixed ? cargaragesvg : finalGarage} /> */}
        <p style={sublabelStyle}>Garage</p>
        </Badge>
    </Popover>
  </Menu.Item>

  <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover'>
    <Popover placement="bottomLeft" title={NavBarWishListTitle ()}  className='iconRedHover' content={NavBarWishListContent ()} trigger="hover" style={{ minWidth: 300 }}>
        <Badge count={5} showZero>
          <Image  size='mini' src={wishlistblack} />
        {/* <Image  size='mini' src={fixed ? wishlistblack : wishlistwhite} />  */}
        <p style={sublabelStyle}>Wishlist</p>
        </Badge>
    </Popover>
  </Menu.Item>

          </Menu>
        </Container>  
        <Menu pointing secondary >
        
        <Container>
          <Menu.Item name='Interior' active={activeItem === 'Interior'} onClick={this.handleItemClick} />
          <Menu.Item name='Exterior' active={activeItem === 'Exterior'} onClick={this.handleItemClick} />
          <Menu.Item name='Performance' active={activeItem === 'Performance'} onClick={this.handleItemClick} />
          <Menu.Item name='Lighting' active={activeItem === 'Lighting'} onClick={this.handleItemClick} />
          <Menu.Item name='Wheels & Tires' active={activeItem === 'Wheels & Tires'} onClick={this.handleItemClick} />
      
          <Menu.Item name='Body Parts' active={activeItem === 'Body Parts'} onClick={this.handleItemClick} />
          <Menu.Item name='Repair Part' active={activeItem === 'Repair Part'} onClick={this.handleItemClick} />
         
          <Menu.Item name='Tools & Garage' active={activeItem === 'Tools & Garage'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          {/* TODO://make sure this show up only when menu is visible and use icon */}
            <Menu.Item name='X'  onClick={this.handleItemClick} />
          </Menu.Menu>
          </Container>
        </Menu>

        <Segment>

        <Grid columns='four'>
        {this.state.topNavItems.map((item, index) => {
          return (
            <Grid.Column key={index}>
              <Link to={"/shop/" + item.linkto}>
                <Item.Group divided >
                  <Item>
                    <Image src={item.imglink} size="large" style={{ marginLeft: 12, maxHeight: 54, maxWidth: 54 }} />
                    <Item.Content>
                      <Item.Header as='a'>{item.title}</Item.Header>
                      <Item.Meta>
                        <span>{item.items}</span>
                      </Item.Meta>
                    </Item.Content>
                  </Item>
                  <hr />
                </Item.Group>
              </Link>
            </Grid.Column>
          )
        })}
      </Grid>
        </Segment>
      </div>
    )
  }
}

// import cargaragesvg from '../../assets/images/cargaragesvg.svg'
// import finalGarage from '../../assets/images/finalgarage.svg'
// import emptycart2 from '../../assets/images/emptycart2.jpg'
// import blackcart from '../../assets/images/blackcart.svg'
// import wishlistwhite from '../../assets/images/wishlistwhite.svg'
// import wishlistblack from '../../assets/images/wishlistblack.svg'