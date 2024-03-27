import React, { Component } from "react";
import Page from '../page/Page'

class Stops extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stops: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/stops")
        .then(response => response.json())
        .then(stops => {
            this.setState({
                stops: stops
            })
        }, error => console.log("error: ", error))
    }

    render() {
        if (this.state.stops != null) {
            return (
                <Page content={
                    <div>
                        <h1>Stops</h1>
                        <ul>
                            {this.state.stops.map(stop => (
                                <li key={stop.id}>id: {stop.id}, name: {stop.name}</li>
                            ))}
                        </ul>
                    </div>
                } />
            )
        }

        return (<Page content={<div>Loading!</div>} />)
    }
}

export default Stops;
