import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "Contact", path: "/contact"}
      ],
      home:{
        title: "Hello!",
        subtitle: "I\'m Ellis Alcantara",
        text: "Click an image below to read a description my project along with a link to my Github containing the source code."
      },
      contact:{
        title: "Let\'s connect!",
      }
    }
  }
  /*
  Nav.Brand changes the top left
  Link className lets you add more pages
  */
  render() {
    return (
    <Router>
      <Container className = "p-0" fluid = {true}>

        <Navbar className = "border-bottom" bg ="transparent" expand = "lg">
          <Navbar.Brand></Navbar.Brand> 
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
