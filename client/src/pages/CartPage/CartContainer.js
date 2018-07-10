import _ from 'lodash'
// import React, { Component } from 'react'
import React, { PureComponent , Component} from 'react';
import { Link , withRouter } from "react-router-dom";
import {Footer} from '../../components/homecomponents';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'; 
import '../../assets/css/borrowcss.css';
import '../../assets/css/carrausel.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Table as ReactTable }  from 'reactstrap';
import ProductsList from "../../components/productsList";
// import Button from '@material-ui/core/Button';
import {Icon as MUIIcon} from '@material-ui/core/Icon';
import {
  Form,
// Button,
  Container,
  Grid,
  // Icon,
  Image,
  Responsive,
  Segment,
  Popup, 
 
  Accordion,
  Dropdown, 
  TextArea
} from 'semantic-ui-react/dist/commonjs';
import { InputNumber ,Button, Icon, Input} from 'antd';
import {Col, Row, Panel, Badge} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {deleteFromCart, updateItemUnits} from '../../actions/cartActions';
import localStorage from 'localStorage';

   // A button with complex overrides
// import Button from 'react-toolbox/lib/button'; // Bundled component import
import ReactDOM from 'react-dom';
const ButtonGroup = Button.Group;

class CartContainer extends Component {
  state = {}

  // handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render() {
    return (
      <div>
        <Container>
       
          <Segment style={{ marginBottom: 12 }}>
            <Segment.Group>
              <CartTableRedux />
              {/* <CartTable /> */}
            </Segment.Group>
          </Segment>

          <Segment>
            <CartAccordionFluid />
          </Segment>
          <Segment style={{ marginTop: '12px', marginBottom: '12px' }}>
            <TotalSegment />
          </Segment>

          <Segment>

            {/* <Responsive as={Segment} minWidth={481}>
              <Grid>
                <Grid.Column floated='left' width={5}>
                  <button className="button button-cart btn" style={{ float: 'left' }} type="button" id="button-cart" data-loading-text="Loading...">
                    Continue Shooping
                  </button>
                </Grid.Column>
                <Grid.Column floated='right' width={5}>
                  <button className="button button-cart btn" style={{ float: 'right' }} type="button" id="button-cart" data-loading-text="Loading...">
                    Proceed to Checkout    
                  </button>
                </Grid.Column>
              </Grid>
            </Responsive> */}

            {/* <Responsive as={Segment} maxWidth={480}>
              <Button.Group>
                <Button secondary className='iconCartBtn' id="testRedColor" >Continue Shooping</Button>
                <Button.Or />
                <Button secondary className='iconCartBtn'>Proceed to Checkout</Button>
              </Button.Group>
            </Responsive> */}

          </Segment>
          <Segment>
            
<ProductsList/>
          </Segment>
      
        </Container>
      </div>
    )
  }
}






export default CartContainer


 class CartTable extends React.Component {
 onChange(value) {
    console.log('changed', value);
  }
  renderCart() {
    return (
      <div>
         {this.cartList()}
      </div>
       
    );
}
handleDeleteFromCart(id) {
  console.log('I was triggered', id)
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
        // <Panel>
        //     <Row>
        //         <Col xs={12} sm={6}>
                    
        //         </Col>
        //     </Row>
        // </Panel>
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
      <div className='search-table-outter '>
      <ReactTable >
        <thead style={{backgroundColor:'#f9fafb'}}>

          <tr>
            <th></th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Change Quantity</th>
          </tr>

        </thead>
        <tbody>
          {this.cartList()}
        </tbody>
      </ReactTable>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
      cart: state.cart
  }
}
function mapActionsToProps(dispatch) {
  return bindActionCreators({
      deleteFromCart,
      updateItemUnits
  }, dispatch);
}

const CartTableRedux = connect(mapStateToProps, mapActionsToProps)(CartTable);



class PreTotalSegment extends Component {
  totalAmount(cartArray) {
    return cartArray.reduce((acum, item) => {
       
        acum += item.price * item.units

        return acum;
    }, 0);
}

