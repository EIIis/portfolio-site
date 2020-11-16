import React from 'react';
import test from '../assets/test.png' //Change this when you have more projects
import Card from '../components/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
            {
                id: 0,
                title: 'test',
                subtitle: 'test as well',
                imgSrc: test,
                link: 'https://github.com/EIIis/portfolio-site',
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