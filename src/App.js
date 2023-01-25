import logo from './logo.svg';
import './App.css';
import CreateTheater from './Components/CreateTheater';
import CreateShow from './Components/CreateShow';
import { Routes, Route } from "react-router-dom"
import ShowTheaters from './Components/ShowTheaters';
import Shows from './Components/Shows';
import Seats from './Components/Seats';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowTheaters />} />
        <Route path="/shows/:id" element={<Shows />} />
        <Route path="/createshows/:id" element={<CreateShow />} />
        <Route path="createtheater" element={<CreateTheater />} />
        <Route path="/bookseat/:id" element={<Seats />} />

      </Routes>

    </div>
  );
}

export default App;
