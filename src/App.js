import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Ellis Alcantara',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Contact', path: '/contact'}
      ],
      home:{
        title: 'Ellis',
        subtitle: 'Ellis',
        text: 'Ellis'
      },
      contact:{
        title: 'This is a test',
      }
    }
  }
  render() {
    return (
    <Router>
      <Container className = "p-0" fluid = {true}>

        <Navbar className = "border-bottom" bg ="transparent" expand = "lg">
          <Navbar.Brand> Ellis Alcantara</Navbar.Brand>
          <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle" />
          <Navbar.Collapse id = "navbar-toggle">
            <Nav className = "ml-auto">
              <Link className = "nav-link" to = "/">Home</Link>
              <Link className = "nav-link" to = "/contact">Contact</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path = "/" exact render = {() => <Homepage title = {this.state.home.title} subtitle = {this.state.home.subtitle} text = {this.state.home.text} />} />
        <Route path = "/contact" render = {() => <Contact title = {this.state.contact.title}/>}  />
        <Footer />

      </Container>
    </Router>
    );
  }
}

export default App;
