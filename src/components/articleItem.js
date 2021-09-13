import React,{Component} from 'react';
import arrow from './../Arrow.svg';


export class ArticleItem extends Component{

     reaMore =(e)=>{
        console.log(this.props)
    }

    
   

    expandedText =() =>{
        this.props.expand.setState({
            expanded : true 
        })

        
    }

    getMoreTextDiv(){
        if(this.setState.expanded){
                    return <div>{this.props.article.abstract}</div> ;
        }else{
                return null ;
        }
    }


    viewArticle=(e)=>{
        console.log(this.props);
        
      }


    render(){
        return (<div style={itemStyle} >
                      <div style={{width:'20%', display:'inline', }}>
                          <div style={avator}>

                          </div>
                      </div>  
                    <div style={{width: '70%', display:'inline'}}>

                            <span style={heading}>{this.props.article.title.length < 40 ? `${this.props.article.title}` : `${this.props.article.title.substring(0,40)}...`}</span>
                             <div style={{display:'flex', margin:'5px auto', position:'relative'}}>
                                <span style={author}>{this.props.article.byline.length < 30 ? `${this.props.article.byline}` : `${this.props.article.byline.substring(0,30)}...` }</span>
                                <span style={{width:'30%', fontSize:'12px', position:'absolute',right:'0', bottom:'0',color: 'grey'}}>{this.props.article.published_date}</span>
                             </div>
                             
                    </div>
                    <div style={{width:'10%', display:'inline',height:'100%'}} onClick={this.viewArticle}>
                            <img  src={arrow} style={{height:'15px', margin:'50% auto'}}  alt="arrow"/>
                       
                                  
                    

                    </div>
                  
            </div>)
    }
} 


const itemStyle ={
    backgroundColor : '#f4f4f4' ,
    padding :'10px' ,
    display: 'flex'

}
const heading ={
    fontWeight : '700',
    display : 'block'
}
const author ={
    color : 'grey',
    fontSize : '14px',
    width: '70%'
}

const avator = {
    borderRadius : '50%',
    backgroundColor :'grey',
    width : '2.8rem',
    height : '2.8rem',
    margin: '20% auto',

  
}


export default ArticleItem