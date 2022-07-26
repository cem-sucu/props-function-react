import React, { Component } from "react";
<button>pp</button>;
class Game extends Component {
    state = {
        name: "Mario",
        winner: false,
    };

    changeStatus = () => this.setState({ winner: !this.state.winner });
    render() {
        const result = this.state.winner ? `Bravo${this.state.name}` : `raté !`;

        const classColor = this.state.winner ? "alert-success" : "alert-danger";

        return (
            <div className="container">
                <div className={`alert ${classColor}`} role="alert">
                    {result}
                </div>
                <button onClick={this.changeStatus} className="btn btn-primary">
                    Changer
                </button>
            </div>
        );
    }
}

export default Game;
