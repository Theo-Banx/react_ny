import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Articles from './components/articles'

import {getArticles} from "./api";


class App extends Component{

 async componentDidMount(){
  

    try {
      const response  = await getArticles();
      console.log(response);
      this.setState({ articles: response.results });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }
  state = {
        articles : [
         
        ],
        apiError: "",
  }

  render(){
    console.log(this.state.articles);
    return (
      <div className="App">
          
          <Articles articles={this.state.articles}/>
      </div>
    );
  }
 
}

export default App;
