import React from 'react';
import axios from 'axios';

class IndexPost extends React.Component{
    constructor(props, context) {
        super(props, context);
            this.state ={
                postadmin: []
            };
        }
	componentDidMount() {
		this.getListPostofAdmin();
	}
    getListPostofAdmin (){
        axios.get('http://49.156.53.36:3000/api/posts?filter={"limit":5}')
        .then(response => {
          if (response) {
            this.setState({
                postadmin: response.data
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
    render(){
        let ListCateofIndex = this.state.postadmin && this.state.postadmin.map(item => {
            return (
                <tr  key={item.id}>
                    <td><a href="">{item.id}</a>
                    </td>
                    <td>{item.title}</td>
                    <td>
                        <div className="sparkbar" data-color="#f39c12" data-height="20">{item.body}</div>
                    </td>
                </tr>
            )
        })
    return (
        <div className="col-md-12">
            <div className="box box-info">
                <div className="box-header with-border">
                    <h3 className="box-title">Post</h3>

                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="table-responsive" >
                        <table className="table no-margin">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ListCateofIndex}
                            </tbody>
                        </table>
                    </div>
                </div>
               
                <div className="box-footer clearfix">
                    <a href="#/admin/post" className="btn btn-sm btn-info btn-flat pull-left">View All Post</a>
                </div>
            </div>
        </div>
    )
  }
}

module.exports = IndexPost;
