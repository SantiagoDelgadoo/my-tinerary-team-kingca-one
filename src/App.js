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
import SignUp from './pages/SignUp';
import LayoutSignUp from './layouts/LayoutSignUp';
function App() {
  return (
    <>
    <AutoToTop></AutoToTop>
    <Routes>
      <Route path='' element= {<Main></Main>}></Route>
      <Route path='/signup' element={<LayoutSignUp></LayoutSignUp>}></Route>
      <Route path='/home' element= {<Main></Main>}></Route>
    </Routes>
    </>
  );
}
export default App;
