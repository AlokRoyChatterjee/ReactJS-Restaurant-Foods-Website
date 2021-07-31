import React from 'react';
import styled from 'styled-components';

class foodimage extends React.Component {
	render(){
		return(<Imagestyle src={this.props.source} alt={this.props.text} />)
	}
}
const imagestyle = styled.img`
	width: 150px;
	height: 150px;
`;

export default foodimage;
