import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { withData } from "./DataProvider"

class News extends Component {
    componentDidMount(){
        this.props.getNews()
    }
    render() {
        const styles = {
            nav:{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            },
            parent: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax( 1fr))",
                textAlign: "center",
                gridGap: 10,
                marginTop: -30,
                marginLeft: '1%',
                marginRight: '1%',
                height: "77vh",
                overflowY:"scroll",
                border: "groove",
                padding: 10,
                borderRadius: 5
            },
            child: {
                border: "dashed red",
                borderRadius: 5,
                height: 300
            },
            logo: {
                width: 50,
                float: "left",
                margin: 5,
                cursor: "pointer"
            },
            logout: {
                zoom: 2,
                outline: "none",
                borderRadius: 5,
                float: "right",
                margin: 5,
                backgroundColor: "orange",
                cursor: "pointer"
            },
            back:{
                zoom: 2,
                outline:"none",
                borderRadius: 5,
                textAlign:"center",
                margin: 5,
                backgroundColor: "lime",
                cursor: "pointer"
            },
            sectionTitle: {
                textAlign: "center",
                fontSize: "4em",
                color: "white",
                marginTop: 0
            },
            submitButton: {
                zoom: 2.5,
                display: "block",
                margin: "auto",
                backgroundColor: "orange",
                borderRadius: 5,
                outline: "none"
            },
            link: {
                textDecoration: "none"
            }
        }
        console.log(this.props)
        const mappedNews = this.props.news.map(article => <div style={styles.child}><a><h2>{article.webTitle}<span>{article.webPublicationDate}</span></h2></a></div>)
        return (
            <div>
                <div style={styles.nav}>
                    <Link to="/home"><img style={styles.logo} src="http://www.iconarchive.com/download/i99792/designbolts/free-multimedia/News-Mic-iPhone.ico" alt="" /></Link>
                    <Link style={styles.link} to="/home"><button style={styles.back}>Back</button></Link>
                    <button style={styles.logout} onClick={() => this.props.logout()}>Log out</button>
                </div>
                <h1 style={styles.sectionTitle}>{this.props.name.webTitle}</h1>
                <div style={styles.parent}>
                    {mappedNews}
                </div>
                <br/>
            </div>
        );
    }
}

export default withData(News);