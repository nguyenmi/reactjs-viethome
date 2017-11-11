import React, { Component } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

class Regester extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          exampleItems: [],
          pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
      this.getListTodo();
    }
    getListTodo (){
      axios.get('http://49.156.53.36:3000/api/categories')
      .then(response => {
        if (response) {
          this.setState({
            exampleItems: response.data
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
    
  render() {
    
    let commentNodes = this.state.pageOfItems && this.state.pageOfItems.map(function(item, index) {
        return (
            <div key={item.id}>{item.title}</div>
        );
    });
    return (
      <div id="project-comments" className="commentList">
        <ul>
          {commentNodes}
          <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
        </ul>
      </div>
    );
  }
};

module.exports = Regester;