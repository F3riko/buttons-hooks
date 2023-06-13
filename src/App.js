import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ButtonComponent from "./components/button";

function App() {
  return (
    <div className="App">
      <ButtonComponent
        digit="4"
        onClickFunction={(digit) => {
          console.log(digit);
        }}
        className="success"
      />
    </div>
  );
}

export default App;
