import { Component } from "react";

class SubTitulo extends Component {
    render() {
        const { subTitulo } = this.props;
        return (
            <h2>{subTitulo}</h2>
        );
    }
}

export default SubTitulo