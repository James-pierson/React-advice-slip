import React, { Component } from "react";
import axios from "axios";

export default class Advice extends Component {
        state = { advice: ''};

        componentDidMount() {
            this.fetchAdvice();
        }

        fetchAdvice = () => {
            axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                const { advice } = response.data.slip

                this.setState({advice})
            })
            .catch((error) => {
                console.error(error)
            });
        }
 
    render() {
        const { advice } = this.state;
        return(
            <h1>{advice}</h1>
        )
    }
}


