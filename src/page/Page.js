import React, { Component } from "react";
import './Page.css';
import Header from '../header/Header'
import Footer from '../footer/Footer'

class Page extends Component {
    render() {
        return (
            <div class="page">
                <Header />
                <div class="content-wrapper">
                    <div class="content">
                        {this.props.content}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Page;
