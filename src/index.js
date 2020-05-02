import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import * as serviceWorker from './serviceWorker';
// import Card from './Card'
// import CardList from './CardList'
import App from './containers/App'
import 'tachyons'
import './index.css';
// import {robots} from './robots'


ReactDOM.render(
  // <App />,
  // <CardList robots={robots} />,
  <App />,
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 