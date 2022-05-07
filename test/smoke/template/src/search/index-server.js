"use strict";

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.less";
// import "../../common";
// import largeNumber from "large-number-guo";
// import logo from "./images/logo.png";
// import { a, b } from "./tree.shaking";
const React = require('react');
const largeNumber = require('large-number-guo');
const logo = require('./images/logo.png');
require('../../common');
require('./index.less');
const {a, b} = require('./tree.shaking');
class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }
  loadComponent() {
    import("./text.js").then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }
  render() {
    const func = a();
    const { Text } = this.state;
    let addResult = largeNumber("999", "1");
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        {addResult}
        <img src={logo.default} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

module.exports = <Search />;
