import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class CateView extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.state = {
        hotview: [],
        categoryList: []
    }
  }
    componentDidMount() {
        this.getCategoryList();
        setTimeout(() => {
            this.getHotView();
        }, 1000)
    }
    getCategoryList() {
        axios.get('http://49.156.53.36:3000/api/categories')
        .then(response => {
            if (response && response.data) {
                this.setState({
                    categoryList: response.data
                })
            }
        })
    }
    getHotView() {
        axios.get('http://49.156.53.36:3000/api/posts?filter={"limit" : 6, "order" : "view DESC"}')
        .then(response => {
            if (response && response.data) {
                let arr = [];
                response.data.map(item => {
                    let itemData = Object.assign({}, item);
                    let cd = this.state.categoryList.filter(obj => {
                        return obj.id === item.categoryId
                    });
                    itemData.categogyName = cd[0].title
                    arr.push(itemData)
                })
                this.setState({
                    hotview: arr
                }, () => {
                    console.log(this.state.hotview)
                });

            }
        })
        .catch(error => {
        console.log(error);
        });
    }
  
  render(){
    let listhotview = this.state.hotview && this.state.hotview.map(item=> {
    return (
        <div>
        {item.categoryId === "59e5bcfb67b5108650292b15" ? 
        <div className="content-view" key={item.id}>
            <div className="item-view" style={{ 'backgroundImage':`url(${item.image})`}}>
                <a href={`/#/detailnews/${item.id}`}><img className="img-article" src={item.image} /></a>
                <div className="cate-title">
                    {item.categoryId === "59e5bcfb67b5108650292b15" ? 
                        <p className="cate-view-news"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    :null
                    }
                    {item.categoryId === "59e5bd1567b5108650292b16" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null} 
                    {item.categoryId === "59e5bd3867b5108650292b17" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null}
                    {item.categoryId === "59e5d00b67b5108650292b1e" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null}
                    <h4 className="title-view">
                        <a className="colorW" href={`/#/detailnews/${item.id}`}>{item.title}</a>
                    </h4>
                    <div className="colordate">
                        <i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
                        <p className="date pdr5">{item.date}</p>
                        <p className="time ">07:51</p>
                    </div>
                </div>
            </div>
        </div>
        :null }
        {item.categoryId === "59e5bd1567b5108650292b16" ? 
        <div className="content-view" key={item.id}>
            <div className="item-view" style={{ 'backgroundImage':`url(${item.image})`}}>
                <a href={`/#/detailnews/${item.id}`}><img className="img-article" src={item.image} /></a>
                <div className="cate-title">
                    {item.categoryId === "59e5bcfb67b5108650292b15" ? 
                        <p className="cate-view-news"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    :null
                    }
                    {item.categoryId === "59e5bd1567b5108650292b16" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null} 
                    {item.categoryId === "59e5bd3867b5108650292b17" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null}
                    {item.categoryId === "59e5d00b67b5108650292b1e" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null}
                    <h4 className="title-view">
                        <a className="colorW" href={`/#/detailnews/${item.id}`}>{item.title}</a>
                    </h4>
                    <div className="colordate">
                        <i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
                        <p className="date pdr5">{item.date}</p>
                        <p className="time ">07:51</p>
                    </div>
                </div>
            </div>
        </div>
        :null }
        {item.categoryId === "59e5bd3867b5108650292b17" ? 
        <div className="content-view" key={item.id}>
            <div className="item-view" style={{ 'backgroundImage':`url(${item.image})`}}>
                <a href={`/#/detailnews/${item.id}`}><img className="img-article" src={item.image} /></a>
                <div className="cate-title">
                    {item.categoryId === "59e5bcfb67b5108650292b15" ? 
                        <p className="cate-view-news"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    :null
                    }
                    {item.categoryId === "59e5bd1567b5108650292b16" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null} 
                    {item.categoryId === "59e5bd3867b5108650292b17" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null}
                    {item.categoryId === "59e5d00b67b5108650292b1e" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null}
                    <h4 className="title-view">
                        <a className="colorW" href={`/#/detailnews/${item.id}`}>{item.title}</a>
                    </h4>
                    <div className="colordate">
                        <i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
                        <p className="date pdr5">{item.date}</p>
                        <p className="time ">07:51</p>
                    </div>
                </div>
            </div>
        </div>
        :null }
        {item.categoryId === "59e5d00b67b5108650292b1e" ? 
        <div className="content-view" key={item.id}>
            <div className="item-view" style={{ 'backgroundImage':`url(${item.image})`}}>
                <a href={`/#/detailnews/${item.id}`}><img className="img-article" src={item.image} /></a>
                <div className="cate-title">
                    {item.categoryId === "59e5bcfb67b5108650292b15" ? 
                        <p className="cate-view-news"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    :null
                    }
                    {item.categoryId === "59e5bd1567b5108650292b16" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null} 
                    {item.categoryId === "59e5bd3867b5108650292b17" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null}
                    {item.categoryId === "59e5d00b67b5108650292b1e" ? 
                        <p className="cate-view-newsvn"> 
                            <a className="colorW"  href="#">{item.categogyName}</a> 
                        </p>
                    : null}
                    <h4 className="title-view">
                        <a className="colorW" href={`/#/detailnews/${item.id}`}>{item.title}</a>
                    </h4>
                    <div className="colordate">
                        <i className="fa fa-calendar-o icon-slider pdr5" aria-hidden="true"></i>
                        <p className="date pdr5">{item.date}</p>
                        <p className="time ">07:51</p>
                    </div>
                </div>
            </div>
        </div>
        :null }
        </div>
      )
    })
    return (
        <div>
            {listhotview}
        </div>
    )
  }
}

CateView.propTypes = {
  data: PropTypes.array
}

module.exports = CateView;