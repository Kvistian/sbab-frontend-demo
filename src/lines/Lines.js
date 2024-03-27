import React, { Component } from "react";
import Page from '../page/Page'

class Lines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/lines")
        .then(response => response.json())
        .then(lines => {
            this.setState({
                lines: lines
            })
        })
    }

    render() {
        if (this.state.lines != null) {
            return (
                <Page content={
                    <div>
                        <h1>Lines</h1>
                        <ul>
                            {this.state.lines.map(line => (
                                <li key={line.id}>id: {line.id}</li>
                            ))}
                        </ul>
                    </div>
                } />
            )
        }

        return (<Page content={<div>Loading!</div>} />)
    }
}

export default Lines;
