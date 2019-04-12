import React, { Component } from "react";
import "./HeroHeader.css";

class HeroHeader extends Component {
  
  constructor (...args) {
    super(...args);
    this.state = { height: undefined }
    this._containerDOM = null;
    this._scrollPosition = 0;
    this.onScroll = this.onScroll.bind(this);
  }
  
  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }
  
  onScroll () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (this.props.scrollAction >= scrollTop) {
      const step = this._scrollPosition - scrollTop;
      const actualHeight = this._containerDOM.offsetHeight;
      const height = actualHeight + step;
      this.setState({ height });
      this._scrollPosition = scrollTop;
    }
  }

  render () {
    return (
      <header
        className='heroHeader'
        ref={n => this._containerDOM = n}
        style={{height: this.state.height }}>
          <div className='heroHeader-content'>
            {this.props.children}
          </div>
      </header>
    );
  }
}





export default HeroHeader;