// import React from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'recompose';
// import { withRouter } from 'react-router-dom';
// import { firebase } from '../firebase';
// import * as routes from '../constants/routes';
// import AuthUserContext from './AuthUserContext';


// const withAuthorization = (authCondition) => (Component) => {
//   class WithAuthorization extends React.Component {
//     componentDidMount() {
//       firebase.auth.onAuthStateChanged(authUser => {
//         if (!authCondition(authUser)) {
//           this.props.history.push(routes.LOGINFORM);
//         }
//       });
//     }

//     render() {
//       return (
//         <AuthUserContext.Consumer>
//           {authUser => authUser ? <Component authUser={authUser}/> : null}
//         </AuthUserContext.Consumer>
//       );
//     }
//   }

//   return withRouter(WithAuthorization);
// }

// export default withAuthorization;


import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { firebase } from '../firebase';
import * as routes from '../constants/routes';

const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.LOGINFORM);
        }
      });
    }

    render() {

      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });

  return compose(withRouter,connect(mapStateToProps))(WithAuthorization);
}

export default withAuthorization;