import React, { Component } from 'react';

class PricingList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={this.props.className}>
                <div id="heading">{this.props.name}</div>
                <div id="content">
                    <p><span id="cost">${this.props.cost}</span><span id="month">/mo</span></p>
                    <p>{this.props.users}</p>
                    <p>{this.props.gb}</p>
                    <p>{this.props.help}</p>
                    <p>{this.props.support}</p>
                    <button>{this.props.buttonText}</button>
                </div>
            </div>
        );
    }
}

export default PricingList;