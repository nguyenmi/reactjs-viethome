import React from 'react';
import axios from 'axios';

class Advertisement extends React.Component{
  render(){
    return (
        <div className="adver">
            <div className="item-adver" style={{'backgroundImage':`url(img/quangcao.png)`}}>
                <a className="txt-link" href="#">
                    <img className="img-article" src="img/quangcao.png"/>
                </a>
            </div>
            <p className="text-qc colordate fs14">
                Quảng cáo
            </p>
        </div>
    )
  }
}
module.exports = Advertisement;
