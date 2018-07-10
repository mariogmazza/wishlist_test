import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import * as routes from './constants/routes';
// import { firebase } from './firebase';
// import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Shop from './pages/ShopPage/Shop';


// import SelectedItem from './pages/ItemPage/'
import TempItemPage from './pages/ItemPage/Test_NAVBAR/Navbar_test'



import CartContainer from './pages/CartPage/CartContainer'
import Checkout from './pages/CheckoutPage/Checkout'
import GuessCheckout from './pages/GuessCheckoutPage/GuessCheckout';
import GuestPayment from './pages/GuestPaymentPage/GuestPayment';
import LoginForm from './pages/LoginPage/LoginPage'
import ResetForm from './pages/PassRecPage/PassRecPage'
import AccountPage from './pages/AccountPage/AccountPage';
import ContactPage from './pages/Contact/ContactPage'
// import Contact from './pages/admin_chat';
import NoMatch from "./pages/NoMatch";
import Main from "./pages/Main";
import { auth } from './firebase';
import withAuthentication from './components/withAuthentication';
import ChatRoom from './pages/chat/chatroom'
import AdminChat from './pages/admin_chat';
import CatagoriesSub from './pages/Category/CategoryPage'
import Catagories2Sub from './pages/Category2/Category2Page';
import ItemContainer from './pages/ItemPage/Product_Images/Item_Product_Container/ItemProductContainer';




class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   authUser: null,
    // };
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: '',
  //   };
  // }


  // componentDidMount() {
    
  //   firebase.auth.onAuthStateChanged(authUser => {
  //     authUser
  //       ? this.setState(() => ({ authUser }),()=>{ console.log("the authUser",this.state.authUser)})
  //       : this.setState(() => ({ authUser: null }),()=>{ console.log("the authUser",this.state.authUser)});
  //   });
    
  // }







  
  render() { 
    return (
      <Router>
      {/* <Main authUser={checkAuth} username={this.state.username} > */}
        <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}${routes.LANDING}`} 
  render={() =>  <Redirect to={`${routes.ALL_PRODUCTS}`}/>}/>
        {/* <Route
            exact path={`${process.env.PUBLIC_URL}${routes.LANDING}`}
            component={LandingPage}
          /> */}
          <Route
            exact path={`${process.env.PUBLIC_URL}${routes.HOME}`}
            component={HomePage}
          />
            <Route
            exact path={`${process.env.PUBLIC_URL}${routes.SHOP}`}
            component={Shop}
          />

           <Route
            exact path={`${process.env.PUBLIC_URL}${routes.ACCOUNT}`}
            component={AccountPage}
          />
           <Route
              path={`${process.env.PUBLIC_URL}${routes.SUB_CAT_ID}`}
              component={LandingPage} />

          <Route
              path={`${process.env.PUBLIC_URL}${routes.SUB_CAT_ID2}`}
              component={Catagories2Sub} />

            <Route
            exact path={`${process.env.PUBLIC_URL}${routes.ITEM}`}
            component={TempItemPage} // Im woring on this route for the wishlist
          />

               <Route
            exact path={`${process.env.PUBLIC_URL}${routes.CART}`}
            component={CartContainer}
          />
                  <Route
            exact path={`${process.env.PUBLIC_URL}${routes.CHECKOUT}`}
            component={Checkout}
          />
               <Route
            exact path={`${process.env.PUBLIC_URL}${routes.GUESSCHECKOUT}`}
            component={GuessCheckout}
          />
                <Route
            exact path={`${process.env.PUBLIC_URL}${routes.GUESTPAYMENT}`}
            component={GuestPayment}
          />
               <Route
            exact path={`${process.env.PUBLIC_URL}${routes.LOGINFORM}`}
            component={LoginForm}
          />
              <Route
            exact path={`${process.env.PUBLIC_URL}${routes.PASSWORDRESET}`}
            component={ResetForm}
          />
              <Route
            exact path={`${process.env.PUBLIC_URL}${routes.CHAT}`}
            component={ChatRoom}
          />

            <Route
            exact path={`${process.env.PUBLIC_URL}${routes.ADMINCHAT}`}
            component={AdminChat}
          />


        
               <Route
            exact path={`${process.env.PUBLIC_URL}${routes.CONTACT}`}
            component={ContactPage}
          />
           
           
             {/* <Route
            exact path={`${process.env.PUBLIC_URL}${routes.PRODUCT_PAGE}`}
            component={ProductPage}
          /> */}


              <Route component={NoMatch} />
          </Switch>
            {/* </Main> */}

      </Router>
    );
  }
}

export default withAuthentication(App);
