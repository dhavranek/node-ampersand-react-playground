import React from 'react'

export default React.createClass({

  getInitialState () {
    return {
      fontSize: this.props.maxFontSize
    }
  },

  componentDidMount () {
    window.addEventListener( 'scroll', this.updateFontSize );
  },

  updateFontSize (event) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var updatedFontSize = this.props.maxFontSize - (scrollTop /  2);
    updatedFontSize = Math.max(this.props.minFontSize, updatedFontSize);
    updatedFontSize = Math.min(this.props.maxFontSize, updatedFontSize);

    this.setState({ fontSize: updatedFontSize });
  },

  render () {
    var logoStyle = {
      fontSize: this.state.fontSize
    };

    return (
      <div>
        <h1 style={logoStyle}>{this.props.children}</h1>
      </div>
    )
  }
})
