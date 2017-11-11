import React from 'react';
import IndexCate from 'IndexCate';
import IndexPost from 'IndexPost';

class AdminIndex extends React.Component{
  render(){
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>Dashboard
                    <small>Version 2.0</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a>
                    </li>
                    <li className="active">Dashboard</li>
                </ol>
            </section>
            <section className="content">
                <div className="row">
                    <IndexCate/>
                    <IndexPost/>
                </div>
            </section>
        </div>
    )
  }
}

module.exports = AdminIndex;
