import React from 'react';
import axios from 'axios';

class NewUpdate extends React.Component{
  render(){
    return (
      <div className="news-one">
        <div className="wh-news">
          <div className="item-newone" style={{'backgroundImage':`url(img/video6.png)`}}>
            <a className="txt-link" href="#">
              <img className="img-article" src="img/video6.png"/>
            </a>
            <p className="caption colorW fontW fs16">
              <a className="colorW" href="#">Ngộ nghĩnh với cuộc thi ảnh "Bé măm chất xơ -  Cả nhà rinh quà"</a>
            </p>
          </div>
        </div>
        <div className="lq-news">
          <div className="wh-img" style={{'backgroundImage':`url(img/video7.png)`}}>
            <a className="txt-link" href="#">
              <img className="img-article" src="img/video7.png"/>
            </a>
          </div>
          <div className="caption">
            <h4 className="title-one fs14"><a className="txt-link" href="#">Miền bắc rét nhất từ đầu mùa đông Hà Nội có thể lạnh dưới 10 độ</a></h4>
            <p className="colordate fs14">
              <i className="fa fa-calendar-o" aria-hidden="true"></i> 08/02/1996 | 
              <i className="fa fa-comments-o" aria-hidden="true"></i> 6578
            </p>
          </div>s
        </div>
        <div className="lq-news">
          <div className="wh-img" style={{'backgroundImage':`url(img/video8.png)`}}>
            <a className="txt-link" href="#">
              <img className="img-article" src="img/video8.png"/>
            </a>
          </div>
          <div className="caption">
            <h4 className="title-one fs14"><a className="txt-link" href="#">Đòi tự tử vì bị bắt nạt qua Facebook tin nhắn "</a></h4>
            <p className="colordate fs14">
              <i className="fa fa-calendar-o" aria-hidden="true"></i> 08/02/1996 | 
              <i className="fa fa-comments-o" aria-hidden="true"></i> 6578
            </p>
          </div>
        </div>
        <div className="lq-news">
          <div className="wh-img" style={{'backgroundImage':`url(img/video9.png)`}}>
            <a className="txt-link" href="#">
              <img className="img-article" src="img/video9.png"/>
            </a>
          </div>
          <div className="caption">
            <h4 className="title-one fs14"><a className="txt-link" href="#">"Chùm ảnh: Sa Pa mù sương trong cái rét 6 độ</a></h4>
            <p className="colordate fs14">
              <i className="fa fa-calendar-o" aria-hidden="true"></i> 08/02/1996 | 
              <i className="fa fa-comments-o" aria-hidden="true"></i> 6578
            </p>
          </div>
        </div>
        <div className="lq-news">
          <div className="wh-img" style={{'backgroundImage':`url(img/video10.png)`}}>
            <a className="txt-link" href="#">
              <img className="img-article" src="img/video10.png"/>
            </a>
          </div>
          <div className="caption">
            <h4 className="title-one fs14"><a className="txt-link" href="#">Chùm ảnh: Sa Pa mù sương trong cái rét 6 độ</a></h4>
            <p className="colordate fs14">
              <i className="fa fa-calendar-o" aria-hidden="true"></i> 08/02/1996 | 
              <i className="fa fa-comments-o" aria-hidden="true"></i> 6578
            </p>
          </div>
        </div>
      </div>
    )
  }
}
module.exports = NewUpdate;
