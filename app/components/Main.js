import React from 'react';
import Nav from 'Nav';
import axios from 'axios';
import Notification from 'Notification';
import {connect} from 'react-redux';
import Header from 'Header';
import Footer from 'Footer';
import Account from 'Account';

class Main extends React.Component{
  render(){
    var {notification} = this.props;
    var xhtml = notification != null? <Notification txt={notification}/>: null;
    return (
      <div className="home-page">
        <Account/>
        <Header/>
        {xhtml}
        {this.props.children}
        <Footer/>
      </div>
    )
  }
  componentDidMount(){
    var {dispatch} = this.props;
    axios.get('/getInfo')
    .then(res => {
      if(res.data != 'CHUA_DANG_NHAP'){
        dispatch({type: 'LOG_IN', username: res.data});
      }
    })
    .catch(err => console.log('LOI'))
  }
}

module.exports = connect(function(state){
  return {notification: state.notification}
})(Main);
