import React from 'react';
import axios from 'axios';

class EditCate extends React.Component{
    constructor(props, context) {
        super(props, context);
          
        }
	componentDidMount() {
	}
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Edit Category
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#/admin"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#/admin/category">Category</a></li>
                        <li className="active">Edit Category</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row ">
                        <div className="box">
                            <div className="col-md-12 text-center">
                                <div className="create ">
                                    <div className="box box-info">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Edit Category</h3>
                                        </div>
                                        <form className="form-horizontal">
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label for="inputEmail3" className="col-sm-2 control-label">Title</label>
                                                    <div className="col-sm-10">
                                                        <input type="email" className="form-control" placeholder="Title Category"/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="inputPassword3" className="col-sm-2 control-label">Description</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" placeholder="Description"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-footer">
                                                <button type="submit" className="btn btn-default pull-left">Cancel</button>
                                                <button type="submit" className="btn btn-info pull-right">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
  }
}

module.exports = EditCate;
