import logo from './logo.svg';
import './data/users';
import './data/cities';
import './data/activities';
import './data/admin';
import './data/places';
import './data/events';
import Main from './layouts/Main';
import {Routes, Route} from 'react-router-dom' 
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import AutoToTop from './components/AutoToTop';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
    <AutoToTop></AutoToTop>
    <Routes>
    <Route path="/home1" element={<Home1/>}></Route>
    <Route path="/home2" element={<Home2/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </>
  );
}
export default App;
