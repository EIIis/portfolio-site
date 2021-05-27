import React from "react";
import { useSpring , animated } from "react-spring";

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return(
        <animated.div className="e-card-info" style={style}>
            <p className = "e-card-title">{props.title}</p>
            <p className = "e-card-sub-title">{props.subtitle}</p>
            <p className = "e-card-sub-title">{props.subtitle2}</p>
            <a href = {props.link}>{props.link}</a>
        </animated.div>
    );
}
export default CardInfo;