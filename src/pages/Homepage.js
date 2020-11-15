import React from 'react';
import  BigHome from '../components/BigHome'

function Homepage(props){

    return(
        <BigHome title={props.title} subtitle={props.subtitle} text={props.text} />

    );
}
export default Homepage;