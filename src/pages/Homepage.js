import React from 'react';
import  BigHome from '../components/BigHome';
import Carousel from '../components/Carousel';

function Homepage(props){

    return(
        <div>
        <BigHome title={props.title} subtitle={props.subtitle} text={props.text} />
        <Carousel />
        </div>
    );
}
export default Homepage;