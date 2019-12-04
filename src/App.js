import React, { Component } from 'react';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer'
import UpdateContainer from './containers/UpdateContainer/UpdateContainer';
import './App.css';
import RankingTableContainer from './containers/RankingTableContainer/RankingTableContainer';

class App extends Component {

  state = {
    currentPage: 'Ranking',
    ranking: []
  }

  changeCurrentPage = (newPage) => {
    this.setState({currentPage: newPage});
  }

  componentDidMount() {
    this.reload();
  }

  reload = () => {
    console.log('reloading')
    fetch('./data/ranking.json')
    .then(data => { 
      return data.json() 
    })
    .then(jsonData => {
      let newRanking = [];

      for (let index in jsonData.ranking) {
        let newRecord = {
          rank: index,
          name: jsonData.ranking[index].name,
          club: jsonData.ranking[index].club,
          level: jsonData.ranking[index].level,
          experience: jsonData.ranking[index].experience,
          messages: 0
        }
        newRanking.push(newRecord)
      }
      this.setState({ranking: newRanking})
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .finally(() => {
      // always executed
    });
  }

  render(){

    let table = (<span>No players :(</span>);
    if (this.state.ranking.length > 0) {
      table = (<RankingTableContainer content={this.state.ranking}/>);
    }

    let content = null;

    switch (this.state.currentPage) {
      case 'Home': 
        content = (<h1>Home</h1>);
        break;
      case 'City': 
        content = (<h1>City</h1>);
        break;
      case 'Arena': 
        content = (<h1>Arena</h1>);
        break;
      case 'Guilds': 
        content = (<h1>Guilds</h1>);
        break;
      case 'Ranking': 
        content = (<div><UpdateContainer reload={this.reload.bind(this)}/>{table}</div>);
        break;
      case 'Vip': 
        content = (<h1>Vip</h1>);
        break;
      default: 
        content = (<h1>Oops! Something went wrong!</h1>);
    }

    return (
      <div className="App">
        <NavBarContainer currentPage={this.state.currentPage} changePage={this.changeCurrentPage.bind(this)}/>
        {content}
      </div>
    );
  }
  
}

export default App;
