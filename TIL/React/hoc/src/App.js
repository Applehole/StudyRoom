import React from "react";
import SearchUsers from "./UserList";
import SearchTodos from "./TodoList";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h2>Higher Ordered Components</h2>
      <div className="section">
        <div>
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
