import React from 'react'

export default React.createClass({
	displayName: 'Layout',

	render () {
		return (
			<div>
			  <div className='container'>
			  	{this.props.children}
			  </div>
		  </div>
		)
	}
})
