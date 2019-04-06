import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { withData } from "../DataProvider"

class SignUp extends Component {
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => this.props.history.push("/home"))
            .catch(err => {
                this.setState({errorMessage: err.response.data.message})
            })
    }

    render() {
        // console.log(this.props)
        const styles={            
            nav:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
            logo:{
                width: 50,
                float: "left",
                margin: 5,
                cursor: "pointer"
            },
            login:{
                zoom: 2,
                outline: "none",
                borderRadius: 5,
                float: "right",
                margin: 5,
                backgroundColor:"orange",
                cursor: "pointer"
            },
            signupTitle:{
                textAlign:"center",
                marginTop: 100,
                fontSize: "5em",
                color: "white",
                marginBottom: 30
            },
            inputs:{
                zoom: 2.2,
                display:"block",
                margin:"auto",
                marginBottom: 10,
                outline:"none",
                border: "black 1px solid",
                borderRadius: 3
            },
            signupButton:{
                zoom: 2.5,
                display:"block",
                margin: "auto",
                backgroundColor:"orange",
                borderRadius: 5,
                outline:"none"
            },
            link:{
                textDecoration:"none"
            }
        }
        return (
            <div>
                <div style={styles.nav}>
                    <Link to="/"><img style={styles.logo} src="http://www.iconarchive.com/download/i99792/designbolts/free-multimedia/News-Mic-iPhone.ico" alt=""/></Link>
                    <Link style={styles.link} to="/"><button style={styles.login}>Sign in</button></Link>
                </div>
                <br style={{margin:0}}/>
                <h1 style={styles.signupTitle}>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        style={styles.inputs} 
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="Username"
                        autoComplete="off"
                    />
                    <input 
                        style={styles.inputs} 
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                    />
                    <button style={styles.signupButton}>Sign up</button>
                </form>
                {
                    this.state.errorMessage && 
                    <p style={{color: "red", textAlign:"center"}}>{this.state.errorMessage}</p>
                }
            </div>
        );
    }
}

export default withData(SignUp);