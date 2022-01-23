import React, { Component } from 'react';
import {CardList} from './component/card-list/card-list.component';
import { Search } from './component/search/search.component';

import './App.css';
class  App extends Component {
  constructor(){
      super();
      this.state = {
        searchStr: '',
        monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters :  users}))  
  }
  render() {
    const {searchStr, monsters} = this.state;    
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchStr.toLowerCase()));

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search placeholder='search monsters' handleChange={e=> this.setState({searchStr: e.target.value})} />                  
      <CardList monsters= {filteredMonsters}> </CardList>                    
      </div>
    );
  }
}

export default App;
