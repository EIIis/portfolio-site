import React from "react";
import Card from "../components/Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import wavImage from "../assets/wav.svg" // Change/Add more when you have more projects
import twitter from "../assets/tweet.svg"
import caviarCoin from "../assets/logo.svg"
import portHome from "../assets/homepage.svg"

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
            { // Add another bracket, while adding +1 to the latest id to add another project
                id: 0,
                title: "Blog Site",
                subtitle: "A Twitter bot which replies to users",
                imgSrc: twitter,
                link: "http://github.com/EIIis/blog-site",
                selected: false
            },
            {
                id: 1,
                title: "Algorithm Visualization Site",
                subtitle: "A Twitter bot which replies to users",
                subtitle2: "SHESSH",
                imgSrc: twitter,
                link: "http://github.com/EIIis/algo-visualization",
                selected: false
            },
            { 
                id: 2,
                title: "Portfoilio Site",
                subtitle: "Portfolio site (site you're on) created with",
                subtitle2: "React and JavaScript to display myself!",
                imgSrc: portHome,
                link: "http://github.com/EIIis/portfolio-site",
                selected: false
            },
            {
                id: 3,
                title: "Sentiment Twitter Analysis ",
                subtitle: "Analyzes a given user's tweers in order",
                subtitle2: "to determine the sentimental value.",
                imgSrc: twitter,
                link: "http://github.com/EIIis/sentiment-analysis",
                selected: false
            },
            { 
                id: 4,
                title: "Audio 2 Text",
                subtitle: "Uses a .wav file and returns a transcript",
                imgSrc: wavImage,
                link: "http://github.com/EIIis/audio-recog",
                selected: false
                
            },
            { 
                id: 5,
                title: "CaviarCoin",
                subtitle: "Worked with a team to developed the",
                subtitle2: "front-end of a website for 'Cavair Coin'",
                imgSrc: caviarCoin,
                link: "No live-site/Private Repo! Sorry :(",
                selected: false  
            }
        ] 
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item = {item} click={(e => this.handleCardClick(item.id, e))} key = {item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
