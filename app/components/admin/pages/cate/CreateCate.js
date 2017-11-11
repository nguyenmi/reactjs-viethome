import React from 'react';
import axios from 'axios';
import AlertContainer from 'react-alert';


class CreateCate extends React.Component{
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            title: '',
            description: '',
            msg: '',
        }
    }
	componentDidMount() {
    }
    
    validate() {
        // neu title = '' => setState msg = "nhap title", return false;
        if (this.state.title === '') {
            this.setState({
                msg: 'bạn chưa nhập  title',
                type: 'title'
            });
            return false;
        } else if (this.state.description === '') {
            this.setState({
                msg: 'bạn chưa nhập description',
                type: 'description'
            });
            return false
        } else {
            return true;
        }
    }
    createCategory(e) {
        e.preventDefault();
        if (this.validate()) {
            axios({
                method: 'post',
                url: 'http://49.156.53.36:3000/api/categories',
                data: {
                    title: this.state.title,
                    description: this.state.description
                }
            })
            .then(response => {
                if (this.state.title !== '' && this.state.description !== '') {
                    this.setState({
                        msg: 'Create Category Success',
                        time : 5000 ,
                    });
                    window.location.reload();
                    return false
                } else {
                    return true;
                }
            })
            .catch(error => {
                
            })
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Create Category
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#/admin"><i className="fa fa-dashboard"></i> Home</a></li>
                        <li><a href="#/admin/category">Category</a></li>
                        <li className="active">Create Category</li>
                    </ol>
                </section>
                <section className="content">
                    <div className="row ">
                        <div className="box">
                            <div className="col-md-12 text-center">
                                <div className="row">
                                    <div className="alert alert-success colorGreen">
                                        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                                            <h4><i className="icon fa fa-check"></i>
                                            {
                                                this.state.msg
                                                ? <span>{this.state.msg}</span>
                                                : null
                                            }
                                            </h4>
                                    </div>
                                </div>
                                <div className="create ">
                                    <div className="box box-info">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">Create Category</h3>
                                        </div>
                                        <form className="form-horizontal" onSubmit={this.createCategory.bind(this) }>
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label  className="col-sm-2 control-label">Title</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" name="title" className="form-control" placeholder="Title Category" value={this.state.title} onChange={this.onChange.bind(this)}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Description</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" name="description" className="form-control" placeholder="Description" value={this.state.description} onChange={this.onChange.bind(this)}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-footer">
                                                <button type="submit"  className="btn btn-default pull-left" >Cancel</button>
                                                <button type="submit" className="btn btn-info pull-right">Create</button>
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

module.exports = CreateCate;
