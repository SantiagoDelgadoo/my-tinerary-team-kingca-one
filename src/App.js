import logo from './logo.svg';
import './App.css';
import './data/users';
import './data/cities';
import './data/activities';
import './data/admin';
import './data/places';
import './data/events';
import Main from './layouts/Main';
import {Routes, Route} from 'react-router-dom' 
import Home1 from './pages/Home1';
import AutoToTop from './components/AutoToTop';
function App() {
  return (
    <>
    <AutoToTop></AutoToTop>
    <Main>
    <Routes>
    <Route path="/home" element={<Home1/>}>
      </Route>
    </Routes>
    </Main>
    </>
  );
}
export default App;
