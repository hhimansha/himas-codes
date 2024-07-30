import './App.css';
import './index.css';
import Header from './components/Header';
import HeaderNav from './components/HeaderNew';
import HeroAbout from './components/Hero&About';
import ProjectsContact from './components/Projects&Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App relative">
      <Router>
        
        <Routes>
          <Route
            path="/"
            element={
              <div className='custom-scrollbar'>
              <Header/>
                <HeroAbout />
                <ProjectsContact />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
