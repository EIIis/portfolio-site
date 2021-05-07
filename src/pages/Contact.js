import React from "react";
import BigHome from "../components/BigHome";
import Body from "../components/Body";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";



class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
        }
    }

    // This method allows us to actually type inside out boxes
    handleChange = (event) => { 
        const target = event.target;
        const value = target.type == "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault(); // This disallows the page to refresh when we submit

        console.log(event.target);

        this.setState({
            disabled: true
        });
        Axios.post("http://localhost:3030/api/email", this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }

    render(){

        return(
            <div>
                <BigHome title={this.props.title} />
                <Body>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group> {/* This deals with the name situation */}
                            <Form.Label htmlFor = "name"> Name </Form.Label>
                            <Form.Control id = "name" name = "name" type = "text" value = {this.state.name} onChange = {this.handleChange}/>
                        </Form.Group>

                        <Form.Group> {/* This deals with the form situation */}
                            <Form.Label htmlFor = "email"> Email </Form.Label>
                            <Form.Control id = "email" name = "email" type = "email" value = {this.state.email} onChange = {this.handleChange} />
                        </Form.Group>


                        <Form.Group> {/* This deals with the message situation */}
                            <Form.Label htmlFor = "message"> Message </Form.Label>
                            <Form.Control id = "message" name = "message" as = "textarea" rows = "6" value = {this.state.message} onChange = {this.handleChange} />
                        </Form.Group>

                        <Button className = "d-inline-block" variant = "primary" type = "submit" disabled = {this.state.disabled}>
                            Send Email!
                        </Button>
                        {this.state.emailSent === true && <p className="d-inline success-msg"> Your message was sent! </p>}
                        {this.state.emailSent === false && <p className="d-inline error-msg"> Error! Please try again later! </p>}

                    </Form>
                </Body>
            </div>
        );
    }
}
export default Contact;