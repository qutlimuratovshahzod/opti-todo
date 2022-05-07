import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { TodoList } from "./Pages/TodoList";

function App() {
  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <TodoList/>
      <div>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
