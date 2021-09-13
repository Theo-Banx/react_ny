import { render } from "@testing-library/react";
import React from "react";
import React,{Component} from 'react';

export class singlepage extends Component(){


    render(){
        const { state } = this.props.location ;
        return (
            <React.Fragment>
                <h1>The Single News</h1>
            </React.Fragment>
        );
    }
   
}