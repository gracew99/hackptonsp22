import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ChatListPage from './components/ChatListPage';
import SummaryPage from './components/SummaryPage';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/chats/:id" element={<ChatListPage/>} />
        <Route path="/summary" element={<SummaryPage/>} />
      </Routes>
    </div>
  );
}

export default App;
