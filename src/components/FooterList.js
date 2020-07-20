import React, { Component } from 'react';

class FooterList extends Component {
    render() {
        const lists = this.props.list.map((content) =>
            <li>{content}</li>
        );
        return (
            <div id="list-name">
                <h6>{this.props.name}</h6>
                {lists}
            </div>
        );
    }
}

export default FooterList;