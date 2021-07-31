import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RecipeCard from './components/RecipeCard';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fooditem: {}
    }
  }

  componentDidMount(){
    const api = 'https://www.themealdb.com/api/json/v1/1/latest.php';
    axios.get(api)
      .then(res => {
        const fooditem = res.data.meals;
        if(typeof fooditem === 'object'){
          this.setState({ fooditem });
        }
      })
      .catch(err => {
        console.log(err);
      });

  }

  render() {
    var data = this.state.fooditem;
    return (
      <appstyles className="App">
        {data.length > 0 && <RecipeCard meals={data} />}
      </appstyles>
    );
  }
}

const appstyles = styled.div`
  background-color:aqua;
`
