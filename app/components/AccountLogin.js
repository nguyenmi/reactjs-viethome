import React from 'react';
import axios from 'axios';
import Notification from 'Notification';
import {connect} from 'react-redux';
import Login from 'Login';


class AccountLogin extends React.Component{
  render(){
    var {notification} = this.props;
    var xhtml = notification != null? <Notification txt={notification}/>: null;
    return (
        <div className="hold-transition login-page" >
          <Login/>
          {xhtml}
          {this.props.children}
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {notification: state.notification}
})(AccountLogin);
