import React from 'react';
import IndexCate from 'IndexCate';
import IndexPost from 'IndexPost';


class AdminNavbar extends React.Component{
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        $(".show").click(function(){
            $(".menu").slideToggle();
        });
        $(".show1").click(function(){
            $(".menu1").slideToggle();
        });
    }
    render(){
        return (
            <div className="main-sidebar">
                <section className="sidebar" >
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/admin/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>Mì nguyễn</p>
                            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                            </button>
                        </span>
                        </div>
                    </form>
                    <ul className="sidebar-menu">
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                <span className="pull-right-container">
                                </span>
                            </a>
                        </li>
                        <li className="treeview">
                            <a className="show1">
                                <i className="fa fa-edit"></i> <span>Forms</span>
                                <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu menu1">
                                <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a>
                                </li>
                                <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a>
                                </li>
                                <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a>
                                </li>
                            </ul>
                        </li>
                        <li className="treeview">
                            <a className="show">
                                <i className="fa fa-table"></i> <span>Tables</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu menu">
                                <li><a href="#/admin/category"><i className="fa fa-circle-o"></i> Category</a>
                                </li>
                                <li><a href="#/admin/post"><i className="fa fa-circle-o"></i> Post</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        )
  }
}

module.exports = AdminNavbar;
