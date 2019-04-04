import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Home extends Component {
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
            logout:{
                zoom: 2,
                outline: "none",
                borderRadius: 5,
                float: "right",
                margin: 5,
                backgroundColor:"orange",
                cursor: "pointer"
            },
            welcomeTitle:{
                textAlign:"center",
                marginTop: 60,
                fontSize: "4em",
                color: "white",
                marginBottom: 30
            },
            select:{
                zoom: 2.5,
                display:"block",
                margin:"auto",
                marginBottom: 10,
                border:"solid"
            },
            submitButton:{
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
                    <Link to="/home"><img style={styles.logo} src="http://www.iconarchive.com/download/i99792/designbolts/free-multimedia/News-Mic-iPhone.ico" alt=""/></Link>
                    <Link style={styles.link} to="/"><button style={styles.logout}>Log out</button></Link>
                </div>
                <br style={{margin:0}}/>
                <h1 style={styles.welcomeTitle}>Welcome</h1>
                <select style={styles.select}>
                    <option type="text">Hola</option>
                    <option type="text">Hi</option>
                </select>
                    <Link to="/news"><button style={styles.submitButton}  onSubmit={() => {}}>Submit</button></Link>
            </div>
        );
    }
}

export default Home;