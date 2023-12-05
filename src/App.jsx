import Player from "./components/Player"
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="owca" symbol="X" />
          <Player name="mistrz" symbol="O" />
        </ol>
      </div>
    </main>
  )
}

export default App
