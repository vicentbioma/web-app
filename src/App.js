import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

class App extends React.Component {
  render() {
     return (
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}exact />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
  );
  }
 
}

export default App;
