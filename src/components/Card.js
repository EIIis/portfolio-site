import React from "react";
import CardInfo from "../components/CardInfo"

function Card(props){
    return(
        <div className = "d-inline-block e-card" onClick={(e) => props.click(props.item)}>
            <img className = "e-card-image" src = {props.item.imgSrc} alt = {props.item.imgSrc} />
            {props.item.selected && <CardInfo title = {props.item.title} subtitle = {props.item.subtitle} subtitle2 = {props.item.subtitle2} link={props.item.link}/> }
        </div>

    );
}

export default Card