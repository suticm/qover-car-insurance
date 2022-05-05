import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import '@fontsource/roboto';
import './App.css';
import Login from './components/Login/Login';
import { Inquiry } from './components/Inquiry/Inquiry';
import ProtectedRoute from './guards/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex bg-opacity-25 bg-white bg-hero-pattern flex-col h-screen">
          <header className="App-header text-left ">
            <span className="qoverme">{'<'} QOVER.ME</span>
          </header>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Inquiry />} />
            </Route>
          </Routes>
          <footer>
            <p className="footer relative pt-1 text-center  font-normal  p-8 shadow text-white">
              ® Qover {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
