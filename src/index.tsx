import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PersonList from './person/PersonList';
import DenseAppBar from './App';

ReactDOM.render(
  <React.StrictMode>
    <DenseAppBar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PersonList} />
        <Route path="/newPerson" component={PersonList} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
