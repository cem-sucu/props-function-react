import "./App.css";
import CustomBtn from "./components/CustomBtn";
// import Maman from "./components/Maman";
import Game from "./components/Game";

function App(props) {
    return (
        <div className="App">
            {/* <Maman /> */}
            <Game />
            <CustomBtn btnStyle={{ backgroundColor: "yellow", color: "blue" }}>
                bouton de app.js
            </CustomBtn>
        </div>
    );
}

export default App;
