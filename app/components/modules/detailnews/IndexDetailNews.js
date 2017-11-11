import React from 'react';
import axios from 'axios';
import UpdateDetailNews from 'UpdateDetailNews';

class IndexDetailNews extends React.Component{
    constructor(props, context) {
        super(props, context);
            this.state ={
                contentnews: []
            };
        }
    componentDidMount() {
        console.log(123123);
        this.getMenuNews();
    }
      
    getMenuNews (){
        axios.get('http://49.156.53.36:3000/api/posts/'+this.props.detailId)
        .then(response => {
          if (response) {
              console.log(response);
            this.setState({
                contentnews: response.data
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
    return (
        <div className="content-detail">
           <div key={this.state.contentnews.id}>
                <h1 className="title-cates">
                    <a className="txt-link" href="#">{this.state.contentnews.title}</a>
                </h1>
                <div className="item-link">
                    <div className="icon">
                        <a href="#"><img className="icon-detail" src="img/icondetail1.png"/></a>
                        <a href="#"><img className="icon-detail" src="img/icondetail2.png"/></a>
                        <a href="#"><img className="icon-detail" src="img/icondetail3.png"/></a>
                        <a href="#"><img className="icon-detail" src="img/icondetail4.png"/></a>
                    </div>
                    <div className="link">
                        <p>https://vnexpress.net/TfMyoLppJRo</p>
                    </div>
                </div>
                <div className="detail-page">
                    <div className="img-detail" >
                        <a href="#"><img width="100%"  src={this.state.contentnews.image}/></a>
                        <p className="fs13">Tilte Iamge</p>
                        <p className="fs13">Ảnh: Nguyễn Quyết</p>
                    </div>
                    <p>
                        {this.state.contentnews.body}
                    </p>
                    <p className="author">Vương Linh</p>
                </div>
            </div>
            <UpdateDetailNews/>
        </div>
    )
  }
}
module.exports = IndexDetailNews;
