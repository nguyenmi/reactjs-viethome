import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreatePost extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '',
            images: '',
            startDate: '',
            body: '',
            view: '',
            categories: '',
            categoryId: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
    }
    componentDidMount() {
		this.getCategoryOfPost();
	}
    getCategoryOfPost() {
		axios.get('http://49.156.53.36:3000/api/categories')
		.then(response => {
			if (response && response.data) {
				this.setState({
					categories: response.data
				})
			}
		})
	}
    validate() {
        // neu title = '' => setState msg = "nhap title", return false;
        if (this.state.title === '') {
            this.setState({
                msg: 'bạn chưa nhập  title',
                type: 'title'
            });
            return false;
        } else {
            return true;
        }
    }
    createPost(e) {
        e.preventDefault();
        if (this.validate()) {
            axios({
                method: 'post',
                url: 'http://49.156.53.36:3000/api/posts',
                data: {
                    title: this.state.title,
                    images: this.state.images,
                    startDate: this.state.startDate,
                    view: parseInt(this.state.view),
                    body: this.state.body,
                    categoryId: this.state.categoryId
                }
            }).then(response => {
                window.location.reload();
            }).catch(error => {

            })
        }
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state.categoryId);
        });
    }
    render(){
        
        return (
            <div className="content-wrapper ">
                <section className="content-header">
                    <h1>
                        Create Post
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#/admin"><i className="fa fa-dashboard"></i>Home</a></li>
                        <li><a href="#/admin/post">Post</a></li>
                        <li className="active">Create Post</li>
                    </ol>
                </section>
                <section className="content ">
                    <div className="row ">
                        <div className="box">
                            <div className="col-md-12 pd30">
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Create Post</h3>
                                    </div>
                                    <form className="form-horizontal" onSubmit={this.createPost.bind(this) }>
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Title</label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="title" className="form-control" placeholder="Title Category" value={this.state.title} onChange={this.onChange.bind(this)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Image</label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="images" className="form-control" placeholder="Url Images" value={this.state.images} onChange={this.onChange.bind(this)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-2 control-label">Category</label>
                                                <div className="col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-5">
                                                            <div className="form-group">
                                                                <div className="col-md-10">
                                                                    <select className="form-control" name="categoryId"  onChange={this.onChange.bind(this)}>
                                                                    {
                                                                        this.state.categories && this.state.categories.map(item => {
                                                                            return (
                                                                                <option key={item.id}  value={item.id} >{item.title}</option>
                                                                            )
                                                                        })
                                                                    } 
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="form-group">
                                                                <label className="col-sm-2 control-label">Date</label>
                                                                <div className="col-sm-10">
                                                                    <DatePicker name="startDate" className="form-control" selected={this.state.startDate} value={this.state.startDate} onChange={this.handleChange}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group">
                                                                <label className="col-sm-3 control-label">View</label>
                                                                <div className="col-sm-9">
                                                                    <input type="text" name="view" className="form-control" placeholder="0" value={this.state.view} onChange={this.onChange.bind(this)}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label className="col-md-2 control-label">body</label>
                                                <div className="col-md-10">
                                                    <textarea className="text-body" name="body" rows="10" cols="80" value={this.state.body} onChange={this.onChange.bind(this)}></textarea>
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

module.exports = CreatePost;
