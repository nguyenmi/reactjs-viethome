import React from 'react';
import axios from 'axios';

class EditPost extends React.Component{
    constructor(props, context) {
        super(props, context);
          
        }
	componentDidMount() {
	}
    render(){
        return (
            <div className="content-wrapper ">
                <section className="content-header">
                    <h1>
                        Edit Post
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#/admin"><i className="fa fa-dashboard"></i>Home</a></li>
                        <li><a href="#/admin/post">Post</a></li>
                        <li className="active">Edit Post</li>
                    </ol>
                </section>
                <section className="content ">
                    <div className="row ">
                        <div className="box">
                            <div className="col-md-12 pd30">
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Edit Post</h3>
                                    </div>
                                    <form className="form-horizontal">
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Title</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control" placeholder="Title Category"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Image</label>
                                                <div className="col-sm-10">
                                                    <input type="file" id="exampleInputFile"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-2">
                                                    <label className="pull-right">Category</label>
                                                </div>
                                                <div className="col-md-10">
                                                    <select className="form-control">
                                                        <option>Catetegory 1</option>
                                                        <option>Catetegory 2</option>
                                                        <option>Catetegory 3</option>
                                                        <option>Catetegory 4</option>
                                                        <option>Catetegory 5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-2 ">
                                                    <label className="pull-right">Date:</label>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="input-group date">
                                                        <div className="input-group-addon">
                                                            <i className="fa fa-calendar"></i>
                                                        </div>
                                                    <input type="text" className="form-control pull-right" id="datepicker"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">View</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-2 control-label">body</label>
                                                <div className="col-md-10">
                                                    <textarea className="text-body" id="editor1" name="editor1" rows="10" cols="80"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-default pull-left">Cancel</button>
                                            <button type="submit" className="btn btn-info pull-right">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
  }
}

module.exports = EditPost;
