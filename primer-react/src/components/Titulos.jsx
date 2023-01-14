import { Component } from "react";

class Titulo extends Component {
    render() {
        const { titulo } = this.props;
        return (
            <h1 className="titulo">{titulo}</h1>
        );
    }
}

export default Titulo