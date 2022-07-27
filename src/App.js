import CustomBtn from "./components/CustomBtn";
// import Maman from "./components/Maman";
import Game from "./components/Game";

/* import { Navbar } from "react-bootstrap";
import Buttons from "./components/Buttons";
import Template from "./components/Template";
import Welcome from "./components/Welcome"; */

function App() {
    const sayHello = () => {
        alert("hello world");
    };
    console.log(sayHello);
    return (
        <>
            {/* <Maman /> */}
             
            <Game />
            <CustomBtn
                handleClick={sayHello}
                btnStyle={{ backgroundColor: "yellow", color: "blue" }}
            >
                dite hello ^^
            </CustomBtn>

        </>
    );
}

export default App;
