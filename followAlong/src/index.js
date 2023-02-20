import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Torillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // adding state like this 
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }

  }
  // Class methods to update state

  // create method & Item like this
  addItem = (e, item) => {
    // add preventDefault Important 
    e.preventDefault(); 
    // 
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    }
    // this will overwrite our whole state object 
    this.setState({...this.state, groceries: [... this.state.groceries, newItem]});
  }
  // add toggle method to change purchased: to true
 toggleItem = itemId =>
 this.setState({...this.state, groceries: this.state.groceries.map(item => {
  if (item.id === itemId){
    return {...item, purchased: !item.purchased}
  }
  return item;
 }) })

//  create a clear purchased function or button like this here
clearPurchased = () => {
  this.setState({...this.state, groceries: this.state.groceries.filter(item => {
    if (!item.purchased) return item;
  })})
}


  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>Shopping List</h1>
           {/* add property here like this needs to point to addItem in the ={} */}
           <ListForm addItem={this.addItem}     />
         </div>
         {/* groceries needs to point to state add in the ={} */}
         {/* add toggleItem here and se it to the function */}
         
        <GroceryList  toggleItem={this.toggleItem} groceries={this.state.groceries} />
        {/* add an onClick to the clearPurchased button to set the clear purchased button */}
        <button onClick={this.clearPurchased} className="clear-btn">Clear Purchased</button>

        {/* render component like this add here */}
        {/* <button onClick={(e) => this.addItem(e, "orange")} >Add Orange</button> */}
       </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);