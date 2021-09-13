import {API_KEY} from './config.js';

export const getArticles = async ()=>{

        const response = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${API_KEY}`);
        const json = await response.json();
        console.log(json);
        return json ;
        
   
}