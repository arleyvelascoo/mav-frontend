import React, { Fragment, useState } from 'react';
import './App.css';
import './index.css';
import axios, { AxiosResponse } from 'axios';
import { Ministry } from './model/Ministry';
import {Pageable} from './model/Pageable';

interface ITask {
  name: string;
  done: boolean;
}

function App() {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit: any = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTAsk(newTask);
    setNewTask('');
    console.log(tasks);
  };

  const addTAsk = (name: string) => {
    const newTasks = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const getAllCountries = () => {
    axios 
      .get<Pageable<Ministry>>(
        'http://localhost:8886/minstarleyvelasco/api/ministry/all'
      )
      .then((response: AxiosResponse) => {
        const receivedData: Pageable<Ministry> = response.data;
        console.log('Response', receivedData);
      });
  };

  const handleSubmit2: any = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getAllCountries();
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="card mt-2">
          <div className="card-body m-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                />
                <div id="emailHelp" className="form-text">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  We'll never share your email with anyone else.
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card mt-2">
          <div className="card-body m-4">
            <form onSubmit={handleSubmit2}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  GetAllCountries
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
