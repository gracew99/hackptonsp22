import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ChatListPage from './components/ChatListPage';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/chats/:id" element={<ChatListPage/>} />
      </Routes>
    </div>
  );
}

export default App;
