import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

HeadLine.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tmpArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}

export default HeadLine;