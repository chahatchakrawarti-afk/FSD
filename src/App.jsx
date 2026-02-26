import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import mainlayout from './reactrouterform/mainlayout.jsx';
import login from './reactrouterform/login.jsx';
import registration from './reactrouterform/registration.jsx';
import dashboard from './reactrouterform/dashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<mainlayout />}>
          <Route path='login' element={<login />} />
          <Route path='registration' element={<registration />} />
          <Route path='dashboard' element={<dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
