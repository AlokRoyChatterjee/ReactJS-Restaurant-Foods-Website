import React, { Component } from 'react';
import styled from 'styled-components';

export default class Image extends Component {
	render(){
		return(
			<Imagestyle src={this.props.source} alt={this.props.text} />
		)
	}
}
const imagestyle = styled.img`
	width: 150px;
	height: 150px;
`;