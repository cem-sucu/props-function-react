import React, { Component } from "react";
import CustomBtn from "./CustomBtn";

class Game extends Component {
    state = {
        name: "Mario",
        winner: false,
    };

    changeStatus = () => this.setState({ winner: !this.state.winner });
    render() {
        const result = this.state.winner ? `Bravo${this.state.name}` : `raté !`;

        const classColor = this.state.winner ? "alert-success" : "alert-danger";

        const success = {
            backgroundColor: "green",
            color: "black",
        };

        return (
            <div className="container">
                <div className={`alert ${classColor}`} role="alert">
                    {result}
                </div>

                <CustomBtn handleClick={this.changeStatus} btnStyle={success}>
                    cliquer ici{" "}
                </CustomBtn>
            </div>
        );
    }
}

export default Game;
