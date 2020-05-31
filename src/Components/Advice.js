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

                // Sets state to the constant on line 18
                this.setState({advice})
            })
            .catch((error) => {
                // Calls error if API fails
                console.error(error)
            });
        }
 
    render() {
        // Sets advice to the current state set by this.setState on line 20
        const { advice } = this.state;
        return(
        <div className="App">
                    <h1>{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>New Quote</button>    
        </div>
            
        )
    }
}


