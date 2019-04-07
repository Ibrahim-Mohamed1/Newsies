import React, { Component } from 'react';
import axios from "axios";
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state={
            name: "",
            news: [],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        // this.getNews()
    }

    getNews = (key) => {
        axios.get(`https://vschool-cors.herokuapp.com?url=https://newsapi.org/v2/everything?language=en&q=${key}&apiKey=${process.env.REACT_APP_NS}`)
          .then(response => {
            this.setState({
              news: response.data
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
                this.getNews();
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