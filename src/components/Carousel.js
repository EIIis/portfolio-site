import React from "react";
import wavImage from "../assets/wav.png" // Change/Add more when you have more projects
import twitterBot from "../assets/twitter-bot.png"
import Card from "../components/Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
            { // Add another bracket, while adding +1 to the latest id to add another project
                id: 0,
                title: "Sentiment Twitter Analysis ",
                subtitle: "Analyzes tweets to determine sentiment",
                imgSrc: twitterBot,
                link: "https://github.com/EIIis/sentiment-analysis",
                selected: false
            },
            { 
                id: 1,
                title: "Audio 2 Text",
                subtitle: "Uses a .wav file and returns a transcript",
                imgSrc: wavImage,
                link: "https://github.com/EIIis/audio-recog",
                selected: false
                
            },
            {
                id: 2,
                title: "Twitter Reply Bot",
                subtitle: "A Twitter bot which replies to users",
                imgSrc: twitterBot,
                link: "https://github.com/EIIis/TwitterBot",
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