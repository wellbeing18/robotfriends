import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
// import {robots} from './robots'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

// function App() {
//   return (
//     <div className="tc">
//       <h1>RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />      
//     </div>
//   )
// }



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // robots: robots,
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    // console.log(this.props.store.getState())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({robots: users}))
  }


  // bw: callback func for searchbar event handler
  // use => arrow function for callback which using this
  onSearchChange = (event) => {
    // console.log(event.target.value)
    // const searchField = event.target.value 
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    // console.log('robots: ', robots)

    // bw: for slow loading
    if ( robots.length === 0 ) {
      return (
        <div className="tc">
          <h1>Loading...</h1>
        </div>
      ) 
    } else {
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
               
        </div>
      ) 
    }

    // return (
    //   <div className="tc">
    //     <h1>RoboFriends</h1>
    //     <SearchBox searchChange={this.onSearchChange} />
    //     <CardList robots={filteredRobots} />      
    //   </div>
    // ) 
  }
}

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
