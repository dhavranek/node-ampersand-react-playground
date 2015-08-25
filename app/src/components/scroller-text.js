import React from 'react'

export default React.createClass({

  getInitialState () {
    return {
      fontSize: this.props.maxFontSize,
      top: 'auto',
      left: 'auto',
      maxTop: 0,
      maxLeft: 0,
      pageHeight: 0,
      pageWidth: 0
    }
  },

  componentDidMount () {
    window.addEventListener( 'scroll', this.updateFontSize );
    window.addEventListener( 'scroll', this.updateTextPosition );

    this.centerHeaderAfterMount();

    this.setState({ pageHeight: window.innerHeight });
    this.setState({ pageWidth: window.innerWidth });
  },

  centerHeaderAfterMount() {
    var container = this.refs.textContainer.getDOMNode();
    var height = container.clientHeight;
    var width = container.clientWidth;

    var initialTop = (window.innerHeight - height) / 2;
    var initialLeft = (window.innerWidth - width) / 2;

    this.setState({ top: initialTop });
    this.setState({ left: initialLeft });
    this.setState({ maxTop: initialTop });
    this.setState({ maxLeft: initialLeft });
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

    var textContainer = this.refs.textContainer.getDOMNode();

    var top = this.state.maxTop - (this.state.maxTop / this.state.pageHeight) * scrollTop + scrollTop;
    top = Math.max(scrollTop, top);

    var left = this.state.maxLeft - (this.state.maxLeft / this.state.pageHeight) * scrollTop;
    left = Math.max(left, 0);

    this.setState({ top: top });
    this.setState({ left: left });
  },

  render () {
    var divStyle = {
      height: '100vh',
      width: '100vw',
      position: 'relative'
    };

    var textContainerStyle = {
      position: 'absolute',
      top: this.state.top,
      left: this.state.left,
      zIndex: 1000
    };

    var textStyle = {
      fontSize: this.state.fontSize,
      margin: 0
    };

    return (
      <div ref="div" style={divStyle} id="div1">
        <div ref="textContainer" style={textContainerStyle}>
          <h1 style={textStyle}>{this.props.children}</h1>
        </div>
      </div>
    )
  }
})
