import React, { Component } from 'react';
import { Link } from "react-router-dom"

class SignUp extends Component {
    constructor(){
        super()
        this.state={

        }
    }
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
                <form onSubmit={() => {}}>
                    <input style={styles.inputs} type="text"/>
                    <input style={styles.inputs} type="text"/>
                    <button style={styles.signupButton}>Sign up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;