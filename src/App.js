import './App.css';
import {Routes,Route} from "react-router-dom"
import {First} from './links/First';
import {Regis} from './links/verificacion/regis';
import {Login} from  './links/verificacion/login'
import {AuthProvider} from './authcof'
import {Passwordrec} from './links/verificacion/passwordrec'

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={
        <First />
      }/>
      <Route path='/register' element={<Regis/>}/>
      <Route path='/recoverpassword' element={<Passwordrec/>}/>

    </Routes>
    </AuthProvider>
  </div>
  );
}

export default App;
