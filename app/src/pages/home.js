import React from 'react'
import ScrollerText from '../components/scroller-text'
import ParallaxImage from '../components/parallax-image'

export default React.createClass({
	displayName: 'Home',

	render() {
		var div = {
			height: '50vh',
			width: '100vw',
			position: 'relative'
		};

		return (
			<div>
				<ScrollerText maxFontSize={150} minFontSize={50}><a href="/aboutme">hvrnk</a></ScrollerText>
				<div style={div} id="div2">
					<ParallaxImage src="http://cdn.neonsky.com/4bd5ebf463380/images/_MG_7848_HDR-1.jpg" />
				</div>
				<div style={div} id="div1"> </div>
			</div>

		)
	}
})
