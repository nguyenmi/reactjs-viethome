import React from 'react';
import axios from 'axios';
import Pagination from 'Pagination';

class ListPost extends React.Component{
    constructor(props, context) {
    super(props, context);
        this.state ={
            listpost: [],
            pageOfPost: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfPost) {
        // update state with new page of items
        this.setState({ pageOfPost: pageOfPost });
    }
	componentDidMount() {
		this.getListPost();
	}
    getListPost (){
        axios.get('http://49.156.53.36:3000/api/posts')
        .then(response => {
          if (response) {
            this.setState({
                listpost: response.data
            },() => {
              setTimeout(() => {
              }, 500)
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    // onChangePage: function(page) {
    //     return request(url, {page: page}).then(function(items) {
    //         this.setState({items: items});
    //     }.bind(this));
    // }
    render(){
        let ListAllPost = this.state.pageOfPost && this.state.pageOfPost.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                        <a href={`#/admin/editpost/${item.id}`}>
                            <span className="label label-warning">Edit</span>
                        </a>
                        <a href={`#/admin/delete/${item.id}`}>
                            <span className="label label-danger">Delete</span>
                        </a>
                    </td>
                </tr>
            )
        })
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                Post Table
                <small>preview of Post tables</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                    <li><a href="#">Tables</a></li>
                    <li className="active">Post</li>
                </ol>
            </section>
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                            <a href="#/admin/createpost" className="btn btn-sm btn-info btn-flat pull-left">Create Post</a>
                                <div className="box-tools wd-search">
                                    <div className="input-group input-group-sm" >
                                        <input type="text" name="table_search" className="form-control pull-right" placeholder="Search"/>
                                        <div className="input-group-btn">
                                            <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body table-responsive no-padding">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>body</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ListAllPost}
                                    </tbody>
                                </table>
                            </div>
                            <div className="box-footer clearfix">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <Pagination items={this.state.listpost} onChangePage={this.onChangePage} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
  }
}

module.exports = ListPost;
