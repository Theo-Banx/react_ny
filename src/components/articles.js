import React, {Component} from 'react';
import ArticleItem from './articleItem';


class Articles extends Component {
  

    render(){
       
         return this.props.articles.map((article)=>{
           return  <ArticleItem  key={article.id} article={article}  />

         })
    }
}



export default Articles