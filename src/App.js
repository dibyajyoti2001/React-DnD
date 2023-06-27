import "./App.css";
import Board from "./Components/Board";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <center>
        <h1>React DnD</h1>
      </center>
      <main className="flexbox">
        <Board id="board-1" className="board">
          <center>
            <h3>Board 1</h3>
          </center>
          <br />
          <Card id="card-1" className="card" draggable="true">
            <p>Board1: Card-one</p>
          </Card>
          <Card id="card-2" className="card" draggable="true">
            <p>Board1: Card-two</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <center>
            <h3>Board 2</h3>
          </center>
          <br />
          <Card id="card-3" className="card" draggable="true">
            <p>Board2: Card-one</p>
          </Card>
          <Card id="card-4" className="card" draggable="true">
            <p>Board2: Card-two</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
