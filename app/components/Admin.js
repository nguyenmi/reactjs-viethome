import React from 'react';
import axios from 'axios';
import Notification from 'Notification';
import {connect} from 'react-redux';
import AdminHeader from 'AdminHeader';
import AdminNavbar from 'AdminNavbar';

class Admin extends React.Component{
  render(){
    var {notification} = this.props;
    var xhtml = notification != null? <Notification txt={notification}/>: null;
    return (
        <div className="skin-blue sidebar-mini" >
            <div className="wrapper" >
                <AdminHeader/>
                <AdminNavbar/>
                {xhtml}
                {this.props.children}
            </div>
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {notification: state.notification}
})(Admin);
