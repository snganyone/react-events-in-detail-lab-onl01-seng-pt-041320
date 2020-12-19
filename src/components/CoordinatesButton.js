// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{
    getCoordinates = (event) => {
        let x = event.clientX;
        let y = event.clientY
        let coors = [x, y];
        this.props.onReceiveCoordinates(coors);
    }

    render(){
        return(
            <button onClick = {this.getCoordinates}>Click me to get coordinates</button>
        )
    }
}