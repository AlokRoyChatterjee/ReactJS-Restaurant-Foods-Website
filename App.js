import React from 'react';
import axios from 'axios';
import fooditems from './fooditems.js';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fooditem: {}
    }
  }
  componentDidMount(){
    const api = 'https://www.themealdb.com/api/json/v1/1/latest.php';
    axios.get(api).then(res => {
        const fooditem = res.data.meals;
        if(typeof fooditem === 'object'){
          this.setState({ fooditem });
        }
      })
      .catch(err => {console.log(err);});
  }
  render() {
    var foodinfo = this.state.fooditem;
    return (
      <div className="App">
        <fooditems meals={foodinfo} />
      </div>
    );
  }
}

export default App;
