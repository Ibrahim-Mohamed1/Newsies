import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { withData } from "../DataProvider"

class Login extends Component {
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    componentDidMount() {
        // this.props.getNews()
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
        this.props.login(this.state)
            .then(() => this.props.history.push('/home'))
            .catch(err => {
                this.setState({errorMessage: err.response.data.message})
            })
    }
    render() {
        const styles={
            nav:{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            },
            logo:{
                width: 65,
                float: "left",
                margin: 5,
                cursor: "pointer",
                boxShadow: "0px 0px 5px #000",
                borderRadius: "50%"
            },
            signup:{
                zoom: 2,
                outline: "none",
                borderRadius: 5,
                float: "right",
                margin: 5,
                backgroundColor:"#48ceac",
                cursor: "pointer"
            },
            loginTitle:{
                textAlign:"center",
                margin: 0,
                fontSize: "5em",
                color: "#48ceac",
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
            signinButton:{
                zoom: 2.5,
                display:"block",
                margin: "auto",
                backgroundColor:"#48ceac",
                borderRadius: 5,
                outline: "none"
            },
            link:{
                textDecoration:"none"
            },
            box:{
                backgroundColor:"rgba(0, 0, 0, 0.7)",
                display: "block",
                margin: "auto",
                height: 350,
                width: 350,
                marginTop:100,
                paddingTop: 40,
                borderRadius: 10
            }
        }

        return (
            <div>
                <div style={styles.nav}>
                    <Link to="/"><img style={styles.logo} src="http://www.iconarchive.com/download/i99792/designbolts/free-multimedia/News-Mic-iPhone.ico" alt=""/></Link>
                    <Link style={styles.link} to="/signup"><button style={styles.signup}>Sign up</button></Link>
                </div>
                <br style={{margin:0}}/>
                <div style={styles.box}>
                    <>
                    <h1 style={styles.loginTitle}>Log in</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            style={styles.inputs} 
                            onChange={this.handleChange}
                            value={this.state.username}
                            name="username"
                            type="text"
                            placeholder="username"
                            autoComplete="off"
                            autoFocus
                            required
                        />
                        <input 
                            style={styles.inputs} 
                            onChange={this.handleChange}
                            value={this.state.password}
                            name="password"
                            type="password"
                            placeholder="password"
                            autoComplete="off"
                            required
                        />
                        <button style={styles.signinButton}>Sign in</button>
                    </form>
                    </>
                </div>
                {
                    this.state.errorMessage && 
                    <p style={{color: "red", textAlign:"center"}}>{this.state.errorMessage}</p>
                }
            </div>
        );
    }
}

export default withData(Login);