
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<h1>hello world2</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie Detail Page</h1>}></Route>
          <Route path="movie/:type" element={<h1>Movie List Page</h1>}></Route>
          <Route path="/" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
      <h1>wait</h1>
    </div>
  );
}

export default App;
