import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import '@fontsource/roboto';
import './App.css';
import Login from './components/Login/Login';
import { Inquiry } from './components/Inquiry/Inquiry';
import ProtectedRoute from './guards/ProtectedRoute';
import { Offer } from './components/Offer/Offer';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex bg-opacity-25 bg-main flex-col h-screen justify-between">
          <header className="App-header text-left ">
            <span className="qoverme">{'<'} QOVER.ME</span>
          </header>
          <div className="h-full">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Inquiry />} />
                <Route path="/offer" element={<Offer />} />
              </Route>
            </Routes>
          </div>
          <footer>
            <p className="relative py-3 text-white">
              ® Qover {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
