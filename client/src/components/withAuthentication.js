// import React from 'react';
// import AuthUserContext from './AuthUserContext';
// import { firebase } from '../firebase';

// const withAuthentication = (Component) => {
//   class WithAuthentication extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         authUser: null,
//       };
//     }

//     componentDidMount() {
//       firebase.auth.onAuthStateChanged(authUser => {
//         authUser
//           ? this.setState(() => ({ authUser }))
//           : this.setState(() => ({ authUser: null }));
//       });
//     }

//     render() {
//       const { authUser } = this.state;
//       console.log(authUser)
//       return (
//         <AuthUserContext.Provider value={authUser}>
//         <Component />
//       </AuthUserContext.Provider>
//       );
//     }
//   }

//   return WithAuthentication;
// }

// export default withAuthentication;
////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { connect } from 'react-redux';

import { firebase } from '../firebase';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      console.log('withAuthentication',this.props)
      const { onSetAuthUser } = this.props;

      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? onSetAuthUser(authUser)
          : onSetAuthUser(null);
      });
    }

    render() {
      return (
        <Component />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onSetAuthUser: (authUser) => dispatch({ type: 'AUTH_USER_SET', authUser }),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;