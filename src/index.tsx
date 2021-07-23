import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CityTable from './city/CityTable';
import DenseAppBar from './App';
import CityPaginatedTable from './city/CityPaginatedTable';
import CityPTable from './city/CityPTable';

ReactDOM.render(
  <React.StrictMode>
    <DenseAppBar />
    <Router>
      <Link to="/citiesPTable"> spinner</Link>
      <Switch>
        <Route exact path="/" component={CityTable} />
        <Route path="/cities" component={CityTable} />
        <Route path="/citiesPaginated" component={CityPaginatedTable} />
        <Route path="/citiesPTable" component={CityPTable} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
