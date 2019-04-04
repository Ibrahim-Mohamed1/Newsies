import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Login extends Component {
    render() {
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
            signup:{
                zoom: 2,
                outline: "none",
                borderRadius: 5,
                float: "right",
                margin: 5,
                backgroundColor:"orange",
                cursor: "pointer"
            },
            loginTitle:{
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
            signinButton:{
                zoom: 2.5,
                display:"block",
                margin: "auto",
                backgroundColor:"orange",
                borderRadius: 5,
                outline: "none"
            },
            link:{
                textDecoration:"none"
            }
        }
        return (
            <div>
                <div style={styles.nav}>
                    <Link to="/"><img style={styles.logo} src="http://www.iconarchive.com/download/i99792/designbolts/free-multimedia/News-Mic-iPhone.ico" alt=""/></Link>
                    <Link style={styles.link} to="/signup"><button style={styles.signup}>Sign up</button></Link>
                </div>
                <br style={{margin:0}}/>
                <h1 style={styles.loginTitle}>Log in</h1>
                <form onSubmit={() => {}}>
                    <input style={styles.inputs} type="text"/>
                    <input style={styles.inputs} type="text"/>
                    <Link to="/home"><button style={styles.signinButton}>Sign in</button></Link>
                </form>
            </div>
        );
    }
}

export default Login;