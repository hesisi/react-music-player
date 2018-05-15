import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon,Layout,Menu,Input} from 'antd';
import HomeLayout from './layouts/HomeLayout';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import Recommend from './components/Recommend'; 
import Search from './components/Search'; 
import Rank from './components/Rank'; 
import Location from './components/Location'; 
import Recently from './components/Recently'; 
import Download from './components/Download'; 
import Collect from './components/Collect'; 

class App extends Component {
  render() {
    return (
        <Router>
            <HomeLayout>  
                <div>
                    <Route exact path="/" component={Recommend}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Route path="/rank" component={Rank}></Route>
                    <Route path="/location" component={Location}></Route>
                    <Route path="/recently" component={Recently}></Route>
                    <Route path="/download" component={Download}></Route>
                    <Route path="/collect" component={Collect}></Route>
                </div>
            </HomeLayout>
        </Router>
    );
  }
}

export default App;
