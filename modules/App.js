import React from 'react';
import NavLink from './navLink';
import Home from './home';

export default React.createClass({
  render() {
    return (<div className="row">
              <div className="col-sm-3">
                <div className="col-sm-8 col-sm-offset-2">
                  <ul className="nav-custom">
                    <li><NavLink to="/">odran<small>037</small>.io</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/portfolio">portfolio</NavLink></li>
                    <li><a href="http://leonardoprates.com/contact.html" target="_blank">contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="col-sm-8 col-sm-offset-2 main">
                  {this.props.children || <Home />}
                </div>
              </div>
            </div>);
  }
});
