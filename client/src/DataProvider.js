import React, { Component } from 'react';
import axios from "axios";
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state={
            name: "",
            news: [],
            newsTopics: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    getNewsTopics = () => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://content.guardianapis.com/sections?api-key=eda5b087-7c49-426f-8c8c-1e812d03031c`)
        .then(response => {
            this.setState({ newsTopics: response.data.response.results });
            // console.log(this.state.newsTopics.results)
        })
    }

    getNews = (key) => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://content.guardianapis.com/search?sections=${key}?q=${key}&api-key=eda5b087-7c49-426f-8c8c-1e812d03031c`)
        .then(response => {
            this.setState({
                news: response.data.response.results,
                name: response.data
            })
        })
    }

    signup = (userInfo) => {
        return axios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    login = (credentials) => {
        return axios.post("/auth/login", credentials)
            .then(response => {
                const { user, token } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                this.getNewsTopics();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            user: {},
            token: ""
        })
    }

    render() {
        return (
            <Provider value={{
                signup: this.signup,
                login: this.login,
                logout: this.logout,
                getNews: this.getNews,
                getNewsTopics: this.getNewsTopics,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
}