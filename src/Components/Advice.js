import React, { Component } from "react";
import axios from "axios";

export default class Advice extends Component {
    // Sets advice to blank so it can be declared
        state = { advice: ''};

        // Signals if the axios calls sub-components properly
        componentDidMount() {
            this.fetchAdvice();
        }

        // Function that calls API
        fetchAdvice = () => {
            axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                // Simplifies the response call
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


