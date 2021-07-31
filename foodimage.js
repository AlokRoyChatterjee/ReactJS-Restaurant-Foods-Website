import React from 'react';

class foodimage extends React.Component {
	render(){
		return(<img src={this.props.source} alt={this.props.text} />)
	}
}

export default foodimage;
