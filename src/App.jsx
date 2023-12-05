import Player from "./components/Player"
function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="owca" symbol="X" />
          <Player initialName="mistrz" symbol="O" />
        </ol>
      </div>
    </main>
  )
}

export default App
