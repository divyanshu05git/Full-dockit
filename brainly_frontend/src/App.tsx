
import './App.css'
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { BrowserRouter , Routes , Route , Navigate} from 'react-router-dom'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    // add Twitter script once
    if (!document.querySelector('#twitter-wjs')) {
      const script = document.createElement('script');
      script.id = 'twitter-wjs';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/Signup" replace />} />

           <Route path="Signup" element={<Signup/>}/>
           <Route path="Signin" element={<Signin/>}/>
           <Route path="dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )       
}



export default App
