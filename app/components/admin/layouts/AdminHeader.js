import React from 'react';
import Login from 'Login';


class Header extends React.Component{
  render(){
    return (
      <header className="main-header">
        <a href="#/admin" className="logo">
            <span className="logo-mini"><b>A</b>LT</span>
            <span className="logo-lg"><b>Admin</b>VIETHOME</span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li className="dropdown messages-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-envelope-o"></i>
                            <span className="label label-success">4</span>
                        </a>
                    </li>
                    <li className="dropdown notifications-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-bell-o"></i>
                            <span className="label label-warning">10</span>
                        </a>
                    </li>
                    <li className="dropdown tasks-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-flag-o"></i>
                            <span className="label label-danger">9</span>
                        </a>
                    </li>
                    <li className="dropdown user user-menu">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="img/admin/user2-160x160.jpg" className="user-image" alt="User Image"/>
                            <span className="hidden-xs">Alexander Pierce</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="img/admin/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                                <p>
                                    Alexander Pierce - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            <li className="user-body">
                                <div className="row">
                                    <div className="col-xs-4 text-center">
                                        <a href="#">Followers</a>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <a href="#">Sales</a>
                                    </div>
                                    <div className="col-xs-4 text-center">
                                        <a href="#">Friends</a>
                                    </div>
                                </div>
                            </li>
                            <li className="user-footer">
                                <div className="pull-left">
                                    <a href="#" className="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div className="pull-right">
                                    <a href="#" className="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
  }
}
module.exports = Header;