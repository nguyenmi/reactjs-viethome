import React from 'react';
import axios from 'axios';
import Pagination from 'Pagination';

class IndexCate extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state ={
            listcate: [],
            pageOfCategory: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfCategory) {
        // update state with new page of items
        this.setState({ pageOfCategory: pageOfCategory });
    }
    componentDidMount() {
        this.getListCate();
        this.deleteCate();
    }
    getListCate (){
        axios.get('http://49.156.53.36:3000/api/categories')
        .then(response => {
            if (response) {
                this.setState({
                    listcate: response.data
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
    deleteCate(id) {
        axios({
            method: 'DELETE',
            url: `http://49.156.53.36:3000/api/categories/${id}`,
          
        }).then(response => {
            this.removeItemClient(id);
        }).catch(error => {

        })
    }
    render(){
        let ListAllCate = this.state.pageOfCategory && this.state.pageOfCategory.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                        <a href={`/#/admin/editcategory/${item.id}`}>
                            <span className="label label-warning">Edit</span>
                        </a>
                        <button onClick={this.deleteCate.bind(this, item.id)} >
                            <span className="label label-danger">Delete</span>
                        </button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                    Category Table
                    <small>preview of Category tables</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#">Tables</a></li>
                        <li className="active">Category</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <div className="box-header">
                                    <a href="#/admin/createcategory" className="btn btn-sm btn-info btn-flat pull-left">Create Category</a>
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
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ListAllCate}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="box-footer clearfix">
                                    <ul className="pagination pagination-sm no-margin pull-right">
                                        <Pagination items={this.state.listcate} onChangePage={this.onChangePage} />
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

module.exports = IndexCate;
