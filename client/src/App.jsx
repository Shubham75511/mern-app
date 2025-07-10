import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