  render() {
    return (
      <div>
         <Segment.Group compact floaded='right' >
    <Segment padded compact><span style={{ fontWeight: 'bold' }}>Shipping, taxes, and discounts will be <br />calculated at checkout.</span></Segment>
    <Segment.Group horizontal>
      <Segment padded compact> <span style={{ fontWeight: 'bold' }}>Subtotal:</span> </Segment>
      <Segment padded compact><span style={{ color: 'red' }}>$ {this.totalAmount(this.props.cart).toFixed(2)}</span> </Segment>
    </Segment.Group>
  </Segment.Group>
        
      </div>
    )
  }
}

const TotalSegment = connect(mapStateToProps, null)(PreTotalSegment);

class CartItem extends React.Component {

  render() {

      return (
        <tr>
        <th scope="row">
        <Image  className='responsiveTableImage' src='https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467' />
        </th>
        <td>{this.props.cartItem.title}</td>
        <td>   <div style={{ maxWidth:60 }} >
<Input readOnly  size={44} onChange={this.onChange}  value={this.props.cartItem.units} maxWidth={60}/>
<span className="input-group-btn">

</span>
</div></td>
        <td>{this.props.cartItem.price}</td>
        <td> {(this.props.cartItem.units * this.props.cartItem.price).toFixed(2)} </td>
        <td>  <ButtonGroup>
  
 

  <Popup
      trigger={
        <Button type="primary"  ghost onClick={() => this.props.onAddUnit()}>
          <Icon type="plus-square" />
  
      </Button>    
    }
      content='add'
      position='top center'
    />
    <Popup
      trigger={
        <Button type="primary" ghost onClick={() => this.props.onDeductUnit()} >
        <Icon type="minus-square-o" />
      </Button>      }
      content='subtract'
      position='top center'
    />
      <Popup
      trigger={
        <Button type="danger" ghost onClick={() => this.props.handleDeleteFromCart()}>
        <Icon type="delete" />Delete
      </Button>      }
      content='Delete Item'
      position='top center' 
    />
     </ButtonGroup></td>
      </tr>

          // <Panel className='cartItem'>
          //     <Row>
          //         <Col xs={12} sm={6}>
          //             <h5>{this.props.cartItem.title} <Badge pullRight>Price: INR {this.props.cartItem.price}</Badge></h5>
          //         </Col>
          //         <Col xs={6} sm={4}>
          //             <p>units :&nbsp;
          //                 <Label bsStyle='success'> {this.props.cartItem.units} </Label>
          //                 &nbsp;
          //                 <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>
          //                 <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
          //             </p>
          //         </Col>
          //         <Col xs={6} sm={2}>
          //             <Button onClick={() => this.props.handleDeleteFromCart()}
          //                     bsSize='small' bsStyle='danger'>DEL</Button>
          //         </Col>
          //     </Row>
          // </Panel>
      );
  }
}

class CartAccordionFluid extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    // stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]

    return (
      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Calculate Shipping
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Form>
            {/* options={stateOptions} */}
            <Form.Field required>
              <label>State</label>
              <Dropdown placeholder='State' fluid search selection />
            </Form.Field>
            <Form.Field required>
              <label>City</label>
              <Input placeholder='City' />
            </Form.Field>
            <Form.Field required>
              <label>Zip Code</label>
              <Input placeholder='Zip Code' />
            </Form.Field>
            <button className="button button-cart btn" type="button" id="button-cart" data-loading-text="Loading...">
              <i class="fa fa-calculator"></i> Calculate
        </button>
          </Form>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Leave Seller a Note
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Form>
            <TextArea placeholder='Leave Seller a Note' />
            <button className="button button-cart btn" type="button" id="button-cart" data-loading-text="Loading...">
              Submit
            </button>
          </Form>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          How do you acquire a dog?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to
            {' '}assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your
            {' '}dog from a shelter, helps give a good home to a dog who may not find one so readily.
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}




//Rating stars













