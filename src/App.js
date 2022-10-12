import './App.css';
import Info from "./Info.js"
import {PropTypes} from "prop-types";

function App() {
  return (
    <div className="App">
        <Info/>
        <AddItem text={2} number="hello"/>
        <AddItem text="Joe"/>
        <AddItem/>
    </div>
  );
} 

function AddItem(props){

    return (
        <form>
            <label for="text-form">Type something: </label>
            <input type="text" value={props.text} id="text-form"></input>
            <p>{props.number}</p>
        </form>
    )
}

AddItem.defaultProps = {
    number: 1,
    text: "default",
};

AddItem.propTypes = {
    number: PropTypes.number,
    text: PropTypes.string,

}

export default App;
