import logo from './logo.svg';
import './data/users';
import './data/cities';
import './data/activities';
import './data/admin';
import './data/places';
import './data/events';
import Main from './layouts/Main';
import {Routes, Route} from 'react-router-dom' 
import AutoToTop from './components/AutoToTop';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Cities from './pages/Cities';
import NewCity from './pages/NewCity';
function App() {
  return (
    
    <Main>
    <AutoToTop></AutoToTop>
    <Routes>
    <Route path="" element={<Welcome/>}></Route>
    <Route path="/home" element={<Welcome/>}></Route>
    <Route path="/cities" element={<Cities/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/newcity" element={<NewCity/>}></Route>
    </Routes>
    </Main>
  );
}
export default App;
