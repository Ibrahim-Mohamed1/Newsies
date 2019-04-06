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
        this.props.getNewsTopics()
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ value: e.target.value })
    }

    handleSubmit = () => {
        this.props.getNews(this.state.value)
        console.log(this.state.value)
    }

    render() {
        console.log(this.props)
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
                marginTop: 50,
                backgroundColor:"orange",
                borderRadius: 5,
                outline: "none"
            },
            link:{
                textDecoration:"none"
            },
            options:{
                display: "block",
                margin: "auto",
                zoom: 3.5,
                heigt: 5,
                marginTop: "1.2em",
            }
        }

        const mappedTopics = this.props.newsTopics.map(topic => <option value={topic.id} key={topic.webTitle}>{topic.webTitle}</option>)
        return (
            <div>
                <div style={styles.nav}>
                    <Link to="/home"><img style={styles.logo} src="http://www.iconarchive.com/download/i99792/designbolts/free-multimedia/News-Mic-iPhone.ico" alt=""/></Link>
                    <button style={styles.logout} onClick={() => this.props.logout()}>Log out</button>
                </div>
                <br style={{margin:0}}/>
                <h1 style={styles.welcomeTitle}>Welcome</h1>
                <select style={styles.options} onChange={this.handleChange}>
                    <option value="">Please select</option>
                    {mappedTopics}
                </select>
                <Link to="/news"><button style={styles.submitButton} onClick={this.handleSubmit}>Submit</button></Link>
            </div>
        );
    }
}

export default withData(Home);