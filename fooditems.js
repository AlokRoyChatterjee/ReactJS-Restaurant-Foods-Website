import React from 'react';
import foodname from './foodname';
import foodimage from './foodimage';

class fooditems extends React.Component {
	render(){
		return(
          <div>
         	{this.props.meals.map((fooditem, index) => {
         		return ( 
         			<div> 
         				key={index} 
         				href={fooditem.strSource}>
         				<foodimage source={fooditem.strMealThumb} text={fooditem.strMeal} />
         				<foodname foodname={fooditem.strMeal} />
         			</div> 
         		)
         	})}
          </div>
		)
	}
}

export default fooditems;
