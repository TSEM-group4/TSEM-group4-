import React, { Component } from "react";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            errors: {}
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange (event) {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }

    handleSubmit( e) {
        e.preventDefault();
    
        const newUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          errors:this.state.errors
        };

        return fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }


    render() {
    return (
      <div>
        <h1>Sign Up</h1>
        
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text"  name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required /> <br />
            <br />
            <input type="text" name="lastName" placeholder="last Name" value={this.state.lastName} onChange={this.handleChange} required /> <br />
            <br />

            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
            <br />

            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
            <br />
   
            <input type="password"  name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} required />
            <br />
         
            <input type="submit" value="Sign Up" />         
             </form>
        </div>
      </div>
    );
  }
}

export default Signup;
