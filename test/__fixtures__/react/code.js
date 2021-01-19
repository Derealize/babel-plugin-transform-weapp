import { useState } from "react"

const styles = "count_styles"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <p className={styles}>{count}</p>
    </div>
  );
}

export default App;
