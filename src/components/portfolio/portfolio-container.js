import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading:true,
            data: [
            {title:"Burch Farms", category:"Saleing" },
            {title:"Neighbors", category:"Child Care" },
            {title:"Parents", category:"Landscaping" }

        ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    PortfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }
    

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick ={() => this.handleFilter('Saleing')}>Saleing</button>
                <button onClick ={() => this.handleFilter('Child Care')}>Child Care</button>
                <button onClick={() => this.handleFilter('Landscaping')}>Landscaping</button>

                {this.PortfolioItems()}
                
            </div>
        )
    }
}