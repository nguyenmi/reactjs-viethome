var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var redux = require('redux');
var {Provider} = require('react-redux');

var username = (state = null, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.username;
    case 'LOG_OUT':
      return null;
    default:
      return state;
  }
}

var notification = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.txt;
    case 'HIDE_NOTIFICATION':
      return null;
    default:
      return state;
  }
}

var reducer = redux.combineReducers ({username, notification});
var store = redux.createStore(reducer);

var HomePage = require('HomePage');
var Nav = require('Nav');
var Account = require('Account');
var Transaction = require('Transaction');
var Main = require('Main');
var NewPage = require('NewPage');
var DetailNews = require('DetailNews');
var VideoPage = require('VideoPage');
var DetailVideo = require('DetailVideo');
var AccountLogin = require('AccountLogin');
var Login = require('Login');
var AccountRegester = require('AccountRegester');
var ListCate = require('ListCate');
var CreateCate = require('CreateCate');
var EditCate = require('EditCate');
var ListPost = require('ListPost');
var CreatePost = require('CreatePost');
var EditPost = require('EditPost');
var Admin = require('Admin');
var AdminIndex = require('AdminIndex');
var requireLogin = (nextState, replace, next) => {
  if(store.getState().username === null){
    replace('/');
    store.dispatch({type: 'SHOW_NOTIFICATION', txt: 'You must sign in firts!'})
  }
  next();
}


require('style!css!sass!./css/all.scss');
require('style!css!sass!./css/responsive.scss');
require('style!css!sass!./css/admin/alladmin.scss');
$(document).ready(() => $(document).foundation());

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Router path="/" component={Main}>
        <IndexRoute component={HomePage}/>
        <Route path="news" component={NewPage}/>
        <Route path="detailnews/:id" component={DetailNews}/>
        <Route path="video" component={VideoPage}/>
        <Route path="detailvideo/:id" component={DetailVideo}/>
        <Route path="transaction" component={Transaction} onEnter={requireLogin}/>
      </Router>
      <Router path="login" component={AccountLogin}>
      </Router>
      <Router path="regester" component={AccountRegester}>
      </Router>
      <Router path="/admin" component={Admin}>
        <IndexRoute component={AdminIndex}/>
        <Route path="category" component={ListCate}/>
        <Route path="createcategory" component={CreateCate}/>
        <Route path="editcategory/:id" component={EditCate}/>
        <Route path="post" component={ListPost}/>
        <Route path="createpost" component={CreatePost}/>
        <Route path="editpost/:id" component={CreatePost}/>
      </Router>
    </Router>
  </Provider>,
  document.getElementById('root')
);
