import React, { Component } from 'react';
import './styles.scss'

class HeadLine extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        const {header, desc} = this.props;

        if(!header) return null;
        
        return (
            <div data-test='headLineComponent'>
                <h1 data-test='title'>
                    {header}
                </h1>
                <p data-test='description'>
                    {desc}
                </p>
            </div> 
        )
    }
}

export default HeadLine;