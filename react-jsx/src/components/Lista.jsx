import { Component } from "react";

class Lista extends Component {
    render() {
        const { children } = this.props;
        return (
            <ul>{children}</ul>
        );
    }
}

export default Lista