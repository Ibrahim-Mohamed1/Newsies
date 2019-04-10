import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { withData } from "./DataProvider"

class News extends Component {
    componentDidMount(){
        // this.props.getNews()
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
                gridTemplateColumns: "repeat(auto-fit,minmax(390px, 1fr))",
                textAlign: "center",
                gridGap: 10,
                marginTop: 10,
                marginLeft: '1%',
                marginRight: '1%',
                height: "80vh",
                overflowY:"scroll",
                border: "groove #48ceac",
                borderRadius: 15,
                backgroundColor:"rgba(0, 0, 0, 0.7)",
            },
            child: {
                border: "dashed red",
                borderRadius: 5,
                height: 300,
            },
            logo: {
                width: 65,
                float: "left",
                margin: 5,
                cursor: "pointer",
                boxShadow: "0px 0px 5px #000",
                borderRadius: "50%"
            },
            logout: {
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
            back:{
                zoom: 2,
                outline: "none",
                borderRadius: 5,
                float: "right",
                margin: 5,
                backgroundColor:"rgb(0, 255, 0, .4)",
                cursor: "pointer",
                height: 20,
                border: "solid lime",
                color: "white"
            },
            sectionTitle: {
                textAlign: "center",
                fontSize: "4em",
                color: "white",
                marginTop: 0
            },
            link: {
                textDecoration: "none"
            },
            box:{
                margin: "0% 2%", 
                border:"solid ",
                borderRadius: 10,
                backgroundColor:"rgba(255, 255, 255, 0.8)",
                marginTop: 20,
                marginBottom: 10
            }
        }
        const mappedNews = this.props.news.articles && this.props.news.articles.map((article, n) => {
                return (
                        <div style={styles.box} key={article.publishedAt+n}>
                            <h2 style={{ color: "black" }}>{article.title}</h2>
                            <img style={{ width: "45%" }} alt="" src={article.urlToImage} />
                            <p>{article.description}... <a target="_blank" rel="noopener noreferrer" href={article.url} style={{ color: "red" }}>Read More</a></p>
                        </div>
                )
        })        
        return (
            <div>
                <div style={styles.nav}>
                    <Link to="/home"><img style={styles.logo} src="http://www.iconarchive.com/download/i99792/designbolts/free-multimedia/News-Mic-iPhone.ico" alt="" /></Link>
                    <Link style={styles.link} to="/home"><button style={styles.back}>Back</button></Link>
                    <button style={styles.logout} onClick={() => this.props.logout()}>Log out</button>
                </div>
                <div style={styles.parent}>
                    {mappedNews}
                </div>
                <br/>
            </div>
        );
    }
}

export default withData(News);