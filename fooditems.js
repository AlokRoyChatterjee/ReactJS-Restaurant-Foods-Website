import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Image from './Image';

class fooditems extends React.Component {
	render(){
		return(
          <div>
         	{this.props.meals.map((item, index) => {
         		return ( 
         			<foodstyle 
         				key={index} 
         				href={item.strSource}>
         				<Image source={item.strMealThumb} text={item.strMeal} />
         				<Title title={item.strMeal} />
         			</foodstyle> 
         		)
         	})}
          </div>
		)
	}
}

const foodstyle = styled.a`
	width: 120px;
	color: blue;
	margin: 0 20px 10px;
`;

export default fooditems;
