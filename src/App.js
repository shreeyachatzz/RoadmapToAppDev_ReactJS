import './App.css';
import Index from './pages/Index/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted/GetStarted';
import TheFundamentals from './pages/Index/TheFundamentals';
import VersionControl from './pages/Index/VersionControl';
import RepoHosting from './pages/Index/RepoHosting';
import BuildApp from './pages/Index/BuildApp';

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/getStart' element={<GetStarted />}/>
        <Route path='/fundamental' element={<TheFundamentals/>}/>
        <Route path='/version' element={<VersionControl />}/>
        <Route path='/repo' element={<RepoHosting />}/>
        <Route path='/build' element={<BuildApp />}/>
        <Route path='/roadmap' element={<Index />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
