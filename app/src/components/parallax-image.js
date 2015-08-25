import React from 'react'

export default React.createClass({

  getInitialState () {
    return {
      top: 'auto',
      display: 'none',
      opacity: 0
    }
  },

  componentDidMount () {
    window.addEventListener( 'scroll', this.updateOpacity );

    var image = this.refs.image.getDOMNode();

    var imageHeightOverWidth = image.height / image.width;

    if (image.width > window.innerWidth) {
      image.width = window.innerWidth;
      image.height = image.width * imageHeightOverWidth;
    }

    var top = (window.innerHeight - image.height) / 2;

    this.setState({ top: top });
    this.setState({ display: 'inline'})
  },

  updateOpacity () {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var pageHeight = window.innerHeight;
    var imageTop = this.state.top;

    var image = this.refs.image.getDOMNode();
    var imageHeight = image.clientHeight;

    var opacity = 1 / (imageTop + imageHeight) * scrollTop;
    opacity = Math.max(0, opacity);
    opacity = Math.min(1, opacity);

    this.setState({ opacity: opacity });
  },

  render () {
    var imageStyle = {
      position: 'absolute',
      width: '100vw',
      top: this.state.top,
      display: this.state.display,
      opacity: this.state.opacity
    }

    return (
      <img src={this.props.src} ref="image" style={imageStyle} />
    )
  }
})
