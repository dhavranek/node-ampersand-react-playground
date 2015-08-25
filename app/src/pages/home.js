import React from 'react'
import ScrollerText from '../components/scroller-text'
import ParallaxImage from '../components/parallax-image'

export default React.createClass({
	displayName: 'Home',

	void () {
		<ParallaxImage src="http://cdn.neonsky.com/4bd5ebf463380/images/_MG_7848_HDR-1.jpg" />
	},

	render() {
		var div = {
			height: '100vh',
			width: '100vw',
			position: 'relative'
		};

		return (
			<div>
				<div style={div}>
					<ScrollerText maxFontSize={150} minFontSize={50}><a href="/aboutme">hvrnk</a></ScrollerText>
				</div>
				<div style={div}> </div>
			</div>
		)
	}
})
