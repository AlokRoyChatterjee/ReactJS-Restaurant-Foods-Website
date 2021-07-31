import React from 'react';
import axios from 'axios';
import fooditems from './components/RecipeCard';
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
    var data = this.state.fooditem;
    return (
      <div className="App">
        <fooditems meals={data} />
      </div>
    );
  }
}

export default App;
