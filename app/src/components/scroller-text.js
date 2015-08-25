import React from 'react'

export default React.createClass({

  getInitialState () {
    return {
      fontSize: this.props.maxFontSize,
      top: 'auto',
      left: 'auto'
    }
  },

  componentDidMount () {
    window.addEventListener( 'scroll', this.updateFontSize );
    window.addEventListener( 'scroll', this.updateTextPosition );

    var div = this.refs.text.getDOMNode();
    var height = div.clientHeight;
    var width = div.clientWidth;

    this.setState({ top: (window.innerHeight - height) / 2});
    this.setState({ left: (window.innerWidth - width) / 2});
  },

  updateFontSize (event) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var updatedFontSize = this.props.maxFontSize - (scrollTop /  2);
    updatedFontSize = Math.max(this.props.minFontSize, updatedFontSize);
    updatedFontSize = Math.min(this.props.maxFontSize, updatedFontSize);

    this.setState({ fontSize: updatedFontSize });
  },

  updateTextPosition (event) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    var text = this.refs.text.getDOMNode();

    var top = (window.innerHeight - text.clientHeight) / 2;
    var left = (window.innerWidth - text.clientWidth) / 2;
    left = Math.max(0, left - scrollTop);
    top = Math.max(scrollTop, top);
    
    this.setState({ top: top });
    this.setState({ left: left });
  },

  render () {
    var divStyle = {
      position: 'absolute',
      top: this.state.top,
      left: this.state.left
    };

    var logoStyle = {
      fontSize: this.state.fontSize,
      margin: 0
    };

    return (
      <div ref="text" style={divStyle}>
        <h1 style={logoStyle}>{this.props.children}</h1>
      </div>
    )
  }
})
