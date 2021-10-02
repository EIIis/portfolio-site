import React from "react";
import Card from "../components/Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import wavImage from "../assets/wav.svg" // Change/Add more when you have more projects
import twitter from "../assets/tweet.svg"
import caviarCoin from "../assets/logo.svg"
import portHome from "../assets/homepage.svg"
import github from "../assets/GitHub-Mark.svg"
import LingoMate from "../assets/LingoMate.svg"
import blackjack from "../assets/blackjack.png"

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
            { // Add another bracket, while adding +1 to the latest id to add another project
                id: 0,
                title: "Portfoilio Site",
                subtitle: "Portfolio site (site you're on) created with",
                subtitle2: "React and JavaScript to display myself!",
                imgSrc: portHome,
                link: <a href="http://github.com/EIIis/portfolio-site" target="_blank" rel="noopener noreferrer">Link to site's source code</a>,
                selected: false
            },
            { 
                id: 1,
                title: "Caviar Coin",
                subtitle: "Worked with a team to developed the",
                subtitle2: "front-end of a website for 'Cavair Coin'",
                imgSrc: caviarCoin,
                link: <a href="https://bit.ly/CaviarCoin" target="_blank" rel="noopener noreferrer">Link to Caviar site</a>,
                selected: false  
            },
            {
                id: 2,
                title: "Sentiment Twitter Analysis ",
                subtitle: "Analyzes a given user's tweers in order",
                subtitle2: "to determine the sentimental value.",
                imgSrc: twitter,
                link: <a href="http://github.com/EIIis/sentiment-analysis" target="_blank" rel="noopener noreferrer">GitHub to source code</a>,
                selected: false
            },
            { 
                id: 3,
                title: "Audio To Text",
                subtitle: "Uses a .wav file and returns a transcript",
                imgSrc: wavImage,
                link: <a href="http://github.com/EIIis/audio-recog" target="_blank" rel="noopener noreferrer">GitHub to source code</a>,
                selected: false
                
            },
            {
                id: 4,
                title: "LingoMate",
                subtitle: "A web app that allows users to match",
                subtitle2: "with new people to learn language.",
                imgSrc: LingoMate,
                link: <a href="http://github.com/EIIis/LingoMate" target="_blank" rel="noopener noreferrer">GitHub to LingoMate</a>,
                selected: false
            },
            {
                id: 5,
                title: "Blackjack",
                subtitle: "A simple terminal based blackjack game",
                subtitle2: "developed in Python.",
                imgSrc: blackjack,
                link: <a href="https://github.com/EIIis/Blackjack" target="_blank" rel="noopener noreferrer">GitHub to Blackjack</a>,
                selected: false,
            },
            {
                id: 6,
                title: "Blog Site",
                subtitle: "My blogsite written in TypeScript.",
                subtitle2: "In Development, check Github! ",
                imgSrc: github,
                link: <a href="http://github.com/EIIis/blog-site" target="_blank" rel="noopener noreferrer">GitHub to Blogsite</a>,
                selected: false
            },
            {
                id: 7,
                title: "Algorithm Visualization Site",
                subtitle: "Algorithmn Visualizer site developed",
                subtitle2: "in JavaScript. In-progress, no code",
                imgSrc: github,
                link: <a href="https://github.com/EIIis/algo-visualization" target="_blank" rel="noopener noreferrer">GitHub to source code</a>,
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
