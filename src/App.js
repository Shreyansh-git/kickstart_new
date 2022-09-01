import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/RegistrationForm';
import HomePage from './pages/HomePage';
import UserList from './pages/UserList';
import SingleUser from './pages/SingleUser';
import ProtectedRoute from './ProtectedRoute';

function PageNotFound(){
  return(
    <div>
      <h3> 404 page not found</h3>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/users" element={<ProtectedRoute component={UserList} name="naseef" />} />
      <Route path="/userprofile/:userId" element={<ProtectedRoute component={SingleUser}  />} />
      
      <Route path="*" element={<PageNotFound />}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;


// error boundaries
//  naming of the functions
// deploy a application
// creating react build
