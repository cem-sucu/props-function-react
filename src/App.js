import "./App.css";
import CustomBtn from "./components/CustomBtn";
// import Maman from "./components/Maman";
import Game from "./components/Game";

function App() {
    const sayHello = () => {
        alert("hello world");
    };
    console.log(sayHello);
    return (
        <div className="App">
            {/* <Maman /> */}
            <Game />
            <CustomBtn
                handleClick={sayHello}
                btnStyle={{ backgroundColor: "yellow", color: "blue" }}
            >
                dite hello ^^
            </CustomBtn>
        </div>
    );
}

export default App;
