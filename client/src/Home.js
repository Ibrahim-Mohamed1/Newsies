import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { withData } from "./DataProvider"

class Home extends Component {
    constructor(){
        super()
        this.state={
            value: ""
        }
    }

    componentDidMount(){
        // this.props.getNews()
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ value: e.target.value })
    }

    handleSubmit = () => {
        this.props.getNews(this.state.value)
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
            logout:{
                zoom: 2,
                outline: "none",
                borderRadius: 5,
                float: "right",
                margin: 5,
                backgroundColor:"rgba(255, 0, 0, .4)",
                cursor: "pointer",
                height: 20,
                border: "solid red",
                color: "white"
            },
            welcomeTitle:{
                textAlign:"center",
                margin: 0,
                fontSize: "5em",
                color: "#48ceac",
                marginBottom: 30
            },
            submitButton:{
                zoom: 2.5,
                display:"block",
                margin: "auto",
                backgroundColor:"#48ceac",
                borderRadius: 5,
                outline: "none",
                marginTop: 20,
            },
            link:{
                textDecoration:"none"
            },
            form:{
                display: "block",
                margin: "auto",
                zoom: 2.3,
                height: 15,
                marginTop: "1.2em",
                outline: "none",
                borderRadius: 5,
                border: "none",
                textAlign: "center"
            },
            box:{
                backgroundColor:"rgba(0, 0, 0, 0.7)",
                display: "block",
                margin: "auto",
                height: 350,
                width: 350,
                marginTop:100,
                paddingTop: 40,
                borderRadius: 10,
            }
        }

        return (
            <div>
                <div style={styles.nav}>
                    <Link to="/home"><img style={styles.logo} src="http://www.iconarchive.com/download/i99792/designbolts/free-multimedia/News-Mic-iPhone.ico" alt=""/></Link>
                    <button style={styles.logout} onClick={() => this.props.logout()}>Log out</button>
                </div>
                <br style={{margin:0}}/>
                <div style={styles.box}>
                    <h1 style={styles.welcomeTitle}>Welcome</h1>
                    <form onClick={this.handleSubmit}>
                        <input style={styles.form} type="text" onChange={this.handleChange} placeholder="Search a news topic" autoFocus required/>
                    <Link style={styles.link} to="/news"><button style={styles.submitButton}>Submit</button></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default withData(Home);