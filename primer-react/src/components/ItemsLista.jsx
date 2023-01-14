import { Component } from "react";

class ItemsLista extends Component {
    render() {
        const { item } = this.props;
        return (
            <li>{item}</li>
        );
    }
}

export default ItemsLista