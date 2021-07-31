import React, { Component } from 'react';
import styled from 'styled-components';

export default class Title extends Component {
	render(){
		return(
          <Header>{this.props.title}</Header>
		)
	}
}

const Header = styled.h1`
    text-align: center;
    font-size: 30px;
`;