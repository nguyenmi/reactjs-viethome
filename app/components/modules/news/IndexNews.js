import React from 'react';
import axios from 'axios';
import SliderNews from 'SliderNews';
import NewUpdate from 'NewUpdate';
import Video from 'Video';
import Title from 'Title';
import CateView from 'CateView';
import Picture from 'Picture';
import MenuHome from 'MenuHome';
import PropTypes from 'prop-types';
import SeemoreVideo from 'SeemoreVideo';	
import RelatedVideo from 'RelatedVideo';

class IndexNews extends React.Component{
  render(){
    return (
      <div>
        <Title/>
        <SliderNews/>
        <div className="main-next">
          <div className="content-main">
              <div className="cate-menu">
                  <div className="item-catenews" style={{ 'backgroundImage':`url(img/lefttintuc.png)`}}>
                      <img className="img-article" src="img/lefttintuc.png" />
                      <div className="title-date">
                          <h4 className="title">
                          <a className="txt-link" href="#">Tiết lộ tình tiết mới về kẻ bắt cóc ở Sydney</a>
                        </h4>
                          <div className="colordate">
                              <i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
                              <p className="date pdr5">09/02.2014</p>
                              <p className="time ">07:51</p>
                          </div>
                      </div>
                  </div>
                  <div className="list-menu">
                    <MenuHome/>
                  </div>
              </div>
              <div className="item-adv">
                  <div className="img-adv" style={{ 'backgroundImage':`url(img/lefttintuc2.png)`}}>
                      <img className="img-article" src="img/lefttintuc2.png" />
                  </div>
              </div>
              <div className="view-cate">
                  <h4 className="title-mostview">Xem Nhiều nhất</h4>
                  <div className="conten-mostview">
                    <CateView type="cate-view-news" />
                  </div>
                  <div className="seemore">
                      <p className="bd-seemore">
                          <a className="txt-link" href="#">Xem Thêm 
                          <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
                        </a>
                      </p>
                  </div>
              </div>
              <div className="content-video">
                <Video/>
                <RelatedVideo/>
              </div>
              <Picture/>
          </div>
          <div className="menu-main">
              <div className="adven-news">
                  <div className="item-advennew" style={{ 'backgroundImage':`url(img/righttintuc.png)`}}>
                      <a href="">
                          <img className="img-article" src="img/righttintuc.png" />
                      </a>
                      <p className="text-adven">
                          Quảng cáo
                      </p>
                  </div>
              </div>
              <div className="news-update">
                  <h4>Mới cập nhật</h4>
              </div>
              <NewUpdate/>
              <NewUpdate/>
          </div>
        </div>
      </div>
    )
  }
}
IndexNews.propTypes = {
    data: PropTypes.object
}
module.exports = IndexNews;
