import React from 'react'
import ScrollerText from '../components/scroller-text'

export default React.createClass({
	displayName: 'Home',

	render() {
		return (
			<div>
				<header role='banner'>
					<ScrollerText maxFontSize={150} minFontSize={50}><a href="/aboutme">hvrnk</a></ScrollerText>
				</header>
				<img src="http://cdn.neonsky.com/4bd5ebf463380/images/_MG_7848_HDR-1.jpg" width="100%" />
			</div>
		)
	}
})
